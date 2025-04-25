import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="Project">
      <h2>Portfolio</h2>
      <div className="Projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="Project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Pasta</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="Project-links">
                <a href="https://beecare.bionexo.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Beecare - Sistema de gestão de Saude</h3>
              <p>
                Desenvolvimento de RPAs para o Beecare, um sistema de gestão de saude que facilita a comunicação entre a Operadora e Prestadora
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Webscrapping</li>
                <li>Python</li>
                <li>Laravel</li>
                <li>Selenoid</li>
                <li>APIs</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="Project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="Project-links">
                <a href="https://www.iapp.com.br/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
                {/* <a href="https://www.iapp.com.br/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                {/* <a href="https://vote.DenisAlencar.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
              </div>
            </header>
            <div className="body">
              <h3>IAPP - Instituto Ambev Previdencia Privada</h3>
              <p> Fui responsavel pelo desenvolvimento completo do website do instituto Ambev, utilizando as tecnologias escolhidas pelo cliente </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Azure</li>
                <li>Wordpress</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>PHPSpreadSheet</li>
                <li>APIs</li>
                <li>OdinWP</li>
                <li>Composer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="Project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="Project-links">
                {/* <a href="https://github.com/CodeDenis/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
                <a href="https://coglobal.com.br/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Coglobal - Connect Global</h3>
              <p>
                Criação completa do site da Connect global empresa que une as maiores empresas do setor eletrico da america do Sul
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Linux</li>
                <li>PHP</li>
                <li>Wordpress</li>
                <li>MySQL</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Cssanimation</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}