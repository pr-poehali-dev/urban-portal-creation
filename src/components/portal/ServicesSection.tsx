import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
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
  );
}
