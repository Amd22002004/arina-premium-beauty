import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { VKIcon, TelegramIcon, MaxIcon, MAX_LINK } from "@/components/SocialIcons";

const Contacts = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Контакты</h1>
          <p className="text-muted-foreground text-center mb-12">Свяжитесь с нами — мы ответим лично</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Левая часть */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl mb-2">Арина</h2>
                <p className="text-muted-foreground text-sm">Мастер приватной студии аппаратной эстетики и коррекции фигуры</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center shrink-0"><MapPin size={18} className="text-primary" /></div>
                  <div>
                    <p className="text-sm font-medium">пр-т Обуховской Обороны, 110к1 (ЖК «Молодежный»)</p>
                    <p className="text-xs text-muted-foreground">Точный номер квартиры направляется при подтверждении записи</p>
                  </div>
                </div>

                <a href="tel:+79117193949" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center shrink-0"><Phone size={18} className="text-primary" /></div>
                  <div>
                    <p className="text-sm font-medium">+7 (911) 719-39-49</p>
                    <p className="text-xs text-muted-foreground">Звоните или пишите</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center shrink-0"><Clock size={18} className="text-primary" /></div>
                  <div>
                    <p className="text-sm font-medium">Ежедневно с 8:00 до 19:00</p>
                    <p className="text-xs text-muted-foreground">Без выходных</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://vk.com/id26767569" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <VKIcon /> ВКонтакте
                </a>
                <a href="https://t.me/Arin4Van" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <TelegramIcon /> Telegram
                </a>
                <a href={MAX_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent transition-colors">
                  <MaxIcon /> MAX
                </a>
              </div>

              <Link
                to="/booking"
                className="inline-block gold-gradient text-primary-foreground px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg mt-2"
              >
                Записаться
              </Link>
            </div>

            {/* Правая часть — Яндекс.Карта */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[400px] h-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.4898%2C59.8975&z=16&pt=30.4898%2C59.8975%2Cpm2rdm&mode=search&text=пр-т%20Обуховской%20Обороны%2C%20110к1%2C%20Санкт-Петербург"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0, minHeight: 450, display: "block" }}
                title="Карта — АРТ Косметология"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Как добраться */}
      <section className="pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">Как добраться</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Санкт-Петербург</p>
                  <p>пр-т Обуховской Обороны, 110к1</p>
                  <p className="text-muted-foreground text-sm">ЖК «Молодежный»</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">М</span>
                  <span className="font-medium">Пролетарская</span>
                  <span className="text-muted-foreground text-sm">— 3 минуты пешком</span>
                </div>
                <a
                  href="https://yandex.ru/maps/?rtext=~Санкт-Петербург, пр-т Обуховской Обороны, 110к1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gold-gradient text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-md mt-2"
                >
                  Построить маршрут
                </a>
              </div>
              <div className="text-sm text-muted-foreground space-y-2 md:border-l md:border-border md:pl-8">
                <p>Выходите на станции метро «Пролетарская» и двигайтесь в сторону проспекта Обуховской Обороны. Студия находится в жилом комплексе «Молодежный».</p>
                <p className="text-xs opacity-80">Точный номер квартиры направляется при подтверждении записи.</p>
              </div>
            </div>
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
