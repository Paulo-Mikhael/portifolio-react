import { Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
  StyledHeader,
  HeaderContent,
  PerfilMessage,
  HeaderBar
} from "./styled.tsx";

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
  const [selectedRoute, setSelectedRoute] = useState([...Routes]);
  const location = useLocation();

  function changeSelected(targetName: string) {
    setSelectedRoute(previous => previous.map(item => ({
      ...item, selected: item.name === targetName ? true : false
    })));
  }

  useEffect(() => {
    let locationUrl = location.pathname.toLowerCase();

    if (locationUrl.endsWith('/') && locationUrl.length > 1) {
      locationUrl = locationUrl.slice(0, -1);
    }

    setSelectedRoute(previous => previous.map(item => ({
      ...item, selected: locationUrl.endsWith(item.path.toLowerCase()) ? true : false
    })));
  }, [location.pathname]);

  return (
    <>
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
            {selectedRoute.map((item, index) => (
              <h2 key={index}>
                <Link
                  to={item.path} className={item.selected === true ? 'selected' : 'text-weight'}
                  onClick={() => {
                    changeSelected(item.name);
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
      <Outlet />
    </>
  );
}

export default Header;