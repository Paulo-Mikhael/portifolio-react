import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button<{ width: string, childrenValue?: string }>`
  background-color: ${props => props.theme.colors.mainRed};
  padding: 10px;
  width: ${props => props.width.toString()};
  height: 45px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  font-weight: bold;

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
    content: "${props => props.childrenValue}";
    color: ${props => props.theme.colors.grayTwo};
    font-weight: bolder;
    outline: none;
  }
`

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  link?: string
}

const ContactButton = ({ children, type = "button", width = "155px", link = '/contacts' }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledButton type={type} width={width} childrenValue={ children?.toString() } onClick={() => { navigate(link) }}>
      { children }
    </StyledButton>
  );
}

export default ContactButton;