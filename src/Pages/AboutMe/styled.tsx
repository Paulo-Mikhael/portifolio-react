import styled from "styled-components"

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1280px){
    min-height: 100vh;
    height: auto;
  }
`
export const SectionContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 42px;
  gap: 42px;
  
  .about-me-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    
    #about-me-text {
      font-size: 18px;
    }
    .abilities {
      h3 {
        font-size: 18px;
        font-weight: normal;
      }

      ul {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        margin: 10px 0px 20px 0px;

        li {
          list-style: none;
        }
      }
    }
  }
  .perfil-photo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 400px;
      border-radius: 6px;
    }
  }
  .about-me-subtitles {
    font-weight: bold;
    letter-spacing: 4px;
  }

  @media screen and (max-width: 1280px){
    height: auto;
    align-items: start;
    flex-direction: column;

    .perfil-photo {
      display: none;
    }

    .about-me-subtitles {
      text-align: center;
    }
  }
`
export const Line = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${props => props.theme.colors.mainRed};
  border-radius: 10px;
`