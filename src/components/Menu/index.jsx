import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <section className="menu">
                <header>
                    <Link to="/">
                        <h1 className="menu__title--edi">Edi Carlos</h1>
                    </Link>
                    <Link to="/Projetos">
                        <h1 className="menu__title--projetos">Projetos</h1>
                    </Link>
                </header>
                <nav>
                    <ul className="menu__list">
                        <li className="menu__list__item"><Link to="/SobreMim">Sobre mim</Link></li>
                        <li className="menu__list__item"><Link to="/Skills">Skills</Link></li>
                        <li className="menu__list__item"><Link to="/Hobbies">Hobbies</Link></li>
                        <li className="menu__list__item"><Link to="/Formacao">Formações e Cursos</Link></li>
                        <li className="menu__list__item"><Link to="/Experiencia">Experiência</Link></li>
                        <li className="menu__list__item projetos"><Link to="/Projetos">Projetos</Link></li>
                        {/* <li className="menu__list__item__contato"><a href="/#contato">edi_csilva@hotmail.com</a></li> */}
                    </ul>
                </nav>
            </section>
            <button href="#" className="btn"></button>
        </>
    )
}