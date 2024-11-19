import { useEffect } from 'react';

function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          const minOpacity = window.innerWidth <= 768 ? 0.7 : 0;
          entry.target.style.opacity = Math.max(ratio, minOpacity).toString();
          entry.target.style.transform = `translateY(${(1 - ratio) * 50}px)`;
          
          if (ratio > 0.5) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'all 0.8s ease-out';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollObserver; 