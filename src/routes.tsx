import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './Pages/MainScreen';
import { ThemeProvider } from 'styled-components';
import Styles from './Styles';
import vars from './Styles/VarsStyles';
import Header from './Components/Header';
import AboutMe from './Pages/AboutMe';
import NotFound from './Pages/NotFound';
import Contacts from './Pages/Contacts';

const AppRouter = () => {
  return (
    <ThemeProvider theme={vars}>
      <Styles />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;