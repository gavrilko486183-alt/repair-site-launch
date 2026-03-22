import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/0dd5aea3-c4cb-4ce3-b5e7-8d7b6d1115dc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
        setFormData({ name: '', phone: '', comment: '' });
      } else {
        alert('Произошла ошибка при отправке заявки. Попробуйте позже.');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке заявки. Попробуйте позже.');
    }
    
    setIsSubmitting(false);
  };

  const detailedServices = [
    {
      icon: "Paintbrush",
      title: "Покраска стен и потолков",
      description: "Качественная окраска любой сложности с подбором цвета"
    },
    {
      icon: "Square",
      title: "Поклейка обоев",
      description: "Профессиональная поклейка всех видов обоев"
    },
    {
      icon: "Grid3x3",
      title: "Укладка плитки",
      description: "Плитка в ванной, кухне, коридоре с гарантией качества"
    },
    {
      icon: "Layers",
      title: "Укладка ламината и паркета",
      description: "Монтаж напольных покрытий с идеальной геометрией"
    },
    {
      icon: "Zap",
      title: "Электромонтажные работы",
      description: "Замена проводки, установка розеток и выключателей"
    },
    {
      icon: "Droplet",
      title: "Сантехнические работы",
      description: "Замена труб, установка сантехники, подключение оборудования"
    },
    {
      icon: "DoorOpen",
      title: "Установка дверей",
      description: "Монтаж межкомнатных и входных дверей под ключ"
    },
    {
      icon: "SquareStack",
      title: "Монтаж гипсокартона",
      description: "Выравнивание стен, потолки, ниши и перегородки"
    },
    {
      icon: "Ruler",
      title: "Штукатурка и шпаклевка",
      description: "Идеальное выравнивание поверхностей под покраску"
    }
  ];

  const services = [
    {
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/e5ccd598-46b5-4a4d-86b0-bc98afeed5a2.jpg",
      title: "Косметический ремонт",
      description: "Быстрое обновление интерьера без глобальных изменений"
    },
    {
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/fd7282f6-0df1-4fce-b9bc-678b360d1f41.jpg",
      title: "Капитальный ремонт",
      description: "Полная трансформация пространства под ваши потребности"
    },
    {
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/d01ad933-bd90-4c79-9f10-2f2f5d74be36.jpg",
      title: "Дизайнерский ремонт",
      description: "Уникальный интерьер по индивидуальному проекту"
    },
    {
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/937e0eea-ebb2-4ea7-b841-5352c73ec581.jpg",
      title: "Ремонт под ключ",
      description: "Комплексное решение от проекта до финальной уборки"
    },
    {
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/a74ef120-22dc-4db9-b832-fe521dfa48e2.jpg",
      title: "Полный финансовый отчет",
      description: "Прозрачная смета и детализация всех расходов на каждом этапе"
    }
  ];

  const portfolio = [
    {
      name: "ЖК Авангард",
      area: "85 м²",
      type: "Дизайнерский ремонт",
      images: [
        "https://cdn.poehali.dev/files/7e699a57-ed48-4c67-ab2d-70e4f529d363.jpg",
        "https://cdn.poehali.dev/files/8c9304a9-31a0-4e25-bb62-e512765feb38.jpg",
        "https://cdn.poehali.dev/files/6bf9fe46-36a1-43da-b9ca-092fb060362f.jpg",
        "https://cdn.poehali.dev/files/2297017b-a537-4b11-b6b2-de8f88d0f4c8.jpg"
      ]
    },
    {
      name: "ЖК Rose-town",
      area: "100 м²",
      type: "Дизайнерский ремонт",
      images: [
        "https://cdn.poehali.dev/files/1cc0f12b-96ba-469c-a98f-12a4a616d0e6.jpg",
        "https://cdn.poehali.dev/files/1eddb367-e1f5-424c-86cb-a928deff7bbe.jpg",
        "https://cdn.poehali.dev/files/66514a8a-ff95-4e8c-9dde-1d1b2bc334e5.jpg",
        "https://cdn.poehali.dev/files/a2bf2a59-f035-430d-b978-c277891da685.jpg"
      ]
    },
    {
      name: "ЖК Авангард",
      area: "46 м²",
      type: "Дизайнерский ремонт",
      images: [
        "https://cdn.poehali.dev/files/0339561b-988b-453a-818b-d6cc87bf372d.jpg",
        "https://cdn.poehali.dev/files/55e73950-b525-4825-ba51-bf5406e392b3.jpg",
        "https://cdn.poehali.dev/files/687c4aa8-7b53-437b-8cf6-2b1294377220.jpg",
        "https://cdn.poehali.dev/files/06394939-05b2-42fc-b4d0-f3c39d10a090.jpg"
      ]
    },
    {
      name: "ЖК Авангард",
      area: "113 м²",
      type: "Дизайнерский ремонт",
      images: [
        "https://cdn.poehali.dev/files/20ae3e91-30f4-4b99-a9b9-3f56f9aa53e1.jpg",
        "https://cdn.poehali.dev/files/a29ebd28-08c2-46b3-aeb0-3ddb8605b60a.jpg",
        "https://cdn.poehali.dev/files/e8055c09-60df-4895-9b3e-fbb6c0b9fccc.jpg",
        "https://cdn.poehali.dev/files/74ac4707-6889-4921-aed6-ee27b8cf5ebc.jpg"
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold font-sans">Про<span className="text-primary">Ремонт65</span></h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <Button onClick={() => scrollToSection('contact')}>Заказать звонок</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6 text-foreground">
              Ремонт квартир и коттеджей<br/>
              <span className="text-primary">под ключ</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
              Превратим вашу квартиру или коттедж в дом мечты с гарантией качества и в срок
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессиональный подход к каждому проекту</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold font-sans mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Реализованные проекты с гарантией качества</p>
          <div className="max-w-6xl mx-auto space-y-16">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {project.images.map((img, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
                        <img 
                          src={img} 
                          alt={`${project.name} - фото ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold font-sans mb-6">{project.name}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <Icon name="Maximize" size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Площадь</p>
                          <p className="text-lg font-semibold">{project.area}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <Icon name="Star" size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Тип работ</p>
                          <p className="text-lg font-semibold">{project.type}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="detailed-services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Полный перечень услуг</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выполним работы любой сложности</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Наш менеджер свяжется с вами в течение 15 минут
            </p>
            <Card className="border-2">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Номер телефона</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Комментарий (необязательно)</label>
                    <Textarea
                      placeholder="Опишите ваш проект..."
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 pt-8 border-t border-border">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                    <a href="tel:+79244834514">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7(924)4834514
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                    <a href="https://wa.me/79244834514" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold font-sans">Про<span className="text-primary">Ремонт65</span></h3>
              </div>
              <p className="text-white/80">Профессиональный ремонт квартир и коттеджей с гарантией качества</p>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7(924)4834514
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  yuri.lopatkin@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">График работы</h4>
              <p className="text-white/80">Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 ПроРемонт65. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;