import './Projeto.css';
import { Link } from 'react-router-dom';

const ProjetoCard = (props) => {
    return (
        <Link to={`/projetos/1`}>
            <div className="projeto">
                <img
                    className="capa"
                    src={`/assets/projetos/1/capa.png`}
                    alt="Imagem de capa do projeto"
                />
                <h2 className="titulo">
                    Titulo Projeto
                </h2>

            </div>
        </Link>

    )
}

export default ProjetoCard;