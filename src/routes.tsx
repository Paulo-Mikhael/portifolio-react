import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './Pages/MainScreen';
import { ThemeProvider } from 'styled-components';
import Styles from './Styles';
import vars from './Styles/VarsStyles';

const AppRouter = () => {
  return (
    <ThemeProvider theme={vars}>
      <Styles />
      <Router>
        <Routes>
          <Route path='/' element={<MainScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;