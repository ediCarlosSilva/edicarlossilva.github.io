import ProjetoCard from '../ProjetoCard';
import './TiposProjetos.css';

const TiposProjetos = (props) => {

    console.log(props);

    return (
        <section className='tipoProjeto' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottom: `4px solid ${props.corPrimaria}`}}>{props.nome}</h3>
            {
                props.projetos.map(projeto => <ProjetoCard />)
            }
        </section>
    )
}

export default TiposProjetos;