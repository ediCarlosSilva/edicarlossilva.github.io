import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './FormularioProjetos.css';

export default function Formulario(props) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [deploy, setDeploy] = useState('');
  const [tipoProjeto, setTipoProjeto] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('form foi submetido. ', nome, descricao, imagem, repositorio, deploy, tipoProjeto);
    props.aoProjetoCadastrado({
      nome,
      descricao,
      imagem,
      repositorio,
      deploy,
      tipoProjeto
    })
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do projeto</h2>
        <CampoTexto 
          valor={nome} 
          aoAlterado={valor => setNome(valor)}
          obrigatorio="true" 
          label="nome" 
          placeholder="Digite seu nome do projeto" 
        />
        <CampoTexto 
          valor={descricao} 
          aoAlterado={valor => setDescricao(valor)}
          obrigatorio="true" 
          label="descricao" 
          placeholder="Digite descrição do projeto" 
        />
        <CampoTexto 
          valor={imagem} 
          aoAlterado={valor => setImagem(valor)}
          obrigatorio="true" 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
        />
        <CampoTexto 
          valor={repositorio} 
          aoAlterado={valor => setRepositorio(valor)}
          obrigatorio="true" 
          label="repositorio" 
          placeholder="Digite o endereço do repositorio" 
        />
        <CampoTexto 
          valor={deploy} 
          aoAlterado={valor => setDeploy(valor)}
          obrigatorio="true" 
          label="deploy" 
          placeholder="Digite o endereço do deploy" 
        />
        <ListaSuspensa 
          obrigatorio="true" 
          label="Tipo Projeto" 
          tipos={props.tiposProjetos}
          valor={tipoProjeto}
          aoAlterado={valor => setTipoProjeto(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}