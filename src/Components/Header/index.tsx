import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #header-image {
    cursor: pointer;
    width: 65px;
    height: 70px;
  }
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

    &[href=""], &[href="/"] {
      color: ${props => props.theme.colors.mainRed};
      font-weight: bold;

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
    path: '/'
  },
  {
    name: 'Sobre mim',
    path: '/aboutme'
  },
  {
    name: 'Projetos',
    path: '/projects'
  },
  {
    name: 'Contatos',
    path: '/contacts'
  }
]

const Header = () => {
  return (
    <StyledHeader>
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
        {Routes.map(item => (
          <h2 className="text-weight">
            <a href={item.path}>
              {item.name}
            </a>
          </h2>
        ))}
        <abbr title="Mudar o idioma para português">
          <img src="Images/brazil.png" alt="brazil flag button to change language" id="header-image" />
        </abbr>
      </HeaderBar>
    </StyledHeader>
  );
}

export default Header;