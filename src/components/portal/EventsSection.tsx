import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

interface EventsSectionProps {
  events: EventItem[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
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
  );
}
