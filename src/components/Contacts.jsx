import React from 'react';
import { useFadeIn } from '../useFadeIn';

const contacts = [
  { label: 'Телефон', value: '+7 900 123-45-67', href: 'tel:+79001234567' },
  { label: 'Telegram', value: '@nora_studio', href: 'https://t.me/nora_studio' },
  { label: 'WhatsApp', value: '+7 900 123-45-67', href: 'https://wa.me/79001234567' },
  { label: 'Email', value: 'hello@nora-studio.ru', href: 'mailto:hello@nora-studio.ru' },
];

export default function Contacts() {
  const leftRef = useFadeIn();
  const rightRef = useFadeIn();

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__inner">
        {/* Left: heading + links + CTA */}
        <div className="contacts__left fade-in" ref={leftRef}>
          <span className="section__label">Запись</span>
          <h2 className="contacts__heading">
            Записаться —<br />
            в <em>один клик</em>
          </h2>

          <div className="contacts__links">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-link"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-link__label">{c.label}</span>
                <span className="contact-link__value">{c.value}</span>
              </a>
            ))}
          </div>

          <a
            href="https://t.me/nora_studio"
            className="contacts__tg-btn"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
            Написать в Telegram
          </a>
        </div>

        {/* Right: map placeholder */}
        <div className="contacts__map fade-in fade-in-delay-2" ref={rightRef}>
          <div className="contacts__map-placeholder">
            <svg viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span>Карта</span>
          </div>
          <div className="contacts__map-addr">
            Москва, ул. Садовая, 12 · метро «Цветной бульвар»
          </div>
        </div>
      </div>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.265 13.22l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.463c.537-.194 1.006.131.888.341z"/>
    </svg>
  );
}
