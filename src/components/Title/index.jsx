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
              <li className="title__network__item"><a href="https://www.frontendmentor.io/profile/ediCarlosSilva"
                target="_blank" title="facebook" rel="noreferrer">Frontendmentor</a></li>
              <li className="title__network--name">Frontendmentor</li>
            </ul>
            <ul className="title__network">
              <li className="title__network__item"><a href="https://github.com/ediCarlosSilva" target="_blank"
                title="github" rel="noreferrer">Github</a></li>
              <li className="title__network--name">Github</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.hackerrank.com/edi_csilva?hr_r=1" target="_blank"
                title="Instagram" rel="noreferrer">HackerRank</a></li>
              <li className="title__network--name">HackerRank</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://www.linkedin.com/in/edicarlossilva/" target="_blank"
                title="Linkedin" rel="noreferrer">Linkedin</a></li>
              <li className="title__network--name">Linkedin</li>
            </ul>

            <ul className="title__network">
              <li className="title__network__item"><a href="https://app.pluralsight.com/profile/ediCarlos#0" target="_blank"
                title="Pluralsight" rel="noreferrer">Pluralsight</a></li>
              <li className="title__network--name">Pluralsight</li>
            </ul>
            
            <ul className="title__network">
              <li className="title__network__item"><a href={i18n.t('titlePage.title__link__resume')} target="_blank"
                title="Resume" rel="noreferrer">Resume (pdf)</a></li>
              <li className="title__network--name">Resume (pdf)</li>
            </ul>

          </div>
        </div>
      </div>
    </Container>
  )
}