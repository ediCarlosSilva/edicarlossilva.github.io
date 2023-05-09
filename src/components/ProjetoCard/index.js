import './Projeto.css';
import { Link } from 'react-router-dom';

const ProjetoCard = ({deploy, descricao, imagem, repositorio, tipoProjeto, titulo}) => {


    // {
    //     deploy: "link do deploy",
    //     descricao: "uma descricao do projeto",
    //     imagem:"http://",
    //     repositorio: "link do repositorio",
    //     tipoProjeto: "Estudo",
    //     titulo:"titulo projeto"
    // }

    return (
        <Link to={`/projetos/1`}>
            <div className="projeto">
                <img
                    className="capa"
                    src={`/assets/projetos/1/capa.png`}
                    alt="Imagem de capa do projeto"
                />
                <h2 className="titulo">
                    {titulo}
                </h2>
                <h4>{descricao}</h4>

            </div>
        </Link>

    )
}

export default ProjetoCard;