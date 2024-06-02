import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};

  .about-me-message {
    width: 75%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    
    #about-me-text {
      font-size: 20px;
    }
  }
`
const SectionContent = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .perfil-photo {
    width: 20%;
    height: 80%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
const Line = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${props => props.theme.colors.mainRed};
  border-radius: 10px;
`

const AboutMe = () => {
  return (
    <StyledSection>
      <SectionContent>
        <div className="perfil-photo">
            <img src="Images/perfil-photo.svg" alt="foto de perfil" />
        </div>
        <div className="about-me-message">
          <p className="letter-spacing" id="about-me-letter-spacing">
              Sobre mim
          </p>
          <h3 id="about-me-title">
              Olá! Me chamo Paulo Miguel
          </h3>
          <Line />
          <h4 id="about-me-text">
            Olá, meu nome é Paulo Miguel Bentes do Nascimento, tenho 17 anos, e, durante a escola, sempre gostei de apresentar 
            trabalhos em slides. Essa atividade exige lógica, comunicação e criatividade para resolver problemas, habilidades que 
            valorizo e aprimoro. Sempre me esforço para criar interfaces elogiadas e que gerem expectativa para meus próximos projetos. 
            Por isso, me vejo exclusivamente na profissão de programador e sigo evoluindo como desenvolvedor full-stack.
            <br/><br/>
            Acredito que saber escrever código não é tudo. Faço cursos de Design UI/UX porque acho fundamental que a interface do 
            usuário seja intuitiva e fácil de usar, proporcionando uma excelente experiência.<br/>
            Além disso, sou capaz de criar Front-Ends simples, utilizando HTML, CSS, JS ou WordPress com Elementor, bem como 
            desenvolver interfaces mais complexas, como administrativas, usando Angular e React. Posso integrar esses Front-Ends com 
            bancos de dados, utilizando C# e suas bibliotecas e frameworks para construir o Back-End.                    
          </h4>
        </div>
      </SectionContent>
    </StyledSection>
  );
}

export default AboutMe;