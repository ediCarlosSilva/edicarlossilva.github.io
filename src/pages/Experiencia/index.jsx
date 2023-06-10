import './Experiencia.css';
import {i18n} from '../../translate/i18n';

export default function Experiencia() {

    document.title = "Experiência | Portifólio Edi Carlos";

    return (
        <section className="experience" id="experiencia">
            <h2 className="experience__title">{i18n.t('experiencia.titulo')}</h2>
            <div className="experience__jobs">
                <div className="experience__jobs__box">
                    <ul className="experience__jobs__list">

                        <li className="experience__jobs__item__img"><span className="experience__Jobs__item--boxImage"><img
                            src="assets/malucho.jpg" alt="" /></span></li>
                        <li className="experience__jobs__item__title">
                            <h4>{i18n.t('experiencia.empresa.nome')}</h4>
                        </li>
                        <li className="experience__jobs__item__subtitle">
                            <p>{i18n.t('experiencia.empresa.funcao')}</p>
                            <p>2003 - {i18n.t('experiencia.empresa.fim')}</p>
                        </li>
                    </ul>
                </div>


            </div>
        </section>
    )
}