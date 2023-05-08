import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <section className="menu">
                <header>
                    <Link to="/">
                        <h1 className="menu__title">Edi Carlos</h1>
                    </Link>
                </header>
                <nav>
                    <ul className="menu__list">
                        <li className="menu__list__item"><a href="/#sobremim">About me</a></li>
                        <li className="menu__list__item"><a href="/#skills">Skills</a></li>
                        <li className="menu__list__item"><a href="/#hobbies">Hobbies</a></li>
                        <li className="menu__list__item"><a href="/#formacao">Training and courses</a></li>
                        <li className="menu__list__item"><a href="/#experiencia">Experience</a></li>
                        <li className="menu__list__item"><Link to="/projetos">Projects</Link></li>
                        <li className="menu__list__item__contato"><a href="/#contato">edi_csilva@hotmail.com</a></li>
                    </ul>
                </nav>
            </section>
            <button href="#" className="btn"></button>
        </>
    )
}