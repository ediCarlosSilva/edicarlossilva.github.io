import './Footer.css';
import { i18n } from '../../translate/i18n';

export default function Footer() {
    return (
        <section className="footer">
        <div className="footer__rodape">
          <h2>{i18n.t('footer.desenvolvido')} Edi Carlos</h2>
          <p>2023</p>
        </div>
      </section>
    )
}