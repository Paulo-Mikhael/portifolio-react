import { IProjectCard } from "../../Interfaces";
import { ProjectsData } from "../../Data";
import {
  StyledContainer,
  StyledDiv,
  StyledCard,
  CardContainer,
  TechnologiesContainer
} from "./styled";

export default function Projects() {
  const projectsList: IProjectCard[] = ProjectsData

  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <img src="Images/frame.png" alt="Uma moldura com bordas vermelhas escrito 'projetos' dentro" />
        </StyledDiv>
        {projectsList.map(project => (
          <StyledCard $toRight={project.toRight}>
            <CardContainer>
              <div className="cardText">
                <div>
                  <p className="letter-spacing">
                    {project.type}
                  </p>
                  <h3>
                    {project.name}
                  </h3>
                  <p>
                    {project.description}
                  </p>
                </div>
              </div>
              <a href={project.linkToWeb} target="_blank">
                <img src={project.projectImageUrl} alt={project.projectImageAlt} title={project.projectImageTitle} />
              </a>
            </CardContainer>
            <TechnologiesContainer>
              <a href={project.linkToWeb} target="_blank">
                <img
                  src="Icons/arrow.png"
                  alt="Imagem de seta que leva para uma prévia do projeto"
                  title="Ver prévia do projeto"
                />
              </a>
              {project.deviconTechnologiesClasses.map(technologieClass => (
                <i className={technologieClass}></i>
              ))}
              <a href={project.linkToGithubReadme} className="github-link" target="_blank">
                <i className="devicon-github-original"></i>
              </a>
            </TechnologiesContainer>
          </StyledCard>
        ))}
      </StyledContainer>
    </section>
  );
}