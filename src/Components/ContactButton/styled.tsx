import styled from "styled-components"

export const StyledButton = styled.button<{ $width: string, $childrenValue?: string, $hidden?: boolean }>`
background-color: ${props => props.theme.colors.mainRed};
padding: 10px;
width: ${props => props.$width.toString()};
height: auto;
border: none;
border-radius: 3px;
cursor: pointer;
font-size: 18px;
position: relative;
overflow: hidden;
font-weight: bold;
display: ${props => props.$hidden === true ? "none" : "initial"};

&:hover {
  background-color: ${props => props.theme.colors.darkRed};
}

&:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 100%;
  background-color: ${props => props.theme.colors.footer};
  top: 0;
  bottom: auto;
  left: -10px;
  transform: skewX(-15deg);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

&:hover:after, &:focus:after {
  width: 110%;
  content: "${props => props.$childrenValue}";
  color: ${props => props.theme.colors.grayTwo};
  font-weight: bolder;
  outline: none;
}
`