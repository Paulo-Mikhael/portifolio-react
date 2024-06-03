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

const Contacts = () => {

  const contacts = [
    {
      name: 'Email',
      classes: 'fa-regular fa-envelope contact-selected',
      path: ''
    },
    {
      name: 'Whatsapp',
      classes: 'fa-brands fa-whatsapp',
      path: 'https://wa.me/5592992813253?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20oferta...'
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
      path: 'https://wa.me/5592992813253?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20oferta...'
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

  return (
    <StyledSection>
      <ContactContent>
        <ImageContainer>
          <img src="Images/mail-image-black.gif" alt="imagem de um telefone vibrando e um símbolo de email flutuando sobre ele" />
        </ImageContainer>
        <FormContainer>
          <div id="form-content">
            <form method="POST" action="https://formsubmit.co/paulomiguel11111971@gmail.com" encType="multipart/form-data">
              <h1 id="form-title">
                Me mande uma mensagem por 
                <a href="" onClick={() => copyText('afsdasd')}>
                  <abbr title="Copy 'paulomiguel11111971@gmail.com' to clipboard">Email</abbr>
                </a>!
              </h1>
              <input required autoFocus={true} tabIndex={1} type="text" name="name" id="text-input" placeholder="Seu nome" />
              <input required tabIndex={2} type="email" name="email" id="email-input" placeholder="Seu email" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="" />
              <textarea required tabIndex={3} name="message" id="message-box" placeholder="Escreva uma mensagem"></textarea>
              <ContactOptions>
                {contacts.map(contact => (
                  <Link target="_blank" to={contact.path}>
                    <i className={contact.classes} />
                  </Link>
                ))}
              </ContactOptions>
              <ContactButton type="submit" width="270px" link="">
                Mandar mensagem
              </ContactButton>
            </form>
          </div>
        </FormContainer>
      </ContactContent>
      <div id="contact-message">
        <StyledH2>
          Escreva uma mensagem para <a href="">paulomiguel11111971@gmail.com</a>
        </StyledH2>
      </div>
    </StyledSection>
  );
}

export default Contacts;