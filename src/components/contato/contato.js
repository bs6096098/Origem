import { useEffect } from 'react';
import './contato.css';

function Contato() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.contato-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contato-section" id="contato">
      <div className="contato-header">
        <h2>Contato</h2>
        <p className="contato-subtitle">Vamos trabalhar juntos?</p>
      </div>

      <div className="contato-container">
        <div className="contato-info">
          <div className="contato-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:bs6096098@gmail.com">bs6096098@gmail.com</a>
          </div>

          <div className="contato-item">
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/5535997603565" target="_blank" rel="noopener noreferrer">
              +55 (35) 99760-3565
            </a>
          </div>

          <div className="contato-item">
            <i className="fab fa-linkedin-in"></i>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/breno-souza-20976a177/" target="_blank" rel="noopener noreferrer">
              /in/breno-souza-20976a177
            </a>
          </div>

          <div className="contato-item">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <a href="https://github.com/bs6096098" target="_blank" rel="noopener noreferrer">
              @bs6096098
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
