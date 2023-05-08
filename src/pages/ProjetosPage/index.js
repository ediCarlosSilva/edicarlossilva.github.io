import { useState } from "react";
import FormularioProjetos from "../../components/FormularioProjetos"
import TiposProjetos from "../../components/TiposProjetos";

export default function ProjetosPage() {

  const [projetos, setProjetos] = useState([]);

  const aoNovoProjetoCadastrado = (projeto) => {
    console.log(projeto);
    setProjetos([...projetos, projeto]);
  }

  return (
    <>
      <FormularioProjetos aoProjetoCadastrado={projeto => aoNovoProjetoCadastrado(projeto)} />
      <TiposProjetos nome="Estudo" />
      <TiposProjetos nome="Challenge" />

    </>
  )
}