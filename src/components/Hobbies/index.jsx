import './Hobbies.css';

export default function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <h3 className="hobbies__title">Hobbies</h3>
      <div className="hobbies__line">
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"><img src="./assets/fones-de-ouvido.png" alt="" /></li>
            <li className="hobbies__name">Ouvir música</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/microphone.png" alt="" /> </li>
            <li className="hobbies__name">Cantar</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/reading-book.png" alt="" /></li>
            <li className="hobbies__name">Ler</li>
          </ul>
        </div>

        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img"> <img src="./assets/biblia.png" alt="" /> </li>
            <li className="hobbies__name">Oração</li>
          </ul>
        </div>

      </div>
    </section>
  )
}