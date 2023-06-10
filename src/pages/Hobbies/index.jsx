import './Hobbies.css';
import {i18n} from '../../translate/i18n';

export default function Hobbies() {

  document.title = "Hobbies | Portifólio Edi Carlos";

  return (
    <section className="hobbies" id="hobbies">
      <h3 className="hobbies__title">Hobbies</h3>
      <div className="hobbies__line">
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"><img src="./assets/fones-de-ouvido.png" alt="" /></li>
            <li className="hobbies__name">{i18n.t('hobbies.ouvir')}</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/microphone.png" alt="" /> </li>
            <li className="hobbies__name">{i18n.t('hobbies.cantar')}</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/reading-book.png" alt="" /></li>
            <li className="hobbies__name">{i18n.t('hobbies.ler')}</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/biblia.png" alt="" /> </li>
            <li className="hobbies__name">{i18n.t('hobbies.oracao')}</li>
          </ul>
        </div>

      </div>
    </section>
  )
}