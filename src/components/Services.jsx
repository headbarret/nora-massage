import React from 'react';
import { useFadeIn } from '../useFadeIn';

const services = [
  {
    name: 'Релакс',
    desc: 'Мягкое расслабление всего тела. Снятие напряжения, восстановление нервной системы, глубокий отдых.',
    time: '60 / 90 мин',
    price: '3 500 ₽',
  },
  {
    name: 'Спортивный',
    desc: 'Восстановление после нагрузок, проработка мышечных зажимов, улучшение кровообращения.',
    time: '60 / 90 мин',
    price: '4 200 ₽',
  },
];

const spa = {
  name: 'SPA-ритуал',
  desc: 'Полное погружение. Ароматический пилинг, масляный массаж, завершающий обёртыванием. Время для себя — без спешки.',
  time: '120 мин',
  price: '7 800 ₽',
};

export default function Services() {
  const headRef = useFadeIn();
  const card1 = useFadeIn();
  const card2 = useFadeIn();
  const spaRef = useFadeIn();

  return (
    <section className="services">
      <div className="services__inner">
        <span className="section__label fade-in" ref={headRef}>Программы</span>

        <h2 className="services__heading fade-in fade-in-delay-1" ref={card1}>
          Каждая сессия — точный ответ на запрос тела
        </h2>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} delay={i} />
          ))}

          {/* SPA — wide card */}
          <div className="service-card service-card--spa fade-in" ref={spaRef}>
            <div className="service-card__body">
              <div className="service-card__name">{spa.name}</div>
              <p className="service-card__desc">{spa.desc}</p>
            </div>
            <div className="service-card__meta">
              <span className="service-card__time">{spa.time}</span>
              <span className="service-card__price">{spa.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const ref = useFadeIn();
  return (
    <div
      className={`service-card fade-in fade-in-delay-${delay + 2}`}
      ref={ref}
    >
      <div className="service-card__name">{service.name}</div>
      <p className="service-card__desc">{service.desc}</p>
      <div className="service-card__meta">
        <span className="service-card__time">{service.time}</span>
        <span className="service-card__price">{service.price}</span>
      </div>
    </div>
  );
}
