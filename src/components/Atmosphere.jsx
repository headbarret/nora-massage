import React from 'react';
import { useFadeIn } from '../useFadeIn';

const strips = [
  {
    img: '/images/atm-interior.jpg',
    alt: 'Интерьер студии — спокойно и уютно',
    phrase: 'Тишина. Тепло.\nНикакого лишнего шума.',
    sub: 'Пространство',
    reverse: false,
  },
  {
    img: '/images/atm-oil.jpg',
    alt: 'Текстура масла — натуральное, живое',
    phrase: 'Масла, которые\nзнают своё дело.',
    sub: 'Косметика',
    reverse: true,
  },
  {
    img: '/images/atm-towels.jpg',
    alt: 'Полотенца — чистота и порядок',
    phrase: 'Чистота —\nне деталь, а основа.',
    sub: 'Стандарты',
    reverse: false,
  },
];

export default function Atmosphere() {
  const labelRef = useFadeIn();

  return (
    <section className="atmosphere">
      <div className="atmosphere__label-wrap">
        <span className="section__label fade-in" ref={labelRef}>Атмосфера</span>
      </div>

      {strips.map((strip, i) => (
        <Strip key={i} strip={strip} index={i} />
      ))}
    </section>
  );
}

function Strip({ strip, index }) {
  const ref = useFadeIn();
  const phraseLines = strip.phrase.split('\n');

  return (
    <div
      className={`atm-strip${strip.reverse ? ' atm-strip--reverse' : ''} fade-in`}
      ref={ref}
    >
      <div className="atm-strip__photo">
        <img src={`${process.env.PUBLIC_URL}${strip.img}`} alt={strip.alt} />
      </div>
      <div className="atm-strip__text">
        <p className="atm-strip__phrase">
          {phraseLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < phraseLines.length - 1 && <br />}
            </React.Fragment>
          ))}
          <span>{strip.sub}</span>
        </p>
      </div>
    </div>
  );
}
