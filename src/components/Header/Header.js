import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">{'<Breno />'}</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#experiencia" onClick={() => setIsMenuOpen(false)}>Experiência</a></li>
            <li><a href="#habilidades" onClick={() => setIsMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 