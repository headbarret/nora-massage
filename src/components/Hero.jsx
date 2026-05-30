import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background photo */}
      <div className="hero__bg">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
          alt="Спокойная атмосфера студии — масла, свечи, забота"
        />
      </div>

      {/* Soft gradient */}
      <div className="hero__overlay" />

      {/* Corner contacts */}
      <div className="hero__corner fade-in fade-in-delay-4">
        <a href="tel:+79001234567">+7 900 123-45-67</a>
        <a href="https://t.me/nora_studio" target="_blank" rel="noreferrer">Telegram</a>
      </div>

      {/* Main content */}
      <div className="hero__content">
        <span className="hero__eyebrow fade-in fade-in-delay-1" style={{ opacity: 1, transform: 'none' }}>
          Студия массажа · NORA
        </span>

        <h1 className="hero__title fade-in fade-in-delay-2" style={{ opacity: 1, transform: 'none' }}>
          Тело помнит,&nbsp;как&nbsp;<em>расслабляться.</em>
          <br />
          Мы просто не мешаем.
        </h1>

        <a href="#contacts" className="hero__cta fade-in fade-in-delay-3" style={{ opacity: 1, transform: 'none' }}>
          Записаться
        </a>
      </div>
    </section>
  );
}
