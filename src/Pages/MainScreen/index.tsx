import styled from "styled-components";
import ContactButton from "../../Components/ContactButton";
import {
  MainBackground,
  Filter,
  MainContent,
  Destaque,
  Blank
} from "./styled.tsx";

const StyledH1 = styled.h1`
  font-size: 50px;
`
const StyledP = styled.p`
  font-size: 20px;
`

const MainScreen = () => {
  return (
    <MainBackground>
      <Filter />
      <MainContent>
        <Blank />
        <div>
          <StyledH1>
            Bem Vindo! Junte-se a mim e Torne <Destaque>Seu Projeto Realidade</Destaque>
          </StyledH1>
          <StyledP>
            Faça websites íncriveis com a ajuda de meus serviços! Sou um programador Front-End com conhecimentos em UI/UX design, pronto para trabalhar!
          </StyledP>
        </div>
        <ContactButton>
          Contate me
        </ContactButton>
      </MainContent>
    </MainBackground>
  );
}

export default MainScreen;