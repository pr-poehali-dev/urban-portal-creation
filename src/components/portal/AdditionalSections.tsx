import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AdditionalSections() {
  return (
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
  );
}
