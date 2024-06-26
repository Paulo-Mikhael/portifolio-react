import { 
  Line,
  SectionContent,
  StyledSection
} from "./styled.tsx";

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
            Por isso, me vejo exclusivamente na profissão de programador e sigo evoluindo como desenvolvedor front-end
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