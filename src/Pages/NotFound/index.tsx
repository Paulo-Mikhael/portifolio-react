import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  
  h1{
    color: ${props => props.theme.colors.mainRed};
  }
`

const NotFound = () => {
  return (
    <StyledSection>
      <h1>
        Página não encontrada
      </h1>
    </StyledSection>
  );
}

export default NotFound;