import Layout from "@/components/Layout";

const Consent = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow prose prose-sm max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl mb-8">Согласие на обработку персональных данных</h1>

        <p>Заполняя форму записи на сайте, Пользователь подтверждает своё согласие на обработку персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>

        <h2 className="font-heading text-2xl mt-8 mb-4">Оператор</h2>
        <p>ИП Ариана Ханова, г. Санкт-Петербург, пр-т Обуховской Обороны, 110к1.</p>

        <h2 className="font-heading text-2xl mt-8 mb-4">Перечень данных</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Фамилия, имя</li>
          <li>Номер контактного телефона</li>
          <li>Предпочтительная услуга</li>
          <li>Содержание комментария</li>
        </ul>

        <h2 className="font-heading text-2xl mt-8 mb-4">Цели обработки</h2>
        <p>Обработка осуществляется в целях записи на процедуры, информирования об услугах и обратной связи.</p>

        <h2 className="font-heading text-2xl mt-8 mb-4">Способы обработки</h2>
        <p>Сбор, запись, систематизация, хранение, уточнение, использование, удаление.</p>

        <h2 className="font-heading text-2xl mt-8 mb-4">Срок действия</h2>
        <p>Согласие действует бессрочно и может быть отозвано путём направления уведомления Оператору по телефону +7 (911) 719-39-49 или через Telegram @Arin4Van.</p>

        <p className="text-muted-foreground text-sm mt-8">Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}</p>
      </div>
    </section>
  </Layout>
);

export default Consent;
