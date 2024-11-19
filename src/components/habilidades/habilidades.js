import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './habilidades.css';

function Habilidades() {
  const skills = [
    {
      category: "Bases de Frontend",
      items: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Nest", level: 85 },
        { name: "PHP", level: 95 },
        { name: "SQL", level: 75 },
        { name: "APIs REST", level: 90 }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 70 },
        { name: "Git", level: 85 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 70 }
      ]
    }    
  ];

  const animateSkill = (element, finalWidth) => {
    let width = 0;
    const duration = 2000; // 2 segundos
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      width = progress * finalWidth;
      element.style.width = `${width}%`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          const finalWidth = bar.dataset.width;
          animateSkill(bar, finalWidth);
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const skillsSection = document.querySelector('.skills-grid');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="habilidades-section" id="habilidades">
      <div className="habilidades-container">
      <h2>
          Habilidades
          <span className="title-underline"></span>
        </h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">
                        <CountUp
                          end={skill.level}
                          suffix="%"
                          duration={2}
                          enableScrollSpy
                          scrollSpyDelay={500}
                        />
                      </span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill"
                        data-width={skill.level}
                        style={{ '--width': `${skill.level}%` }}
                      >
                        <div className="skill-bar-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
