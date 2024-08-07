import { useNavigate } from 'react-router-dom';
import { StyledButton } from "./styled.tsx";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  link?: string | -1,
  autoFocus?: boolean
}

const ContactButton = ({ children, type = "button", width = "155px", link = "/contacts", autoFocus = true }: Props) => {
  const navigate = useNavigate();
  function Navigation(param: string | -1){
    if (param === -1){
      navigate(-1);
    }else{
      navigate(param);
    }
  };

  return (
    <StyledButton
        autoFocus={autoFocus}
        type={type}
        $width={width}
        $childrenValue={ children?.toString() } 
        onClick={() => {
          Navigation(link);
        }}
      >
      { children }
    </StyledButton>
  );
}

export default ContactButton;