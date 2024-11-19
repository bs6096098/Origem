import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import './sobre.css';
import CountUp from 'react-countup';

function Sobre() {
  const stats = [
    {
      icon: <FaCode />,
      number: 3,
      suffix: "+",
      label: "Anos de Experiência",
      color: "#4FC1FF"
    },
    {
      icon: <FaRocket />,
      number: 50,
      suffix: "+",
      label: "Projetos Entregues",
      color: "#FF6B6B"
    },
    {
      icon: <FaLightbulb />,
      number: 100,
      suffix: "+",
      label: "Soluções Criadas",
      color: "#FFD93D"
    }
  ];

  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-container">
        <div className="section-title-container">
          <h2>Sobre Mim</h2>
        </div>

        <div className="sobre-content">
          <div className="sobre-text">
            <p className="sobre-intro">
              Olá! Sou um desenvolvedor full-stack com mais de 3 anos de experiência, apaixonado por transformar ideias em soluções digitais de impacto, com uma especialização maior no desenvolvimento back-end.
            </p>
            <p className="sobre-description">
              Durante minha trajetória, tenho me dedicado ao desenvolvimento de aplicações robustas e escaláveis, trabalhando com tecnologias como PHP, Nest.js, AWS e MySQL. Atualmente, estou refatorando o back-end de um aplicativo no Grupo Adriano Cobuccio, trazendo melhorias em desempenho e escalabilidade.
              Minha missão é unir excelência técnica e criatividade para entregar resultados que realmente fazem a diferença.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ '--stat-color': stat.color }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce={false}
                    scrollSpyDelay={500}
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="interests-section">
            <h3>Áreas de Interesse</h3>
            <div className="interests-grid">
              <div className="interest-tag">Desenvolvimento Web</div>
              <div className="interest-tag">Cloud Computing</div>
              <div className="interest-tag">DevOps</div>
              <div className="interest-tag">Arquitetura de Software</div>
              <div className="interest-tag">Novas Tecnologias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre; 