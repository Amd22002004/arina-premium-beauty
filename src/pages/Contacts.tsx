import { useEffect, useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const Contacts = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.2gis.com/js/DGWidgetLoader.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if ((window as any).DGWidgetLoader && mapRef.current) {
        new (window as any).DGWidgetLoader({
          width: 500,
          height: 400,
          borderColor: "#a3a3a3",
          pos: { lat: 59.86723905330512, lon: 30.46898169195629, zoom: 17 },
          opt: { city: "spb" },
          org: [{ id: "70000001066214518" }],
        });
      }
    };
    mapRef.current?.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Контакты</h1>
          <p className="text-muted-foreground text-center mb-16">Свяжитесь с нами любым удобным способом</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl mb-4">Арина Ланова</h2>
                <p className="text-muted-foreground text-sm mb-6">Специалист по массажу, аппаратной косметологии и коррекции фигуры</p>
              </div>

              <div className="space-y-4">
                <a href="tel:+79117193949" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center"><Phone size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">+7 (911) 719-39-49</p><p className="text-xs text-muted-foreground">Звоните или пишите</p></div>
                </a>

                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center"><MapPin size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">пр-т Обуховской Обороны, 110к1</p><p className="text-xs text-muted-foreground">Санкт-Петербург</p></div>
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
              <div ref={mapRef} className="rounded-lg overflow-hidden border border-border" style={{ maxWidth: 500, height: 400 }} />
              <div className="flex flex-wrap gap-3 text-sm">
                <a className="text-primary hover:underline" href="http://2gis.ru/spb/firm/70000001066214518/center/30.46898169195629,59.86723905330512/zoom/17" target="_blank" rel="noopener noreferrer">
                  📍 На карте
                </a>
                <a className="text-primary hover:underline" href="http://2gis.ru/spb/firm/70000001066214518/photos/70000001066214518/center/30.46898169195629,59.86723905330512/zoom/17" target="_blank" rel="noopener noreferrer">
                  📷 Фото
                </a>
                <a className="text-primary hover:underline" href="http://2gis.ru/spb/center/30.469257,59.867195/zoom/17/routeTab/rsType/bus/to/30.469257,59.867195" target="_blank" rel="noopener noreferrer">
                  🚌 Проезд
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "АРТ Косметология — Авторские ритуалы и технологии",
          telephone: "+79117193949",
          address: { "@type": "PostalAddress", streetAddress: "пр-т Обуховской Обороны, 110к1", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
        }),
      }} />

      <CTASection />
    </Layout>
  );
};

export default Contacts;
