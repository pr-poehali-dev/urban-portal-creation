import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}
