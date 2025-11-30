import { Line, SectionContent, StyledSection } from "./styled.tsx";

const AboutMe = () => {
  return (
    <StyledSection>
      <SectionContent>
        <div className="perfil-photo">
          <img src="Images/perfil-photo.jpg" alt="foto de perfil" />
        </div>
        <div className="about-me-message">
          <p className="letter-spacing" id="about-me-letter-spacing">
            Sobre mim
          </p>
          <h3 id="about-me-title">Olá! Me chamo Paulo Miguel</h3>
          <Line />
          <h4 id="about-me-text">
            Me chamo Paulo Miguel Bentes do Nascimento, tenho 19 anos, sou de Manaus/AM. Por eu ter escolhido o desafio de entrar no mundo da programação, qualidades como comunicação e pensamento crítico são caracterísicas que estou sempre buscando evoluir, para eu poder colaborar com um time e atingir objetivos rapidamente, e além dessas minhas soft-skills, meu perfil curioso e criativo me permite estar sempre disposto a aprender e ter a mente aberta para diferentes ideias em um ambiente de trabalho. Estou sempre em busca de conhecimento e espero a cada dia melhorar para no futuro me tornar um ótimo profissional.
          </h4>
          <div className="abilities">
            <h4>Habilidades:</h4>
            <span>
              <img
                src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/.NET-512BD4.svg?style=for-the-badge&logo=dotnet&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white"
                alt=""
              />
            </span>
            <h4>Plataformas Usadas:</h4>
            <span>
              <img
                src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white"
                alt=""
              />
            </span>
          </div>
        </div>
      </SectionContent>
    </StyledSection>
  );
};

export default AboutMe;
