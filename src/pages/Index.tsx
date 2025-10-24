import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Icon name="Building2" className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Городской портал
              </h1>
              <p className="text-xs text-muted-foreground">Ваш город онлайн</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveSection('news')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Новости
            </button>
            <button
              onClick={() => setActiveSection('events')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Афиша
            </button>
            <button
              onClick={() => setActiveSection('services')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Услуги
            </button>
            <button
              onClick={() => setActiveSection('directory')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Справочник
            </button>
            <button
              onClick={() => setActiveSection('map')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Карта
            </button>
            <button
              onClick={() => setActiveSection('forum')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Форум
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden sm:flex"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Icon name="Bell" className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white animate-pulse-glow">
                  {notifications.length}
                </span>
              )}
            </Button>
            <Button onClick={handleRequestNotifications} size="sm" className="hidden sm:flex">
              <Icon name="BellRing" className="mr-2 h-4 w-4" />
              Подписаться
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {showNotifications && notifications.length > 0 && (
          <div className="absolute right-4 top-20 w-80 animate-scale-in">
            <Card className="shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Уведомления</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {notifications.map(notif => (
                  <div key={notif.id} className="rounded-lg border bg-muted/50 p-3 animate-fade-in">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{notif.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{notif.timestamp}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background animate-slide-up">
            <nav className="container px-4 py-4 space-y-1">
              <button
                onClick={() => { setActiveSection('news'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Newspaper" className="h-5 w-5 text-primary" />
                <span className="font-medium">Новости</span>
              </button>
              <button
                onClick={() => { setActiveSection('events'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Calendar" className="h-5 w-5 text-primary" />
                <span className="font-medium">Афиша</span>
              </button>
              <button
                onClick={() => { setActiveSection('services'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Wrench" className="h-5 w-5 text-primary" />
                <span className="font-medium">Услуги</span>
              </button>
              <button
                onClick={() => { setActiveSection('directory'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                <span className="font-medium">Справочник</span>
              </button>
              <button
                onClick={() => { setActiveSection('map'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="MapPin" className="h-5 w-5 text-primary" />
                <span className="font-medium">Карта города</span>
              </button>
              <button
                onClick={() => { setActiveSection('forum'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Users" className="h-5 w-5 text-primary" />
                <span className="font-medium">Форум жителей</span>
              </button>
              <div className="border-t pt-3 mt-3">
                <button
                  onClick={() => { setShowNotifications(!showNotifications); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="relative">
                    <Icon name="Bell" className="h-5 w-5 text-primary" />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                        {notifications.length}
                      </span>
                    )}
                  </div>
                  <span className="font-medium">Уведомления</span>
                </button>
                <Button 
                  onClick={() => { handleRequestNotifications(); setMobileMenuOpen(false); }} 
                  className="w-full mt-2"
                >
                  <Icon name="BellRing" className="mr-2 h-4 w-4" />
                  Подписаться на уведомления
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="container px-4 py-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-8 md:p-12 mb-12 animate-fade-in">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Добро пожаловать!
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl">
              Современный городской портал — все услуги, новости и события в одном месте
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти услугу
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Icon name="MapPin" className="mr-2 h-5 w-5" />
                Интерактивная карта
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <img 
              src="https://cdn.poehali.dev/projects/53f30b04-55fc-495b-9ad3-e6c25c874615/files/b36f3f44-baa0-438b-a48f-414c46d12bf4.jpg"
              alt="City"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="mb-12 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold">Городские новости</h3>
              <p className="text-muted-foreground mt-1">Актуальные события и объявления</p>
            </div>
            <Button variant="outline">
              <Icon name="Newspaper" className="mr-2 h-4 w-4" />
              Все новости
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {newsItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    {item.urgent && (
                      <Badge className="bg-accent text-white animate-pulse-glow">Срочно</Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" className="h-3 w-3" />
                      {item.date}
                    </span>
                    <Badge variant="outline">{item.category}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold">Афиша мероприятий</h3>
              <p className="text-muted-foreground mt-1">Культурная жизнь города</p>
            </div>
            <Button variant="outline">
              <Icon name="Calendar" className="mr-2 h-4 w-4" />
              Полная афиша
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-primary mb-2">{event.date}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" className="h-3 w-3" />
                    {event.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold">Городские услуги</h3>
              <p className="text-muted-foreground mt-1">Быстрый доступ к важным сервисам</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:border-primary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <Icon name={service.icon} className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon name="BookOpen" className="h-6 w-6" />
                </div>
                <CardTitle>Городской справочник</CardTitle>
              </div>
              <CardDescription className="text-base">
                Контакты организаций, адреса учреждений, телефоны экстренных служб
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Icon name="Search" className="mr-2 h-4 w-4" />
                Открыть справочник
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-secondary/5 border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <img 
                src="https://cdn.poehali.dev/projects/53f30b04-55fc-495b-9ad3-e6c25c874615/files/6f21f30d-8503-47a7-b2ab-0e3e43f79324.jpg"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                  <Icon name="Users" className="h-6 w-6" />
                </div>
                <CardTitle>Форум жителей</CardTitle>
              </div>
              <CardDescription className="text-base">
                Общайтесь с соседями, обсуждайте проблемы района, предлагайте идеи
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button className="w-full" variant="secondary">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Перейти на форум
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <ClassifiedsBoard />
        </section>
      </main>

      <footer className="border-t bg-muted/50 py-8">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="font-bold mb-3">О портале</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все услуги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">МФЦ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Госуслуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Афиша</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Объявления</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обратная связь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщить о проблеме</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Городской портал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}