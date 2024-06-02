import styled from "styled-components";
import ContactButton from "../../Components/ContactButton";
import Header from "../../Components/Header";

const MainBackground = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url('Images/portifolio-background.png');
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: left end;
  animation: anima 7s alternate infinite;
`
const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

const MainContent = styled.div`
  z-index: 1;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  div{
    width: 60%;

    h1{
      margin-bottom: 10px;
    }
  }
`
const Destaque = styled.b`
  color: ${props => props.theme.colors.mainRed};
`
const Blank = styled.div`
  height: 80px;
`

const MainScreen = () => {
  return (
    <MainBackground>
      <Filter />
      <MainContent>
        <Blank />
        <div>
          <h1>
            Bem Vindo! Junte-se a mim e Torne <Destaque>Seu Projeto Realidade</Destaque>
          </h1>
          <p>
            Faça websites íncriveis com a ajuda de meus serviços! Sou um programador Front-End com conhecimentos em UI/UX design, pronto para trabalhar!
          </p>
        </div>
        <ContactButton>
          Contate me
        </ContactButton>
      </MainContent>
    </MainBackground>
  );
}

export default MainScreen;