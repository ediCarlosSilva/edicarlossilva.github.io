import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './FormularioProjetos.css';

export default function Formulario(props) {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [deploy, setDeploy] = useState('');
  const [tipoProjeto, setTipoProjeto] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProjetoCadastrado({
      titulo,
      descricao,
      imagem,
      repositorio,
      deploy,
      tipoProjeto
    })
    setTitulo('');
    setDescricao('');
    setImagem('');
    setRepositorio('');
    setDeploy('');
    setTipoProjeto('');
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do projeto</h2>
        <CampoTexto 
          valor={titulo} 
          aoAlterado={valor => setTitulo(valor)}
          obrigatorio="true" 
          label="titulo" 
          placeholder="Digite o título do projeto" 
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