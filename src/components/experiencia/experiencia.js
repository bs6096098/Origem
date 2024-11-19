import React from 'react';
import { FaCode } from 'react-icons/fa';
import './experiencia.css';

function Experiencia() {
  return (
    <section className="experiencia-section" id="experiencia">
      <div className="experiencia-container">
        <div className="section-title-container">
          <h2>Experiência</h2>
        </div>

        <div className="experiencia-card">
          <div className="card-glow"></div>
          
          <div className="icon-wrapper">
            <FaCode className="icon" />
          </div>

          <div className="content-wrapper">
            <div className="timeline-marker">
              <span className="date">2021 - Presente</span>
            </div>

            <h3>Desenvolvedor Full Stack</h3>
            <h4>Grupo Adriano Cobuccio</h4>

            <p>
              Desenvolvimento de soluções web inovadoras com foco em performance e experiência do usuário.
            </p>
            <br />
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Nest</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">SQL Server</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;

