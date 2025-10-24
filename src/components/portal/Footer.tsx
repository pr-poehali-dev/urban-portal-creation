export default function Footer() {
  return (
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
  );
}
