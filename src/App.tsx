import { ThemeProvider } from 'styled-components'
import MainScreen from './Pages/MainScreen'
import vars from './Styles/VarsStyles/index.tsx';
import Styles from './Styles/index.tsx'

function App() {
  return (
    <ThemeProvider theme={vars}>
      <Styles />
      <MainScreen />
    </ThemeProvider>
  )
}

export default App
