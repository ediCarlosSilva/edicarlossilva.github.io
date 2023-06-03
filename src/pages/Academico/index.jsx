import './Academico.css';

export default function Academico() {

  document.title = "Acadêmico | Portifólio Edi Carlos";

  return (
    <section className="academic" id="formacao">
      <h2 className="academic__title">Formação Acadêmica</h2>
      <div className="academic__courses">
        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/Fatec-sorocaba.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>Análise e Desenvolvimento de Sistemas</h4>
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
              <h4>R2 - Matemática</h4>
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
              <h4>Ciências Contábeis</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>Cursando - Cruzeiro do Sul</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}