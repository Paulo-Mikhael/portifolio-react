import { IProjectCard } from "../Interfaces";

export const ProjectsData: IProjectCard[] = [
  {
    name: 'PHLOX',
    type: 'Landing Page',
    description: 'A PHLOX é um e-commerce que vende os mais diversos acessórios do mundo moderno. Os vários blocos com cores chamativas e design minimalista da loja, ajudam na retenção do usuário, gerando talvez um futuro cliente.',
    linkToWeb: 'https://phlox-psi.vercel.app/',
    linkToGithubReadme: 'https://github.com/Paulo-Mikhael/phlox?tab=readme-ov-file#readme',
    deviconTechnologiesClasses: ['devicon-react-original', 'devicon-typescript-plain', 'devicon-tailwindcss-original'],
    projectImageUrl: 'Images/phlox-images.png',
    projectImageAlt: 'Imagem de quatro telas da aplicação "PHLOX" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Telas da aplicação "PHLOX"',
    toRight: false
  },
  {
    name: 'XWriter',
    type: 'Blog',
    description: 'Essa aplicação web tem o objetivo de logar usuários de uma base dados, através de um formulário de criar conta se necessário, e permitir à eles, postar mensagens.',
    linkToWeb: 'https://xwriter.vercel.app/',
    linkToGithubReadme: 'https://github.com/Paulo-Mikhael/XWriter?tab=readme-ov-file#readme',
    deviconTechnologiesClasses: ['devicon-react-original', 'devicon-typescript-plain', 'devicon-tailwindcss-original', 'devicon-reactrouter-plain'],
    projectImageUrl: 'Images/xwriter-images.png',
    projectImageAlt: 'Imagem de três telas da aplicação "XWriter" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Telas da aplicação "XWriter"',
    toRight: true
  },
  {
    name: 'Fastask',
    type: 'Aplicação Web',
      description: 'A Fastask é uma aplicação web que busca facilitar a gestão de tarefas, a página possui um design limpo e intuitivo, seu funcionamento consiste principalmente em criar, excluir e editar tarefas.',
    linkToWeb: 'https://paulo-mikhael.github.io/fastask/',
    linkToGithubReadme: 'https://github.com/Paulo-Mikhael/fastask?tab=readme-ov-file#readme',
    deviconTechnologiesClasses: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
    projectImageUrl: 'Images/fastask-images.png',
    projectImageAlt: 'Imagem de uma tela da aplicação "Fastask" espalhada como se fosse uma folha de papel',
    projectImageTitle: 'Telas da aplicação "PHLOX"',
    toRight: false
  }
]