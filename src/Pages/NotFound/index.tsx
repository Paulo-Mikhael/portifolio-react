import styled from "styled-components";
import ContactButton from "../../Components/ContactButton";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  flex-direction: column;
  
  h1{
    color: ${props => props.theme.colors.mainRed};
  }
`
const StyledImg =  styled.img`
  width: 400px;
`

const NotFound = () => {
  return (
    <StyledSection>
      <StyledImg src="Images/404-error.png" alt="" />
      <ContactButton link={-1}>
        Voltar
      </ContactButton>
    </StyledSection>
  );
}

export default NotFound;