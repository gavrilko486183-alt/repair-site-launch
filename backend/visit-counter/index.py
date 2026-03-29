"""
Подсчёт посещений сайта и отправка уведомлений в Telegram
"""
import json
import os
import urllib.request
import psycopg2


def send_telegram(token: str, chat_id: str, text: str):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({"chat_id": chat_id, "text": text, "parse_mode": "HTML"}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=5)


def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    database_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()

    if method == 'POST':
        cursor.execute(
            "UPDATE site_visits SET visit_count = visit_count + 1, last_visit = CURRENT_TIMESTAMP WHERE id = 1 RETURNING visit_count"
        )
        result = cursor.fetchone()
        cursor.execute(
            "INSERT INTO daily_visits (visit_date, visit_count, updated_at) VALUES (CURRENT_DATE, 1, CURRENT_TIMESTAMP) ON CONFLICT (visit_date) DO UPDATE SET visit_count = daily_visits.visit_count + 1, updated_at = CURRENT_TIMESTAMP RETURNING visit_count"
        )
        today_result = cursor.fetchone()
        conn.commit()

        visit_count = result[0] if result else 0
        today_count = today_result[0] if today_result else 0

        token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        if token and chat_id:
            try:
                send_telegram(token, chat_id, f"👁 Новый посетитель на сайте!\nВсего посещений: <b>{visit_count}</b>\nСегодня: <b>{today_count}</b>")
            except Exception:
                pass
    else:
        cursor.execute("SELECT visit_count FROM site_visits WHERE id = 1")
        result = cursor.fetchone()
        visit_count = result[0] if result else 0

    cursor.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'visits': visit_count})
    }
