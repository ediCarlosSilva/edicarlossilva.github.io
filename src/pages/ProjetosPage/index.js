import { useState } from "react";
import FormularioProjetos from "../../components/FormularioProjetos"
import TiposProjetos from "../../components/TiposProjetos";

export default function ProjetosPage() {

  const tiposProjetos = [
    {
      nome: 'Estudo',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Challenge',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Teste Técnico',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Voluntário',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [projetos, setProjetos] = useState([]);

  const aoNovoProjetoCadastrado = (projeto) => {
    console.log(projeto);
    setProjetos([...projetos, projeto]);
  }

  return (
    <>
      <FormularioProjetos aoProjetoCadastrado={projeto => aoNovoProjetoCadastrado(projeto)} />

      {
        tiposProjetos.map(tipoProjeto => <TiposProjetos
            key={tipoProjeto.nome}
            nome={tipoProjeto.nome} 
            corPrimaria={tipoProjeto.corPrimaria}
            corSecundaria={tipoProjeto.corSecundaria}
          />)
      }


    </>
  )
}