import styled from "styled-components"

export const StyledSection = styled.section`
  .about-me-message {
    width: 75%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    
    #about-me-text {
      font-size: 18px;
    }
  }
`
export const SectionContent = styled.div`
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
export const Line = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${props => props.theme.colors.mainRed};
  border-radius: 10px;
`