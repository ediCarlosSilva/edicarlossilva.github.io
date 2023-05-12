import Academico from "../../components/Academico"
import Experiencia from "../../components/Experiencia"
import Footer from "../../components/Footer"
import Formulario from "../../components/Formulario"
import Hobbies from "../../components/Hobbies"
import Skills from "../../components/Skills"
import SobreMim from "../../components/SobreMim"
import Title from "../../components/Title"

export default function Home() {

    return (
        <>
            <Title />
            <SobreMim />
            <Skills />
            <Hobbies />
            <Academico />
            <Experiencia />
            {/* <Projetos /> */}
            <Formulario />
            <Footer />
        </>
    )
}