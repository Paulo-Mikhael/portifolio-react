import { createGlobalStyle } from "styled-components";

const AnimationStyles = createGlobalStyle`
  @keyframes anima{
    0%{
        background-position-x: left;
    }
    100%{
        background-position-x: center;
    }
  }
`

export default AnimationStyles;