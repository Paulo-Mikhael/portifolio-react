import styled from "styled-components";

export const StyledSection = styled.section`
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
`
export const VideoTextContainer = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: space-between;
`
export const VideoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  video{
    width: 600px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid ${props => props.theme.colors.mainRed};
  }
`
export const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ProjectDescription = styled.div`
  width: 100%;
  height: 50%;
  
  h3, h4{
    width: 100%;
    text-align: center;
  }
  h3{
    height: 20%;
    font-size: 23px;
  }
  h4{
    height: 80%;
    font-size: 19px;
  }
`
export const TecnologiesContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: right;
    gap: 10px;
    flex-direction: column;

    h5{
      font-size: 23px;
    }
    i{
      font-size: 30px;
      margin-right: 5px;
    }
  }
`
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img{
    width: 180px;
    cursor: pointer;
  }
  span{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      cursor: pointer;
      animation-duration: .5s;
      border: 3px solid ${props => props.theme.colors.mainRed};
      background-color: transparent;
      
      &:nth-child(2){
        background-color: ${props => props.theme.colors.mainRed};
        width: 10px;
        height: 10px;
      }
    }
  }
`
export const ProjectsCarrousel = styled.div`
  width: 90%;
  height: 100px;
  margin-bottom: 10px;
`