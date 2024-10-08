import { useNavigate } from "react-router-dom";
import ContactButton from "../../Components/ContactButton";
import {
  MainBackground,
  Filter,
  MainContent,
  Destaque,
  Blank,
} from "./styled.tsx";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <MainBackground>
      <Filter />
      <MainContent>
        <Blank />
        <div>
          <h1>
            Bem Vindo! Junte-se a mim e Torne{" "}
            <Destaque>Seu Projeto Realidade</Destaque>
          </h1>
          <p>
            Faça websites íncriveis com a ajuda de meus serviços! Sou um
            programador Front-End com conhecimentos em UI/UX design, pronto para
            trabalhar!
          </p>
        </div>
        <ContactButton
          onClick={() => {
            navigate("/contacts");
          }}
        >
          Contate me
        </ContactButton>
      </MainContent>
    </MainBackground>
  );
};

export default MainScreen;
