import TiposProjetos from "../../components/TiposProjetos";
import projetosPt from './../../json/projetos.json';
import projectsEn from './../../json/projects.json';
import { useState } from "react";
import {i18n} from '../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';

export default function ProjetosPage() {

  document.title = "Projetos | Portifólio Edi Carlos";

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

  console.log(language);
  let projetos;

  switch (language) {
    case 'pt-BR':
      projetos = projetosPt;
      break;
    case 'en':
      projetos = projectsEn;
      break;
    default:
      projetos = projectsEn;

  }

  const tiposProjetos = [
    {
      nome: i18n.t('tiposProjeto.estudo'),
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: i18n.t('tiposProjeto.challenge'),
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: i18n.t('tiposProjeto.testeTecnico'),
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: i18n.t('tiposProjeto.voluntario'),
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  // const [projetos, setProjetos] = useState([]);

  // const aoNovoProjetoCadastrado = (projeto) => {
  //   console.log(projeto);
  //   setProjetos([...projetos, projeto]);
  // }

  // objeto projeto:
  // {
  //   deploy: "link do deploy",
  //   descricao: "descricao do projeto",
  //   imagem: "caminho imagem",
  //   repositorio: "link do repositorio",
  //   tipoProjeto: "Estudo",
  //   titulo: "Titulo do projeto"
  // }

  // const projetos = [
  //   {
  //     id: "1",
  //     deploy: "https://edicarlossilva.github.io/blogWithRest/",
  //     descricao: "Neste Projeto, React é utilizado para consumir API REST e renderizar posts de um blog e também seus comentários.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/blogWithRest",
  //     tipoProjeto: "Teste Técnico",
  //     origem: "Tech Recruit",
  //     titulo: "Blog com React"
  //   },
  //   {
  //     id: "2",
  //     deploy: "Somente Local",
  //     descricao: "Utilização de javascript (vanilla) para aplicar os conceitos de CRUD (CREATE, READ, UPDATE, DELETE)",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/js-crud",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Js CRUD"
  //   },
  //   {
  //     id: 4,
  //     deploy: "https://edicarlossilva.github.io/challenge01-decodificador/",
  //     descricao: "Codificador/Decodificador com javascript de acordo com regras de chave passadas no challenge.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/challenge01-decodificador",
  //     tipoProjeto: "Challenge",
  //     origem: "Alura",
  //     titulo: "Codificador / Decodificador"
  //   },
  //   {
  //     id: "5",
  //     deploy: "https://edicarlossilva.github.io/arquitetura-css/",
  //     descricao: "Desenvolvimento de uma página com utilização do CSS com o principio BEM (block, Element and Modifier)",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/arquitetura-css",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Arquitetura CSS"
  //   },
  //   {
  //     id: "6",
  //     deploy: "https://edicarlossilva.github.io/explorando-DOM/",
  //     descricao: "Projeto para praticar manipulação do DOM (Document Object Model). Criação de elemento. Adionar classe CSS",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/explorando-DOM",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Explorando DOM js"
  //   },
  //   {
  //     id: "7",
  //     deploy: "https://edicarlossilva.github.io/flexbox-2023/",
  //     descricao: "Utilizando estilização CSS com flexbox. Uma outra alternativa para posicionar elementos na página.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/flexbox-2023",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Flexbox"
  //   },
  //   {
  //     id: "8",
  //     deploy: "https://edicarlossilva.github.io/html5-css3-i/",
  //     descricao: "Projeto muito interessante que desenvolvi utilizando as novas tags do html5.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/html5-css3-i",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "HTML5 + CSS3"
  //   },
  //   {
  //     id: "9",
  //     deploy: "https://edicarlossilva.github.io/layout-responsivo/",
  //     descricao: "Utilização de media queries no CSS para deixar página responsiva. Seguindo principio do mobile first",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/layout-responsivo",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Layout Responsivo"
  //   },
  //   {
  //     id: "10",
  //     deploy: "https://organo-react-lemon.vercel.app/",
  //     descricao: "Utilizado React para organizar equipes e colaboradores. Este projeto é base para adaptar para desse portifólio.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/organoReact",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Organo"
  //   },
  //   {
  //     id: "11",
  //     deploy: "https://react-componentes-how-to.vercel.app/",
  //     descricao: "Este projeto é uma maneira de aprofundar como os componentes React funcionam",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/react-componentes-HowTo",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Componentes React"
  //   },
  //   {
  //     id: "12",
  //     deploy: "https://react-router-javascript.vercel.app/",
  //     descricao: "Aprofundando o conhecimento de Rotas no React",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/React-Router-Javascript",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "React Router"
  //   },
  //   {
  //     id: "13",
  //     deploy: "https://styled-components-black.vercel.app/",
  //     descricao: "Projeto para utilizar `Styled-components` em um projeto com React.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/styled-components",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Styled-components"
  //   },
  //   {
  //     id: "14",
  //     deploy: "https://edicarlossilva.github.io/validacaoFormulario/",
  //     descricao: "Validação de campo e-mail, CPF, quantidade de caracteres, tamanho e caracteres exigidos no campo senha.",
  //     imagem: "caminho imagem",
  //     repositorio: "https://github.com/ediCarlosSilva/validacaoFormulario",
  //     tipoProjeto: "Estudo",
  //     origem: "Alura",
  //     titulo: "Validação de Formulário"
  //   }

  // ]

  return (
    <>
      {/* <FormularioProjetos tiposProjetos={tiposProjetos.map(tipoProjeto => tipoProjeto.nome)} aoProjetoCadastrado={projeto => aoNovoProjetoCadastrado(projeto)} /> */}

      {
        tiposProjetos.map(tipoProjeto => <TiposProjetos
          key={tipoProjeto.nome}
          nome={tipoProjeto.nome}
          corPrimaria={tipoProjeto.corPrimaria}
          corSecundaria={tipoProjeto.corSecundaria}
          projetos={projetos.filter(projeto => projeto.tipoProjeto === tipoProjeto.nome)}
        />)
      }


    </>
  )
}