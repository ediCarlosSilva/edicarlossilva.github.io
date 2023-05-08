import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {
                    props.tipos.map(tipo => {
                        return <option key={tipo}>{tipo}</option>
                    })
                }
            </select>
        </div>
    )
}

// <option value="estudo">Estudo</option>
// <option value="challenge">Challenge</option>
// <option value="teste">Teste-técnico</option>