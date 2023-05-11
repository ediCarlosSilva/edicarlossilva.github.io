import './Projeto.css';
import { Link } from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';
import BotaoCard from '../BotaoCard';

const ProjetoCard = ({ id, deploy, descricao, imagem, repositorio, tipoProjeto, titulo, corDaBorda, origem }) => {


    // {
    //     deploy: "link do deploy",
    //     descricao: "uma descricao do projeto",
    //     imagem:"http://",
    //     repositorio: "link do repositorio",
    //     tipoProjeto: "Estudo",
    //     titulo:"titulo projeto"
    // }

    return (
        <div className="projeto" style={{ boxShadow: `5px 5px 15px ${hexToRgba(corDaBorda, 1)}` }}>
            <img
                className="capa"
                src={`/assets/projetos/${id}/capa.png`}
                alt="Imagem de capa do projeto"
            />
            <div className='projeto__detalhes'>
                <h2 className="titulo">
                    {titulo}
                </h2>
                <h4>{descricao}</h4>
            </div>
            <div className='botoes'>
                <BotaoCard deploy={deploy}>
                    Deploy
                </BotaoCard>
                <BotaoCard deploy={repositorio}>
                    Repositorio
                </BotaoCard>

            </div>

        </div>

    )
}

export default ProjetoCard;