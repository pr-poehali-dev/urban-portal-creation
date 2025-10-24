import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  urgent: boolean;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

export default function NewsSection({ newsItems }: NewsSectionProps) {
  return (
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
  );
}
