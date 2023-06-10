import './SobreMim.css';
import {i18n} from '../../translate/i18n';

export default function SobreMim() {

  document.title =  `${i18n.t('sobremim.title')} | Portifólio Edi Carlos`;

  return (
    <section className="about" id="sobremim">
      <div className="about__container">
        <h3 className="about__title">{i18n.t('sobremim.titulo')}</h3>
        <p className="about__paragraph">{i18n.t('sobremim.p1')}</p>
        <p className="about__paragraph">{i18n.t('sobremim.p2')}</p>
        <p className="about__paragraph">{i18n.t('sobremim.p3')}</p>
        <p className="about__paragraph">{i18n.t('sobremim.p4')}</p>
        <p className="about__paragraph">{i18n.t('sobremim.p5')}</p>
        <p className="about__paragraph">{i18n.t('sobremim.p6')}</p>
      </div>
    </section>
  )
}