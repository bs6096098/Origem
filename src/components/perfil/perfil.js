import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import './perfil.css';

function Perfil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="perfil-wrapper">
      <section className="perfil-section" id="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: "transparent",
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#00f0ff",
              },
              links: {
                color: "#00f0ff",
                distance: 180,
                enable: true,
                opacity: 0.04,
                width: 0.5,
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 1200,
                },
                value: 40,
              },
              opacity: {
                value: { min: 0.1, max: 0.3 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 1.5 },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: false,
                },
              },
              modes: {
                grab: {
                  distance: 120,
                  links: {
                    opacity: 0.15,
                  },
                },
              },
            },
          }}
        />

        <div className={`perfil-content ${isVisible ? 'visible' : ''}`}>
          <div className="greeting">Olá, eu sou</div>
          <h1 className="name">Breno Souza</h1>

          <div className="title-wrapper">
            <TypeAnimation
              sequence={[
                'Desenvolvedor Backend',
                2000,
                'Analista de Sistemas',
                2000,
                'Desenvolvedor Full Stack',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="animated-title"
              repeat={Infinity}
            />
          </div>

          <p className="description">
            Ideias que viram experiências digitais extraordinárias
          </p>

          <div className="cta-buttons">
            <a href="#contato" className="btn btn-primary">
              <span>Entre em Contato</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </a>
            <a href="#experiencia" className="btn btn-secondary">
              <span>Experiências</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </a>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Perfil;

