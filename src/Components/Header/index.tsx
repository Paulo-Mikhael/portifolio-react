import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  position: absolute;
  z-index: 2;

  #header-image {
    cursor: pointer;
    width: 65px;
    height: 70px;
  }
`
const HeaderContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PerfilMessage = styled.div`
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
`
const HeaderBar = styled.div`
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
      font-size: 26px;

      &:hover {
        color: white;
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
      bottom: auto;
      top: -3px;
      width: 0%;
      height: 2px;
      background: ${props => props.theme.colors.mainRed};
      border-radius: 5px;
    }
    &:hover:after {
      width: 100%;
    }
    &:active:after {
      top: calc(100% - 3px);
      background-color: white;
    }
  }
`
const Routes = [
  {
    name: 'Home',
    path: '/',
    selected: true
  },
  {
    name: 'Sobre mim',
    path: '/aboutme',
    selected: false
  },
  {
    name: 'Projetos',
    path: '/projects',
    selected: false
  },
  {
    name: 'Contatos',
    path: '/contacts',
    selected: false
  }
]

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <PerfilMessage>
          <div className="line-one">
            <img src="Icons/code-icon-white.png" alt="code icon" />
            <h2>
              Paulo Miguel
            </h2>
          </div>
          <div className="line-two">
            <p className="letter-spacing">
              Web Developer
            </p>
          </div>
        </PerfilMessage>
        <HeaderBar>
          {Routes.map((item, index) => (
            <h2 key={index}>
              <Link
                to={item.path} className={item.selected === true ? 'selected' : 'text-weight'} 
                onClick={() => {
                  item.selected = true
                }}
              >
                {item.name}
              </Link>
            </h2>
          ))}
          <abbr title="Mudar o idioma para português">
            <img src="Images/brazil.png" alt="brazil flag button to change language" id="header-image" />
          </abbr>
        </HeaderBar>
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;