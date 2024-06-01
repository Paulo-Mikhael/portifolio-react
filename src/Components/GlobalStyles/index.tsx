import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  *{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
  }
  h1{
    font-size: 49px;
  }
  h2{
    font-size: 40px;
    font-weight: bold;
  }
  p, .text-weight{
    font-size: 20px;
    font-weight: 300;
  }
  .letter-spacing{
    letter-spacing: 5px;
    font-size: 19px;
  }
  .line{
    width: 100px;
    height: 5px;
    background-color: var(--red);
    border-radius: 10px;
  }
`

export default GlobalStyles;