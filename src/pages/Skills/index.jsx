import './Skills.css';

export default function Skills() {

  document.title = "Skills | Portifólio Edi Carlos";

  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">Skills</h3>
      <div className="skills__line">
        <div className="skills__box">
          <ul>
            <li className="skills__img"><img src="assets\htlm.png" alt="" /></li>
            <li className="skills__name"> Html 5</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"> <img src="assets\css_icon.png" alt="" /> </li>
            <li className="skills__name">CSS</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"> <img src="assets\js_icon.png" alt="" /></li>
            <li className="skills__name">Javascript</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"> <img src="assets\react_icon.png" alt="" /> </li>
            <li className="skills__name">React</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"> <img src="assets/linux-essentials.jpg" alt="" /></li>
            <li className="skills__name">Linux</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"><img src="assets/others.jpg" alt="" /></li>
            <li className="skills__name">English B2+</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"><img src="assets/git.png" alt="" /></li>
            <li className="skills__name">Git</li>
          </ul>
        </div>

        <div className="skills__box">
          <ul>
            <li className="skills__img"><img src="assets/http.png" alt="" /></li>
            <li className="skills__name">HTTP</li>
          </ul>
        </div>

      </div>
    </section>
  )
}