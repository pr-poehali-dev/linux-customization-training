import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const tutorials = [
    {
      icon: "Terminal",
      title: "Hyprland",
      description: "Динамичный тайловый композитор для Wayland с богатыми возможностями кастомизации",
      difficulty: "Средний",
      time: "45 мин"
    },
    {
      icon: "Layout",
      title: "Rofi",
      description: "Мощный лаунчер приложений и переключатель окон с гибкой настройкой",
      difficulty: "Лёгкий",
      time: "20 мин"
    },
    {
      icon: "PanelTop",
      title: "Waybar",
      description: "Настраиваемая панель задач для композиторов Wayland",
      difficulty: "Лёгкий",
      time: "30 мин"
    },
    {
      icon: "Settings",
      title: "Конфиги",
      description: "Организация и управление конфигурационными файлами",
      difficulty: "Средний",
      time: "35 мин"
    }
  ];

  const navigation = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "docs", label: "Документация", icon: "FileText" },
    { id: "community", label: "Сообщество", icon: "Users" },
    { id: "about", label: "О проекте", icon: "Info" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20">
              <div className="max-w-4xl space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Linux Customization
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Обучение кастомизации Linux систем. Освой Hyprland, Rofi, Waybar и другие инструменты
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button size="lg" className="text-lg">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать обучение
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg">
                    <Icon name="Github" size={20} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-20 px-4 bg-card/50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Туториалы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tutorials.map((tutorial, index) => (
                    <Card 
                      key={index} 
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon name={tutorial.icon as any} size={32} className="text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{tutorial.title}</CardTitle>
                        <CardDescription className="text-base pt-2">
                          {tutorial.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="BarChart" size={16} />
                            {tutorial.difficulty}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {tutorial.time}
                          </span>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          Открыть туториал
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case "docs":
        return (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Документация</h2>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileCode" size={24} />
                      Примеры конфигураций
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm">
                      <p className="text-muted-foreground mb-2"># ~/.config/hypr/hyprland.conf</p>
                      <p>general &#123;</p>
                      <p className="pl-4">gaps_in = 5</p>
                      <p className="pl-4">gaps_out = 10</p>
                      <p className="pl-4">border_size = 2</p>
                      <p>&#125;</p>
                    </div>
                    <Button>
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать конфиг
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BookOpen" size={24} />
                      Руководства
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-lg hover:text-primary cursor-pointer transition-colors">
                        <Icon name="ChevronRight" size={20} />
                        Установка и настройка Hyprland
                      </li>
                      <li className="flex items-center gap-2 text-lg hover:text-primary cursor-pointer transition-colors">
                        <Icon name="ChevronRight" size={20} />
                        Темизация Rofi
                      </li>
                      <li className="flex items-center gap-2 text-lg hover:text-primary cursor-pointer transition-colors">
                        <Icon name="ChevronRight" size={20} />
                        Создание модулей Waybar
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        );

      case "community":
        return (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Сообщество</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={24} />
                      Discord
                    </CardTitle>
                    <CardDescription>
                      Присоединяйся к нашему Discord серверу для обсуждений и помощи
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Присоединиться
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Github" size={24} />
                      GitHub
                    </CardTitle>
                    <CardDescription>
                      Наши репозитории с примерами и конфигурациями
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Открыть GitHub
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Send" size={24} />
                      Telegram
                    </CardTitle>
                    <CardDescription>
                      Чат для быстрых вопросов и обмена опытом
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Подписаться
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Share2" size={24} />
                      Reddit
                    </CardTitle>
                    <CardDescription>
                      Подсообщество для обмена конфигами и идеями
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Посетить
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        );

      case "about":
        return (
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">О проекте</h2>
              <Card>
                <CardContent className="pt-6 space-y-6 text-lg leading-relaxed">
                  <p>
                    Linux Customization — это образовательная платформа, созданная для тех, 
                    кто хочет освоить искусство настройки Linux систем.
                  </p>
                  <Separator />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Наша миссия</h3>
                    <p className="text-muted-foreground">
                      Сделать кастомизацию Linux доступной для всех через понятные 
                      туториалы, примеры конфигураций и активное сообщество.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Что мы предлагаем</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span>Пошаговые руководства по настройке популярных инструментов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span>Готовые конфигурационные файлы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span>Активное сообщество для обмена опытом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span>Регулярные обновления и новые материалы</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Icon name="Terminal" size={20} className="text-primary-foreground" />
              </div>
              <span>LinuxCustom</span>
            </div>
            <div className="flex gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>{renderContent()}</main>

      <footer className="border-t py-12 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Linux Customization</h3>
              <p className="text-muted-foreground text-sm">
                Обучающая платформа по кастомизации Linux систем
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ссылки</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Документация</li>
                <li className="hover:text-primary cursor-pointer transition-colors">GitHub</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Сообщество</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="MessageSquare" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="mb-6" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Linux Customization. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
