import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Perfil from './components/perfil/perfil';
import Experiencia from './components/experiencia/experiencia';
import Habilidades from './components/habilidades/habilidades';
import Sobre from './components/sobre/sobre';
import Contato from './components/form/formularioContato';
import ScrollObserver from './components/ScrollObserver';
import StackCarousel from './components/stackCarousel/StackCarousel';
import PageTransition from './components/transitions/PageTransition';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <div className="content-container">
          <Perfil />
          
          <div className="section-wrapper">
            <PageTransition>
              <StackCarousel />
            </PageTransition>
          </div>

          <div className="section-wrapper">
            <PageTransition>
              <Sobre />
            </PageTransition>
          </div>

          <div className="section-wrapper">
            <PageTransition>
              <Experiencia />
            </PageTransition>
          </div>

          <div className="section-wrapper">
            <PageTransition>
              <Habilidades />
            </PageTransition>
          </div>

          <div className="section-wrapper">
            <PageTransition>
              <Contato />
            </PageTransition>
          </div>
        </div>
        <ScrollObserver />
      </div>
    </ThemeProvider>
  );
}

export default App;

