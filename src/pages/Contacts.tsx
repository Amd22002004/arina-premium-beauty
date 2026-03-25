import { Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { VKIcon, TelegramIcon } from "@/components/SocialIcons";

const Contacts = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Контакты</h1>
        <p className="text-muted-foreground text-center mb-16">Свяжитесь с нами любым удобным способом</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl mb-4">Арина</h2>
              <p className="text-muted-foreground text-sm mb-6">Специалист по эстетической косметологии и омоложению</p>
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
                <div><p className="text-sm font-medium">По записи</p><p className="text-xs text-muted-foreground">Индивидуальный график</p></div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
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

          <div className="rounded-lg overflow-hidden border border-border h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d30.4587!3d59.8735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDUyJzI0LjYiTiAzMMKwMjcnMzEuMyJF!5e0!3m2!1sru!2sru!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Карта"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Schema */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Арина — эстетика и омоложение",
        telephone: "+79117193949",
        address: { "@type": "PostalAddress", streetAddress: "пр-т Обуховской Обороны, 110к1", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
      }),
    }} />

    <CTASection />
  </Layout>
);

export default Contacts;
