import ContactButton from '../../Components/ContactButton/index.tsx';
import {
  ArrowsContainer,
  ProjectDescription,
  ProjectsCarrousel,
  StyledSection,
  TecnologiesContainer,
  TextContainer,
  VideoContainer,
  VideoTextContainer
} from './styled.tsx';

const Projects = () => {
  return (
    <StyledSection>
      <VideoTextContainer>
        <VideoContainer>
          <video typeof='video/mp4'>
            <source src='Videos/alura-studies-video.mp4' />
            Seu navegador não é compatível com este vídeo
          </video>
        </VideoContainer>
        <TextContainer>
          <ProjectDescription>
            <h3>
              Alura Studies
            </h3>
            <h4>
              A Alura Studies é uma aplicação web onde você pode definir uma tarefa e um tempo, para depois selecionar essa tarefa e começar uma
              contagem regressiva a partir do tempo da mesma. Eu fiz esse projeto ao longo do curso de React na Alura, neste projeto utilizei
              componentes de função e de classe, props e hooks, que são conhecimentos essenciais para trabalhar com react.
            </h4>
          </ProjectDescription>
          <TecnologiesContainer>
            <span>
              <h5>
                Tecnologias
              </h5>
              <div>
                <i className="devicon-react-original"></i>
                <i className="devicon-typescript-plain"></i>
              </div>
            </span>
            <ContactButton>
              Contate me
            </ContactButton>
          </TecnologiesContainer>
          <ArrowsContainer>
            <img
              src="Images/arrow-left.png"
              alt="left-arrow"
              onMouseOver={(evt) => {
                evt.currentTarget.src = "Images/arrow-left-hover.png";
              }}
              onMouseLeave={(evt) => {
                evt.currentTarget.src = "Images/arrow-left.png";
              }}
            />
            <span>
              <div></div>
              <div></div>
              <div></div>
            </span>
            <img
              src="Images/arrow-right.png"
              alt="right-arrow"
              onMouseOver={(evt) => {
                evt.currentTarget.src = "Images/arrow-right-hover.png";
              }}
              onMouseLeave={(evt) => {
                evt.currentTarget.src = "Images/arrow-right.png";
              }}
            />
          </ArrowsContainer>
        </TextContainer>
      </VideoTextContainer>
      <ProjectsCarrousel>
        <span>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </span>
      </ProjectsCarrousel>
    </StyledSection>
  );
}

export default Projects;