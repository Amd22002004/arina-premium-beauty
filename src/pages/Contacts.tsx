import { Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const Contacts = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Контакты</h1>
          <p className="text-muted-foreground text-center mb-16">Свяжитесь с нами — мы ответим лично</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl mb-4">Ариана Ханова</h2>
                <p className="text-muted-foreground text-sm mb-6">Мастер приватной студии аппаратной эстетики и коррекции фигуры</p>
              </div>

              <div className="space-y-4">
                <a href="tel:+79117193949" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center"><Phone size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">+7 (911) 719-39-49</p><p className="text-xs text-muted-foreground">Звоните или пишите</p></div>
                </a>

                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center"><MapPin size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">пр-т Обуховской Обороны, 110к1 (ЖК «Молодежный»)</p><p className="text-xs text-muted-foreground">Точный номер квартиры направляется при подтверждении записи</p></div>
                </div>

                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center"><Clock size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">Ежедневно с 8:00 до 19:00</p><p className="text-xs text-muted-foreground">Без выходных</p></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://vk.com/beauty_salon_arina" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <VKIcon /> Группа VK
                </a>
                <a href="https://vk.com/id26767569" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <VKIcon /> Личная страница
                </a>
                <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <TelegramIcon /> Telegram
                </a>
              </div>
            </div>

            {/* 2GIS Map */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border bg-secondary p-8 flex items-center justify-center" style={{ minHeight: 400 }}>
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg font-heading mb-2">пр-т Обуховской Обороны, 110к1</p>
                  <p className="text-muted-foreground text-sm mb-2">ЖК «Молодежный», Санкт-Петербург</p>
                  <p className="text-xs text-muted-foreground mb-4">Точный номер квартиры направляется при подтверждении записи</p>
                  <a
                    href="https://2gis.ru/spb/search/пр-т%20Обуховской%20Обороны%20110к1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    📍 Открыть на карте 2GIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как добраться */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Как добраться</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-lg font-medium text-foreground">Санкт-Петербург</p>
                <p className="text-foreground">пр-т Обуховской Обороны, 110к1</p>
                <p className="text-muted-foreground text-sm">ЖК «Молодежный»</p>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">М</span>
                <span className="font-medium">Пролетарская</span>
                <span className="text-muted-foreground">— 3 минуты пешком</span>
              </div>

              <a
                href="https://yandex.ru/maps/?rtext=~Санкт-Петербург, пр-т Обуховской Обороны, 110к1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gold-gradient text-primary-foreground px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg mt-4"
              >
                Построить маршрут
              </a>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>Выходите на станции метро «Пролетарская» и двигайтесь в сторону проспекта Обуховской Обороны. Студия находится в жилом комплексе «Молодежный».</p>
              <p className="text-xs opacity-70">Точный номер квартиры направляется при подтверждении записи.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.4898%2C59.8975&z=16&pt=30.4898%2C59.8975%2Cpm2rdm&mode=search&text=пр-т%20Обуховской%20Обороны%2C%20110к1%2C%20Санкт-Петербург"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
              title="Карта — АРТ Косметология"
            />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "АРТ Косметология — Приватная студия аппаратной эстетики",
          telephone: "+79117193949",
          address: { "@type": "PostalAddress", streetAddress: "пр-т Обуховской Обороны, 110к1 (ЖК Молодежный)", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
          openingHours: "Mo-Su 08:00-19:00",
        }),
      }} />

      <CTASection />
    </Layout>
  );
};

export default Contacts;
