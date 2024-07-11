import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 95%;
  height: 80%;
  overflow: hidden scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar{
    background-color: transparent;
  }
`
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 320px;
  }
  h2{
    position: absolute;
  }
`
export const StyledCard = styled.article<{ $toRight: boolean }>`
  transform: ${props => props.$toRight === true ? 'translateX(100px)' : ''};
  background-color: #051119;
  border-radius: 40px;
  width: 1074px;
  height: 508px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`
export const CardContainer = styled.div`
  width: 90%;
  height: 80%;
  margin: 30px 0px;
  display: flex;

  .cardText{
    height: 100%;
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    
    div{
      height: auto;
      width: 19rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      
      h3{
        margin-bottom: 10px;
      }
    }
  }
  img{
    width: 384px;
    height: 300px;
  }
`
export const TechnologiesContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  gap: 10px;
  position: relative;

  img, i{
    margin-bottom: 10px;
  }
  img{
    cursor: pointer;
    width: 41px;
  }
  i{
    color: ${props => props.theme.colors.mainRed};
    font-size: 41px;
  }
  a{
    text-decoration: none;
  }
  .github-link{
    position: absolute;
    right: 0;
    
    i{
      cursor: help;
    }
  }
`