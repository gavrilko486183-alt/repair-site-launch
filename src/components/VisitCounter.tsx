import { useEffect } from 'react';

const VisitCounter = () => {
  useEffect(() => {
    const incrementVisit = async () => {
      try {
        await fetch('https://functions.poehali.dev/349af4c6-f220-422e-8973-b9bd9d857fdd', {
          method: 'POST'
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    incrementVisit();
  }, []);

  return null;
};

export default VisitCounter;
