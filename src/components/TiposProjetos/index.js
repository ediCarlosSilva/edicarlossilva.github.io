import ProjetoCard from '../ProjetoCard';
import './TiposProjetos.css';

const TiposProjetos = (props) => {

    // {
    //     deploy: "link do deploy",
    //     descricao: "uma descricao do projeto",
    //     imagem:"http://",
    //     repositorio: "link do repositorio",
    //     tipoProjeto: "Estudo",
    //     titulo:"titulo projeto"
    // }

return (
    <section className='tipoProjeto' style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderBottom: `4px solid ${props.corPrimaria}` }}>{props.nome}</h3>
        {
            props.projetos.map(projeto => 
                <ProjetoCard 
                    titulo={projeto.titulo} 
                    descricao={projeto.descricao}
                    repositorio={projeto.repositorio}
                    deploy={projeto.deploy}
                    tipoProjeto={projeto.tipoProjeto}
                />)
        }
    </section>
)
}

export default TiposProjetos;