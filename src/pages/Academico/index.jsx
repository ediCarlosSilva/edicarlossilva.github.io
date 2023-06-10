import './Academico.css';
import {i18n} from '../../translate/i18n';

export default function Academico() {

  document.title = "Acadêmico | Portifólio Edi Carlos";

  return (
    <section className="academic" id="formacao">
      <h2 className="academic__title">{i18n.t('formacao.titulo')}</h2>
      <div className="academic__courses">
        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/Fatec-sorocaba.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>{i18n.t('formacao.formacao1')}</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2018 - FATEC Sorocaba</p>
            </li>
          </ul>
        </div>
        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/cruzeiro-do-sul.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>{i18n.t('formacao.formacao2')}</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2020 - Cruzeiro do Sul</p>
            </li>
          </ul>
        </div>

        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/cruzeiro-do-sul.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>{i18n.t('formacao.formacao3.curso')}</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>{i18n.t('formacao.formacao3.conclusao')} - Cruzeiro do Sul</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}