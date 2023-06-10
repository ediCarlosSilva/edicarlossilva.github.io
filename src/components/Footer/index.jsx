import './Footer.css';
import { i18n } from '../../translate/i18n';

export default function Footer() {
    return (
        <section className="footer">
        <div className="footer__rodape">
          <p>{i18n.t('footer.desenvolvido')} Edi Carlos</p>
          <p>2023</p>
        </div>
      </section>
    )
}