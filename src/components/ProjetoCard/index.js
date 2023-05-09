import './Projeto.css';
import { Link } from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';

const ProjetoCard = ({ deploy, descricao, imagem, repositorio, tipoProjeto, titulo, corDaBorda }) => {


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
            <div className="projeto" style={{boxShadow: `5px 5px 15px ${hexToRgba(corDaBorda, 1)}`}}>
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