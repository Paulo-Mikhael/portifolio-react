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
    font-size: 45px;
  }
  h2{
    font-size: 40px;
    font-weight: bold;
  }
  h3{
    font-size: 36px;
    font-weight: bold;
  }
  p, .text-weight, h4{
    font-size: 18px;
    font-weight: 300;
  }
  .letter-spacing{
    letter-spacing: 5px;
    font-size: 19px;
  }
`

export default GlobalStyles;