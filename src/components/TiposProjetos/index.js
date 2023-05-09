import ProjetoCard from '../ProjetoCard';
import './TiposProjetos.css';

const TiposProjetos = (props) => {

    // console.log(props);

    // {
    //     deploy: "link do deploy",
    //     descricao: "uma descricao do projeto",
    //     imagem:"http://",
    //     repositorio: "link do repositorio",
    //     tipoProjeto: "Estudo",
    //     titulo:"titulo projeto"
    // }

    return (
        props.projetos.length > 0 && <section className='tipoProjeto' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderBottom: `4px solid ${props.corPrimaria}` }}>{props.nome}</h3>
            <div className='projetos'>
                {
                    props.projetos.map(projeto =>
                        <ProjetoCard
                            corDaBorda={props.corPrimaria}
                            key={projeto.titulo}
                            titulo={projeto.titulo}
                            descricao={projeto.descricao}
                            imagem={projeto.imagem}
                            repositorio={projeto.repositorio}
                            deploy={projeto.deploy}
                            tipoProjeto={projeto.tipoProjeto}
                        />)
                }
            </div>
        </section>
    )
}

export default TiposProjetos;