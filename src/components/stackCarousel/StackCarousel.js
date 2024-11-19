import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMysql,
  SiMicrosoftsqlserver
} from 'react-icons/si';
import './StackCarousel.css';

const StackCarousel = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    { Icon: FaReact, name: 'React', color: '#61DAFB' },
    { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { Icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { Icon: SiMicrosoftsqlserver, name: 'SQL Server', color: '#CC2927' },
    { Icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { Icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { Icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { Icon: FaDocker, name: 'Docker', color: '#2496ED' },
    { Icon: FaAws, name: 'AWS', color: '#FF9900' }
  ];  

  const duplicatedTech = [...technologies, ...technologies];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition((prev) => {
          const newPosition = prev - 0.5;
          const resetPoint = -100 * (technologies.length);
          return newPosition <= resetPoint ? 0 : newPosition;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isPaused, technologies.length]);

  return (
    <section className="tech-section">
      <div className="tech-content">
        <h2>
          Stack Tecnológica
        </h2>
        <p>Ferramentas e tecnologias que utilizo no desenvolvimento</p>
        
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gradient-overlay left" />
          <div className="gradient-overlay right" />

          <div 
            className="carousel-track"
            style={{
              transform: `translateX(${position}px)`,
              transition: isPaused ? 'transform 0.3s ease' : 'none'
            }}
          >
            {duplicatedTech.map(({ Icon, name, color }, index) => (
              <div 
                key={index} 
                className={`tech-card ${hoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  '--tech-color': color
                }}
              >
                <div className="tech-icon-wrapper">
                  <Icon className="tech-icon" />
                </div>
                <span className="tech-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackCarousel;