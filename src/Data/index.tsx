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
  },
  {
    name: 'Blog PHLOX',
    type: 'Blog',
    description: 'Este projeto é um blog de uma empresa fictícia de tecnologia, onde além da própria poder postar o conteúdo da loja, também funciona como uma rede social onde os clientes podem interagir se tiverem uma conta.',
    linkToWeb: 'https://phlox-blog.vercel.app/',
    linkToGithubReadme: 'https://github.com/Paulo-Mikhael/phlox-blog?tab=readme-ov-file#readme',
    deviconTechnologiesClasses: ['devicon-react-original', 'devicon-vitejs-plain', 'devicon-typescript-plain', 'devicon-tailwindcss-original','devicon-reactrouter-plain'],
    projectImageUrl: 'Images/phlox-blog-images.png',
    projectImageAlt: 'Imagem de cinco telas da aplicação "Blog PHLOX" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Tela principal da aplicação "Blog PHLOX"',
  },
  {
    name: 'in.orbit backend',
    type: 'API',
    description: 'Este é o servidor de uma aplicação chamada in.orbit, responsável por guardar e gerenciar as metas do usuário, elas são armazenadas em um banco de dados postgresql por um container docker e gerenciadas pelo framework back-end fastify.',
    linkToWeb: 'https://github.com/Paulo-Mikhael/in-orbit-backend?tab=readme-ov-file#rodando-localmente-prompt-',
    linkToGithubReadme: 'https://github.com/Paulo-Mikhael/in-orbit-backend?tab=readme-ov-file#readme',
    deviconTechnologiesClasses: ['devicon-nodejs-plain-wordmark', 'devicon-typescript-plain', 'devicon-fastify-plain', 'devicon-docker-plain', 'devicon-postgresql-plain'],
    projectImageUrl: 'Images/in-orbit-backend-images.png',
    projectImageAlt: 'Imagem da documentação da API feita no swagger',
    projectImageTitle: 'Documentação da API feita no swagger',
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
  }
]