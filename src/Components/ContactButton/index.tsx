import { StyledButton } from "./styled.tsx";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  link?: string | -1,
  autoFocus?: boolean,
  onClick?: () => void,
  hidden?: boolean 
}

const ContactButton = ({ children, type = "button", width = "155px", autoFocus = true, onClick, hidden }: Props) => {
  return (
    <StyledButton
        autoFocus={autoFocus}
        type={type}
        $hidden={hidden}
        $width={width}
        $childrenValue={ children?.toString() } 
        onClick={() => {
          onClick && onClick();
        }}
      >
      { children }
    </StyledButton>
  );
}

export default ContactButton;