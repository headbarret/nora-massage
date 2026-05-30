import React from 'react';
import { useFadeIn } from '../useFadeIn';

const items = [
  {
    num: '01',
    text: 'Мастера с опытом 10+ лет',
    sub: 'Каждый специалист — прошедший авторскую подготовку',
  },
  {
    num: '02',
    text: 'Премиальная косметика',
    sub: 'Работаем только с сертифицированными профессиональными линиями',
  },
  {
    num: '03',
    text: 'Стерильность и чистота',
    sub: 'Протоколы дезинфекции после каждого клиента — без исключений',
  },
];

export default function Trust() {
  const ref = useFadeIn();

  return (
    <section className="trust">
      <div className="trust__inner">
        <span className="section__label">О студии</span>

        <h2 className="trust__heading">
          Три вещи, которые мы никогда не ставим под сомнение
        </h2>

        <div className="trust__list fade-in" ref={ref}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="trust__divider" />}
              <div className="trust__item">
                <span className="trust__item-num">{item.num}</span>
                <div className="trust__item-text">{item.text}</div>
                <div className="trust__item-sub">{item.sub}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
