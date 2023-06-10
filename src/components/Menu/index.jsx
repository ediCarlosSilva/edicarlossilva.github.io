import './Menu.css';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';

export default function Menu() {
    return (
        <>
            <section className="menu">
                <header>
                    <Link to="/">
                        <h1 className="menu__title--edi">Edi Carlos</h1>
                    </Link>
                    <Link to="/SobreMim">
                        <h1 className="menu__title--sobremim">{i18n.t('menu.sobremim')}</h1>
                    </Link>
                    <Link to="/Projetos">
                        <h1 className="menu__title--projetos">{i18n.t('menu.projetos')}</h1>
                    </Link>
                </header>
                <nav>
                    <ul className="menu__list">
                        <li className="menu__list__item sobremim"><Link to="/SobreMim">{i18n.t('menu.sobremim')}</Link></li>
                        <li className="menu__list__item"><Link to="/Skills">{i18n.t('menu.skills')}</Link></li>
                        <li className="menu__list__item"><Link to="/Hobbies">{i18n.t('menu.hobbies')}</Link></li>
                        <li className="menu__list__item"><Link to="/Formacao">{i18n.t('menu.formacao')}</Link></li>
                        <li className="menu__list__item"><Link to="/Experiencia">{i18n.t('menu.experiencia')}</Link></li>
                        <li className="menu__list__item projetos"><Link to="/Projetos">{i18n.t('menu.projetos')}</Link></li>
                        {/* <li className="menu__list__item__contato"><a href="/#contato">edi_csilva@hotmail.com</a></li> */}
                    </ul>
                </nav>
            </section>
            {/* <button href="#" className="btn"></button> */}
        </>
    )
}