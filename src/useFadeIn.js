import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useFadeInAll(count = 4) {
  const refs = Array.from({ length: count }, () => useRef(null)); // eslint-disable-line

  useEffect(() => {
    const observers = refs.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []); // eslint-disable-line

  return refs;
}
