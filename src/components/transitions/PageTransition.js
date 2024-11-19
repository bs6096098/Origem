import React, { useEffect, useRef } from 'react';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="transition-wrapper">
      <div className="section-content" ref={sectionRef}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition; 