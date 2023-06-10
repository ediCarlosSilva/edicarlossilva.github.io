import { Container } from '@mui/material';
import './Title.css';
import { i18n } from '../../translate/i18n';

export default function Title() {
  return (
    <Container component="section" className='title' maxWidth="lg">
      <div className="title__div">
        <img className="title__profile" src="./assets/profile.png" alt="Imagem de Perfil"/>
        <div className="title__container">
        <h2 className="title__bio">{i18n.t('titlePage.title__bio__ola')}<span className="title__bio--front">{i18n.t('titlePage.title__bio__edi')}</span>. {i18n.t('titlePage.title__bio__sou')}<span
              className="title__bio--front">{i18n.t('titlePage.title__bio__analista')}</span>{i18n.t('titlePage.title__bio__skills')}<br/><span className="title__bio--front">{i18n.t('titlePage.title__bio__frontend')}</span>{i18n.t('titlePage.title__bio__other')}.</h2>
          {/* <h3 className="title__subsection">Atualmente estou participando no projeto Oracle ONE na Alura.</h3> */}
          <div className="title__network--box">
            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.facebook.com/edicarlos.silva.5205622"
                target="_blank" title="facebook" rel="noreferrer">Facebook</a></li>
              <li className="title__network--name">Facebook</li>
            </ul>
            <ul className="title__network">
              <li className="title__network__item"><a href="https://github.com/ediCarlosSilva" target="_blank"
                title="github" rel="noreferrer">Github</a></li>
              <li className="title__network--name">Github</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.instagram.com/edi.carlos.silva/" target="_blank"
                title="Instagram" rel="noreferrer">Instagram</a></li>
              <li className="title__network--name">Instagram</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.linkedin.com/in/edicarlossilva/" target="_blank"
                title="Linkedin" rel="noreferrer">Linkedin</a></li>
              <li className="title__network--name">Linkedin</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="./edi-carlos-resume.pdf" target="_blank"
                title="Resume" rel="noreferrer">Resume (pdf)</a></li>
              <li className="title__network--name">Resume (pdf)</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}