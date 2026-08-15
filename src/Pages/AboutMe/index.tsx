import { Line, SectionContent, StyledSection } from "./styled.tsx";

type Badges = {
  src: string,
  alt?: string
}

const AboutMe = () => {
  const skillsBadges: Badges[] = [
    {
      src: "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"
    },
    {
      src: "https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
    },
    {
      src: "https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/.NET-512BD4.svg?style=for-the-badge&logo=dotnet&logoColor=white"
    },
    {
      src: "https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white"
    },
  ];
  const platformsBadges: Badges[] = [
    {
      src: "https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white",
    },
    {
      src: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
    },
    {
      src: "https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white",
    },
    {
      src: "https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white",
    },
    {
      src: "https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white",
    },
    {
      src: "https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white",
    },
  ];

  return (
    <StyledSection>
      <SectionContent>
        <div className="perfil-photo">
          <img src="Images/perfil-photo.jpg" alt="foto de perfil" />
        </div>
        <div className="about-me-message">
          <p className="letter-spacing">
            Sobre mim
          </p>
          <h3 id="about-me-title">Olá! Me chamo Paulo Miguel</h3>
          <Line />
          <h3 className="letter-spacing about-me-subtitles">
            Meta
          </h3>
          <h4 id="about-me-text">
            Busco trabalhar criando e gerenciando aplicações tipo, sites e APIs. Durante meus estudos, além de desenvolver a stack em que eu quero focar, aprendi e apliquei conceitos como design pattern, modelagem de dados, git e github, e virtualização.
          </h4>
          <h3 className="letter-spacing about-me-subtitles">
            Perfil profissional
          </h3>
          <h4>
            Possuo um perfil curioso e independente, o que me faz questionar bastante sobre como uma tarefa deve ser realizada para ser concluída. Desenvolvi esse perfil pois acredito ser um perfil de um profissional decidido e de raciocínio rápido, que é justamente a imagem que eu desejo passar sobre mim.
          </h4>
          <h3 className="letter-spacing about-me-subtitles">
            Experiência Acadêmica
          </h3>
          <h4>
            Atualmente estou no 2° período cursando Análise e Desenvolvimento de Sistemas na ESBAM, durante meu ensino na faculdade, eu também estou sempre em busca de conhecimento em fontes externas, por consequência acabei me aprofundando na área da programação e estou a procura de um ambiente em que eu possa compartilhar e contribuir com meu conhecimento.
          </h4>
          <div className="abilities">
            <h3>Habilidades:</h3>
            <ul>
              {
                skillsBadges.map((badgeImg) => (
                  <li>
                    <img src={badgeImg.src} alt={badgeImg.alt} />
                  </li>
                ))
              }
            </ul>
            <h3>Plataformas Usadas:</h3>
            <ul>
              {
                platformsBadges.map((badgeImg) => (
                  <li>
                    <img src={badgeImg.src} alt={badgeImg.alt} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </SectionContent>
    </StyledSection>
  );
};

export default AboutMe;
