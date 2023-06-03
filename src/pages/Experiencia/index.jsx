import './Experiencia.css';

export default function Experiencia() {

    document.title = "Experiência | Portifólio Edi Carlos";

    return (
        <section className="experience" id="experiencia">
            <h2 className="experience__title">Experiência Profissional</h2>
            <div className="experience__jobs">
                <div className="experience__jobs__box">
                    <ul className="experience__jobs__list">

                        <li className="experience__jobs__item__img"><span className="experience__Jobs__item--boxImage"><img
                            src="assets/malucho.jpg" alt="" /></span></li>
                        <li className="experience__jobs__item__title">
                            <h4>Malucho Supermercados</h4>
                        </li>
                        <li className="experience__jobs__item__subtitle">
                            <p>Gerente TI</p>
                            <p>2003 - Atual</p>
                        </li>
                    </ul>
                </div>


            </div>
        </section>
    )
}