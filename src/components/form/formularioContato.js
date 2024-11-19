import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './formularioContato.css';

function FormularioContato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/seu-perfil",
      color: "#0A66C2"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/seu-usuario",
      color: "#333"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      url: "https://wa.me/seu-numero",
      color: "#25D366"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:seu-email@email.com",
      color: "#EA4335"
    }
  ];

  return (
    <section className="contato-section" id="contato">
      <div className="contato-container">
      <h2>
          Contato
          <span className="title-underline"></span>
        </h2>

        <div className="contato-grid">
          <div className="contato-info">
            <h3>Vamos Conversar!</h3>
            <p>
            Fique à vontade para entrar em contato comigo através do formulário ou pelas redes sociais.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensagem
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormularioContato;