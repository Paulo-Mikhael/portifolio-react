import ContactButton from "../../Components/ContactButton";
import { Link } from "react-router-dom";
import {
  ContactContent,
  FormContainer,
  ImageContainer,
  StyledH2,
  StyledSection,
  ContactOptions
} from "./styled.tsx";
import { useEffect, useState } from "react"

const Contacts = () => {
  const [emailSended, setEmailSended] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const contacts = [
    {
      name: 'Email',
      classes: 'fa-regular fa-envelope contact-selected',
      path: ''
    },
    {
      name: 'Whatsapp',
      classes: 'fa-brands fa-whatsapp',
      path: `https://wa.me/5592992813253?text=${greeting()} Gostaria de falar com você sobre...`
    },
    {
      name: 'Instagram',
      classes: 'fa-brands fa-instagram',
      path: 'https://www.instagram.com/pa__miguel?igsh=MWxoYzdqNGluZWcyaA%3D%3D'
    },
    {
      name: 'Linkedin',
      classes: 'fa-brands fa-linkedin-in',
      path: 'https://www.linkedin.com/in/paulo-miguel-4b706022b/'
    },
    {
      name: 'Phone',
      classes: 'fa-solid fa-phone',
      path: `https://wa.me/5592992813253?text=${greeting()} Gostaria de falar com você sobre...`
    },
    {
      name: 'Github',
      classes: 'fa-brands fa-github',
      path: 'https://github.com/Paulo-Mikhael'
    },
  ]
  function copyText(texto: string) {
    const elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = texto;

    document.body.appendChild(elementoTemporario);

    elementoTemporario.select();
    elementoTemporario.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(elementoTemporario);

    alert(`'${texto}'` + ' copiado para a área de transferência!');
  }
  function greeting(): string {
    var time = new Date();
    var hour = time.getHours();

    if (hour > 20) {
      return "Boa noite!"
    }
    else if (hour > 12) {
      return "Boa tarde!"
    }
    else {
      return "Bom dia!"
    }
  }

  return (
    <StyledSection>
      <ContactContent>
        <ImageContainer>
          <img src="Images/mail-image-black.gif" alt="imagem de um telefone vibrando e um símbolo de email flutuando sobre ele" />
        </ImageContainer>
        <FormContainer>
          <div id="form-content">
            <form
              method="POST"
              action="https://formsubmit.co/paulomiguel11111971@gmail.com"
              encType="multipart/form-data"
            >
              <h1 id="form-title">
                Me mande uma mensagem por
                <b onClick={() => copyText('paulomiguel11111971@gmail.com')}>
                  <abbr title="Copiar 'paulomiguel11111971@gmail.com' para a área de transferência">Email</abbr>
                </b>!
              </h1>
              <input
                onChange={(evt) => {
                  setUserName(evt.target.value);
                }}
                value={userName}
                required autoFocus={true} tabIndex={1} type="text" name="name" id="text-input" placeholder="Seu nome"
              />
              <input
                onChange={(evt) => {
                  setUserEmail(evt.target.value);
                }}
                value={userEmail}
                required tabIndex={2} type="email" name="email" id="email-input" placeholder="Seu email"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://portifolio-react-three.vercel.app" />
              <textarea
                onChange={(evt) => {
                  setUserMessage(evt.target.value);
                }}
                value={userMessage}
                required tabIndex={3} name="message" id="message-box" placeholder="Escreva uma mensagem"
              >
              </textarea>
              <ContactOptions>
                {contacts.map((contact, index) => (
                  <Link
                    target="_blank"
                    to={contact.path}
                    key={index}
                  >
                    <i className={contact.classes} />
                  </Link>
                ))}
              </ContactOptions>
              <ContactButton
                onClick={() => {
                  if (userName === "") {
                    alert("Preencha o campo de nome");
                    return;
                  };
                  if (userEmail === "") {
                    alert("Preencha o campo de email");
                    return;
                  };
                  if (userMessage === "") {
                    alert("Preencha o campo de messagem");
                    return;
                  };

                  alert("Mensagem enviada com sucesso. Espero lhe ver em breve!");
                  setEmailSended(true);
                }}
                hidden={emailSended === true}
                type={"submit"}
                width="270px"
                autoFocus={false}
              >
                Mandar Mensagem
              </ContactButton>
            </form>
          </div>
        </FormContainer>
      </ContactContent>
      <div id="contact-message">
        <StyledH2>
          Escreva uma mensagem para <b onClick={() => copyText("paulomiguel11111971@gmail.com")}><abbr title="Copiar 'paulomiguel11111971@gmail.com' para a área de transferência">paulomiguel11111971@gmail.com</abbr></b>
        </StyledH2>
      </div>
    </StyledSection>
  );
}

export default Contacts;