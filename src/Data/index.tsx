import type { IProjectCard } from "../Interfaces";

export const ProjectsData: IProjectCard[] = [
  {
    name: "CINE NIGHTLY",
    type: "Landing Page",
    description:
      "A CINE NIGHTLY, empresa fictícia criada para o projeto, é uma plataforma de compra de ingressos, e para chamar a atenção dos clientes, teve-se a ideia de personalizar o site com um filme popular, assim, gerando uma boa impressão pro usuário que irá realizar a compra. Além do design, a página conta com animações que ajudam ainda mais na retenção.",
    linkToWeb: "https://cinema-lp.vercel.app/",
    linkToGithubReadme:
      "https://github.com/Paulo-Mikhael/cinema-lp?tab=readme-ov-file#readme",
    deviconTechnologiesClasses: [
      "devicon-nextjs-plain",
      "devicon-typescript-plain",
      "devicon-tailwindcss-original",
    ],
    projectImageUrl: "Images/deadpool-images.png",
    projectImageAlt:
      'Imagem de quatro telas da aplicação "CINE NIGHTLY" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Telas da aplicação "CINE NIGHTLY"',
  },
  {
    name: "API para blogs",
    type: "API RESTful",
    description:
      "Uma api para aplicações que precisam gerenciar usuários e posts, possui um sistema completo de cadastro, onde é possível gerenciar o usuário atual por meio de token JWT, fazer login e encerrar sessão. Além disso, é possível um usuário redefinir a senha através de um código enviado por email. A API foi estruturadada com tratamento de erros, verificação de tokens JWT, gerenciamento de cookies, armazenamento local de arquivos e design pattern MVC.",
    linkToWeb: "https://github.com/Paulo-Mikhael/blog-api?tab=readme-ov-file",
    linkToGithubReadme:
      "https://github.com/Paulo-Mikhael/blog-api?tab=readme-ov-file",
    deviconTechnologiesClasses: [
      "devicon-nodejs-plain",
      "devicon-typescript-plain",
      "devicon-fastify-plain",
      "devicon-prisma-original"
    ],
    projectImageUrl: "Images/blog-api-image.png",
    projectImageAlt:
      'Imagem da aplicação de "API para blogs"',
    projectImageTitle: 'Telas da aplicação "API para blogs"',
  },
  {
    name: "Barbershop",
    type: "Plataforma de Agendamento (Em Progresso)",
    description:
      "Projeto Full-Stack (em desenvolvimento) onde usuários poderão chegar no site de uma barbearia e agendarem horários, onde os clientes logados no sistema poderão contar com um perfil e obter informações sobre seus agendamentos, pagamentos ou preferências. Além das funcionalidades ao cliente, serão implementadas duas páginas administrativas, uma com controle total da barbearia para os donos, e outra com uma visão geral dos clientes e seus agendamentos para os funcionários.",
    linkToWeb: "https://github.com/Paulo-Mikhael/barbershop?tab=readme-ov-file",
    linkToGithubReadme:
      "https://github.com/Paulo-Mikhael/barbershop?tab=readme-ov-file",
    deviconTechnologiesClasses: [
      "devicon-nextjs-plain",
      "devicon-tailwindcss-original",
      "devicon-typescript-plain",
    ],
    projectImageUrl: "Images/barbershop-images.png",
    projectImageAlt:
      'Imagem de duas telas da aplicação "Barbershop" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Telas da aplicação "Barbershop"',
  },
  {
    name: "XWriter",
    type: "Plataforma de Posts",
    description:
      "Aplicação criada para cadastro de usuários e compartilhamento de posts, integrado ao serviço back-end Firebase, o projeto armazena as informações em um banco de dados de tempo real. Desenvolvido durante o desafio 7 Days of Code da Alura.",
    linkToWeb: "https://xwriter.vercel.app/",
    linkToGithubReadme:
      "https://github.com/Paulo-Mikhael/XWriter?tab=readme-ov-file",
    deviconTechnologiesClasses: [
      "devicon-react-original",
      "devicon-tailwindcss-original",
      "devicon-reactrouter-plain",
      "devicon-typescript-plain",
      "devicon-firebase-plain"
    ],
    projectImageUrl: "Images/xwriter-images.png",
    projectImageAlt:
      'Imagem de duas telas da aplicação "XWriter" espalhadas como se fossem folhas de papel',
    projectImageTitle: 'Telas da aplicação "XWriter"',
  },
];
