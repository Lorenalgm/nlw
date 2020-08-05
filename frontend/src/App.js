import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import seta from './assets/seta.svg';
import image from './assets/image.svg';
import background from './assets/background.png';
import bootcamp from './assets/bootcamp.svg';
import { FaStar, FaExclamationCircle, FaCalendar } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="header">
          <img src={logo} alt="Logo" />
          <div className="header-info">
            <div className="date">
              <FaCalendar className="icon" />
              <p>1 a 5 de janeiro</p>
            </div>
            <div className="free">
              <FaExclamationCircle  className="icon" />
              <p>100% online e gratuito!</p>
            </div>
            <div className="new-content">
              <FaStar />
              <p>Conteúdo inédito!</p>
            </div>
          </div>
        </div>
        <div className="hero-content">
          <h1>Avance para o<br></br>próximo nível</h1>
          <p>Um evento para dar o próximo passo na sua<br></br> evolução como programadora ou programador.</p>
          <a className="button" href="#">QUERO PARTICIPAR</a>
        </div>
      </div>
      <div className="about">
        <img src={image} alt="Logo" />
        <div className="about-content">
          <h1>O que é a Next Level Week?</h1>
          <p className="highlight">O NLW é um evento com muito código, desafios, 
            networking e um único objetivo: te levar para o próximo nível.</p>
          <p>Programação é uma disciplina prática. Ou seja, para dominar uma 
            tecnologia não basta apenas conhecer a teoria ou ler a documentação: você precisa 
            colocar a mão no código.</p>
          <p>Através do nosso método você vai aprender novas ferramentas, conhecer novas tecnologias 
            e descobrir hacks que vão impulsionar a sua carreira.</p>
          <p>Um experiência online e totalmente gratuita para evoluir suas habilidades em programação
            e colocar mais um trabalho completo no seu portfolio.</p> 
        </div>
      </div>
      <div className="pillars-section">
        <img src={seta} alt="Icon" />
        <h1>Nosso método é baseado em 3 pilares</h1>
        <div className="pillars">
          <div className="pillar">
            <h1>Prática</h1>
            <p>Existem muitas formas de estudar programação, mas só existe uma forma
              de aprender: na prática. A teoria só funciona se você souber onde e quando aplicar, 
              e são as horas de código que vão te ensinar a tomar as melhores decisões.</p>
          </div>
          <div className="pillar">
            <h1>Foco</h1>
            <p>Programação é um universo infinito, por isso ter foco é o primeiro passo 
              para atingir seus objetivos. Saber onde você quer chegar e não se distrair com aquilo que 
              não faz sentido para o seu momento, é a melhor forma de acelerar sua evolução.</p>
          </div>
          <div className="pillar">
            <h1>Grupo</h1>
            <p>Para se destacar é preciso ter habilidades que vão além do código, 
              e a melhor forma de dominar essas habilidades também é na prática. 
              Ajudar outros devs, se posicionar e receber feedback formam o bom profissional.</p>
          </div>
        </div>
      </div>
      {/* <div className="power-section">
        <h1>O poder dos 3 pilares combinados</h1>
        <div className="powers">
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
        </div>
      </div> */}
      <div className="company">
        <h1>Sobre a Rocketseat</h1>
        <div className="company-numbers">
          <div className="number">
            <h1><span>12</span> mil</h1>
            <p>Alunos treinados nos bootcamps</p>
          </div>
          <div className="number">
            <h1><span>190</span> mil</h1>
            <p>Alunos iniciados nos cursos gratuitos</p>
          </div>
          <div className="number">
            <h1><span>57</span> mil</h1>
            <p>Membros na comunidade aberta</p>
          </div>
          <div className="number">
            <h1><span>386</span> mil</h1>
            <p>Devs impactados</p>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <h1>Disclaimer</h1>
        <img src={bootcamp} alt="Icon" />
        <div className="disclaimer-content">
          <p>Ao final desse evento nós abrimos as 
            inscrições para novas turmas dos nossos bootcamps pagos.</p>
        </div>
      </div>
      <div className="footer">
        <div className="header">
            <img src={logo} alt="Logo" />
            <div className="header-info">
              <div className="date">
                <FaCalendar className="icon" />
                <p>1 a 5 de janeiro</p>
              </div>
              <div className="free">
                <FaExclamationCircle  className="icon" />
                <p>100% online e gratuito!</p>
              </div>
              <div className="new-content">
                <FaStar />
                <p>Conteúdo inédito!</p>
              </div>
            </div>
        </div>
        <div className="hero-content content-footer">
          <h1>Participe e bora codar!</h1>
          <a className="button" href="#">QUERO PARTICIPAR</a>
        </div>
      </div>
    </div>
  );
}

export default App;
