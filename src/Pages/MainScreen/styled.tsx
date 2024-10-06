import styled from "styled-components";

export const MainBackground = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url('Images/portifolio-background.png');
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: left end;
  animation: anima 7s alternate infinite;
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const MainContent = styled.div`
  z-index: 1;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  div {
    width: 60%;

    h1 {
      margin-bottom: 10px;
      font-size: 50px;
    }
    p{
      font-size: 20px;
    }

    @media screen and (max-width: 1280px){
      width: 90%;
    }
    @media screen and (max-width: 1024px) {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

export const Destaque = styled.b`
  color: ${props => props.theme.colors.mainRed};
`;

export const Blank = styled.div`
  height: 80px;
`;