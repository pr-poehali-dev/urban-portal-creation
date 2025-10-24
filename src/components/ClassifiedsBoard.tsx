import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Classified {
  id: number;
  title: string;
  description: string;
  category: string;
  price?: string;
  author: string;
  date: string;
  phone?: string;
  urgent: boolean;
}

const categories = [
  { value: 'sale', label: 'Продажа', icon: 'ShoppingBag', color: 'bg-blue-500' },
  { value: 'services', label: 'Услуги', icon: 'Wrench', color: 'bg-purple-500' },
  { value: 'jobs', label: 'Работа', icon: 'Briefcase', color: 'bg-green-500' },
  { value: 'realty', label: 'Недвижимость', icon: 'Home', color: 'bg-orange-500' },
  { value: 'community', label: 'Сообщество', icon: 'Users', color: 'bg-pink-500' },
  { value: 'other', label: 'Разное', icon: 'Tag', color: 'bg-gray-500' },
];

export default function ClassifiedsBoard() {
  const [classifieds, setClassifieds] = useState<Classified[]>([
    { id: 1, title: 'Продам велосипед горный', description: 'Велосипед в отличном состоянии, 21 скорость, алюминиевая рама', category: 'sale', price: '15 000 ₽', author: 'Александр', date: '23 октября', phone: '+7 (999) 123-45-67', urgent: false },
    { id: 2, title: 'Требуется репетитор по математике', description: 'Ищем опытного репетитора для подготовки к ЕГЭ, 11 класс', category: 'services', price: '1 500 ₽/час', author: 'Мария', date: '23 октября', phone: '+7 (999) 234-56-78', urgent: true },
    { id: 3, title: 'Вакансия: менеджер по продажам', description: 'Требуется активный менеджер с опытом работы от 1 года. ЗП от 60 000 руб', category: 'jobs', author: 'ООО "Компания"', date: '22 октября', phone: '+7 (999) 345-67-89', urgent: false },
    { id: 4, title: 'Сдаю 2-комнатную квартиру', description: 'Центр города, евроремонт, мебель, техника. Длительный срок', category: 'realty', price: '35 000 ₽/мес', author: 'Ольга', date: '22 октября', phone: '+7 (999) 456-78-90', urgent: false },
    { id: 5, title: 'Пропала кошка в районе парка', description: 'Рыжая кошка, откликается на кличку Мурка. Просьба помочь найти!', category: 'community', author: 'Елена', date: '21 октября', phone: '+7 (999) 567-89-01', urgent: true },
    { id: 6, title: 'Отдам котят в добрые руки', description: '3 котенка, 2 месяца, приучены к лотку, очень игривые и ласковые', category: 'community', author: 'Анна', date: '21 октября', phone: '+7 (999) 678-90-12', urgent: false },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newClassified, setNewClassified] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    phone: '',
    urgent: false,
  });

  const filteredClassifieds = classifieds.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = () => {
    if (!newClassified.title || !newClassified.description || !newClassified.category) {
      toast.error('Заполните обязательные поля', {
        description: 'Название, описание и категория обязательны для заполнения',
      });
      return;
    }

    const classified: Classified = {
      id: Date.now(),
      title: newClassified.title,
      description: newClassified.description,
      category: newClassified.category,
      price: newClassified.price || undefined,
      phone: newClassified.phone || undefined,
      author: 'Вы',
      date: 'Сегодня',
      urgent: newClassified.urgent,
    };

    setClassifieds([classified, ...classifieds]);
    setIsDialogOpen(false);
    setNewClassified({
      title: '',
      description: '',
      category: '',
      price: '',
      phone: '',
      urgent: false,
    });

    toast.success('Объявление опубликовано!', {
      description: 'Ваше объявление появится в списке через несколько секунд',
    });
  };

  const getCategoryInfo = (categoryValue: string) => {
    return categories.find(c => c.value === categoryValue) || categories[categories.length - 1];
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-3xl font-bold">Доска объявлений</h3>
          <p className="text-muted-foreground mt-1">Покупка, продажа, услуги и многое другое</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="font-semibold">
              <Icon name="Plus" className="mr-2 h-5 w-5" />
              Разместить объявление
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Новое объявление</DialogTitle>
              <DialogDescription>
                Заполните форму для размещения объявления на доске
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Название объявления *</Label>
                <Input
                  id="title"
                  placeholder="Например: Продам велосипед"
                  value={newClassified.title}
                  onChange={(e) => setNewClassified({...newClassified, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Категория *</Label>
                <Select
                  value={newClassified.category}
                  onValueChange={(value) => setNewClassified({...newClassified, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Описание *</Label>
                <Textarea
                  id="description"
                  placeholder="Подробное описание..."
                  rows={4}
                  value={newClassified.description}
                  onChange={(e) => setNewClassified({...newClassified, description: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Цена</Label>
                  <Input
                    id="price"
                    placeholder="10 000 ₽"
                    value={newClassified.price}
                    onChange={(e) => setNewClassified({...newClassified, price: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={newClassified.phone}
                    onChange={(e) => setNewClassified({...newClassified, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="urgent"
                  checked={newClassified.urgent}
                  onChange={(e) => setNewClassified({...newClassified, urgent: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="urgent" className="cursor-pointer">
                  Срочное объявление
                </Label>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Отмена
              </Button>
              <Button onClick={handleSubmit}>
                Опубликовать
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск объявлений..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          Все ({classifieds.length})
        </Button>
        {categories.map(cat => {
          const count = classifieds.filter(c => c.category === cat.value).length;
          return (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.value)}
              className="gap-1"
            >
              <Icon name={cat.icon} className="h-3 w-3" />
              {cat.label} ({count})
            </Button>
          );
        })}
      </div>

      {filteredClassifieds.length === 0 ? (
        <Card className="p-12 text-center">
          <Icon name="Search" className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h4 className="text-lg font-semibold mb-2">Объявления не найдены</h4>
          <p className="text-muted-foreground mb-4">Попробуйте изменить фильтры или поисковый запрос</p>
          <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
            Сбросить фильтры
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredClassifieds.map((item, index) => {
            const categoryInfo = getCategoryInfo(item.category);
            return (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${categoryInfo.color}`}>
                      <Icon name={categoryInfo.icon} className="h-5 w-5 text-white" />
                    </div>
                    {item.urgent && (
                      <Badge className="bg-accent text-white animate-pulse-glow">
                        Срочно
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.price && (
                      <div className="text-lg font-bold text-primary">
                        {item.price}
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="User" className="h-3 w-3" />
                        {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    {item.phone && (
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <Icon name="Phone" className="mr-2 h-3 w-3" />
                        {item.phone}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
