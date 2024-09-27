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
    .abilities {
      span {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        margin: 10px 0px 20px 0px;
      }
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
    display: flex;
    align-items: center;

    img {
      min-width: 110%;
      border-radius: 6px;
    }
  }
`
export const Line = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${props => props.theme.colors.mainRed};
  border-radius: 10px;
`