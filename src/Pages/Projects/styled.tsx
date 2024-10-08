import styled from "styled-components";

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
  /* @media screen and (max-height: 460px) {
    height: 70%;
  } */
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  
  h3 {
    margin: 10px 0px 20px 0px;
  }
  h3, p {
    margin-left: 60px;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 30px;
  }
`;
export const StyledCard = styled.article`
  background-color: #1b1b1b52;
  border-radius: 40px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cardText{
    height: 100%;
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    
    div{
      height: auto;
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      
      h3{
        margin-bottom: 10px;
      }

      @media screen and (max-width: 1024px) {
        width: 90%;
      }
    }

    @media screen and (max-width: 540px) {
      width: 90%;
    }
  }
  img{
    width: 400px;

    @media screen and (max-width: 1280px) {
      width: 350px;
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
export const TechnologiesContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  gap: 10px;
  position: relative;
  margin: 20px 0px;

  img{
    cursor: pointer;
    width: 41px;
  }
  i{
    color: ${(props) => props.theme.colors.mainRed};
    font-size: 38px;

    @media screen and (max-width: 540px) {
      font-size: 30px;
    }
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
`;

export const Line = styled.div`
  width: 100vw;
  height: 4px;
  background-color: ${(props) => props.theme.colors.mainRed};
  border-radius: 10px;
`;
