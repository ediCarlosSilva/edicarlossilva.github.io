import './TiposProjetos.css';

const TiposProjetos = (props) => {
    return (
        <section className='tipoProjeto'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default TiposProjetos;