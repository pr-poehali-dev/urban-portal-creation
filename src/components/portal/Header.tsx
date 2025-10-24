import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
}

interface HeaderProps {
  notifications: Notification[];
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  handleRequestNotifications: () => void;
}

export default function Header({
  notifications,
  showNotifications,
  setShowNotifications,
  mobileMenuOpen,
  setMobileMenuOpen,
  setActiveSection,
  handleRequestNotifications,
}: HeaderProps) {
  return (
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
  );
}
