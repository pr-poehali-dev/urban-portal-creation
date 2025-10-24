import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Header from '@/components/portal/Header';
import HeroSection from '@/components/portal/HeroSection';
import NewsSection from '@/components/portal/NewsSection';
import EventsSection from '@/components/portal/EventsSection';
import ServicesSection from '@/components/portal/ServicesSection';
import AdditionalSections from '@/components/portal/AdditionalSections';
import Footer from '@/components/portal/Footer';
import ClassifiedsBoard from '@/components/ClassifiedsBoard';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  urgent: boolean;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
}

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const newsItems: NewsItem[] = [
    { id: 1, title: 'Открытие нового парка в центре города', date: '23 октября 2025', category: 'Городская среда', urgent: true },
    { id: 2, title: 'Изменение в графике работы МФЦ', date: '22 октября 2025', category: 'Услуги', urgent: false },
    { id: 3, title: 'Запуск программы благоустройства дворов', date: '21 октября 2025', category: 'Развитие', urgent: false },
    { id: 4, title: 'Новые маршруты общественного транспорта', date: '20 октября 2025', category: 'Транспорт', urgent: true },
  ];

  const events: EventItem[] = [
    { id: 1, title: 'Фестиваль уличной еды', date: '28-29 октября', location: 'Центральная площадь', image: 'https://cdn.poehali.dev/projects/53f30b04-55fc-495b-9ad3-e6c25c874615/files/b36f3f44-baa0-438b-a48f-414c46d12bf4.jpg' },
    { id: 2, title: 'Концерт симфонического оркестра', date: '1 ноября', location: 'Филармония', image: 'https://cdn.poehali.dev/projects/53f30b04-55fc-495b-9ad3-e6c25c874615/files/b36f3f44-baa0-438b-a48f-414c46d12bf4.jpg' },
    { id: 3, title: 'Выставка современного искусства', date: '5-20 ноября', location: 'Музей искусств', image: 'https://cdn.poehali.dev/projects/53f30b04-55fc-495b-9ad3-e6c25c874615/files/b36f3f44-baa0-438b-a48f-414c46d12bf4.jpg' },
  ];

  const services: ServiceItem[] = [
    { id: 1, title: 'Онлайн-запись в МФЦ', description: 'Запишитесь на прием без очереди', icon: 'CalendarCheck' },
    { id: 2, title: 'Оплата услуг ЖКХ', description: 'Оплачивайте счета онлайн', icon: 'Receipt' },
    { id: 3, title: 'Обращения в администрацию', description: 'Отправьте запрос мэру', icon: 'MessageSquare' },
    { id: 4, title: 'Запись к врачу', description: 'Электронная регистратура', icon: 'Stethoscope' },
    { id: 5, title: 'Транспортная карта', description: 'Пополнение и управление', icon: 'CreditCard' },
    { id: 6, title: 'Образование', description: 'Запись в детский сад и школу', icon: 'GraduationCap' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotification: Notification = {
        id: Date.now(),
        title: 'Важное событие!',
        message: 'Завтра в 10:00 начинается фестиваль уличной еды на Центральной площади',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setNotifications(prev => [newNotification, ...prev]);
      toast.success('Новое уведомление!', {
        description: newNotification.message,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRequestNotifications = () => {
    toast.success('Уведомления включены!', {
      description: 'Теперь вы будете получать важные новости города',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header
        notifications={notifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setActiveSection={setActiveSection}
        handleRequestNotifications={handleRequestNotifications}
      />

      <main className="container px-4 py-8">
        <HeroSection />
        <NewsSection newsItems={newsItems} />
        <EventsSection events={events} />
        <ServicesSection services={services} />
        <AdditionalSections />

        <section className="mb-12 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <ClassifiedsBoard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
