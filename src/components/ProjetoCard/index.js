import './Projeto.css';
import { Link } from 'react-router-dom';

const ProjetoCard = (props) => {

    console.log(props);

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
                    {props.titulo}
                </h2>

            </div>
        </Link>

    )
}

export default ProjetoCard;