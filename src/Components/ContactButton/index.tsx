import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.mainRed};
  padding: 10px;
  width: 155px;
  height: 45px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  overflow: hidden;

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
    content: 'Contate-me';
    color: ${props => props.theme.colors.grayTwo};
    font-weight: bolder;
    outline: none;
  }
`

interface Props {
  children: React.ReactNode;
}

const ContactButton = ({ children }: Props) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default ContactButton;