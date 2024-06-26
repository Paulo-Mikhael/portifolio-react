import { useNavigate } from 'react-router-dom';
import { StyledButton } from "./styled.tsx";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  link?: string,
  autoFocus?: boolean
}

const ContactButton = ({ children, type = "button", width = "155px", link = "/contacts", autoFocus = true }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledButton autoFocus={autoFocus} type={type} width={width} childrenValue={ children?.toString() } onClick={() => { navigate(link) }}>
      { children }
    </StyledButton>
  );
}

export default ContactButton;