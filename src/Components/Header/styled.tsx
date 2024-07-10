import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: absolute;
  z-index: 2;

  #header-image {
    cursor: pointer;
    width: 65px;
    height: 70px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export const PerfilMessage = styled.div`
  height: 100%;
  
  .line-one {
    display: flex;
    align-items: center;
    justify-content: left;

    img {
      margin-right: 10px;
      width: 45px;
      cursor: pointer;
    }
    h2 {
      cursor: pointer;
      font-size: 22px;
    }
  }

  .line-two {
    width: 300px;
  }
`;

export const HeaderBar = styled.nav`
  width: 630px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
  
  a {
    text-decoration: none;
    transition: all 0.2s;
    overflow: hidden;
    position: relative;
    font-size: 23px;

    &.selected {
      color: ${props => props.theme.colors.mainRed};
      font-weight: bold;
      font-size: 24px;

      &:hover {
        color: white;
      }
      &:after{
        background-color: white;
      }
    }

    &:hover {
      color: ${props => props.theme.colors.mainRed};
    }

    &:active {
      color: white;
    }

    &:after {
      position: absolute;
      transition: 0.3s;
      content: '';
      left: 0;
      top: -3px;
      width: 0%;
      height: 2px;
      background: ${props => props.theme.colors.mainRed};
      border-radius: 5px;
      top: calc(110%);
    }

    &:hover:after {
      width: 100%;
    }

    &:active:after {
      background-color: white;
    }
  }
`;
