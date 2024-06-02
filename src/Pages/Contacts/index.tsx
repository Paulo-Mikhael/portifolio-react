import styled from "styled-components";
import ContactButton from "../../Components/ContactButton";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`
const ContactContent = styled.div`
  height: 80%;
  width: 85%;
  display: flex;
  justify-content: space-between;
`
const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 450px;
    height: 450px;
  }
`
const FormContainer = styled.span`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  
  div{
    width: 90%;
    display: flex;
    align-items: center;

    &#form-content{
      height: 370px;
      padding-right: 20px;
      
      form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        h1{
          font-size: 26px;
          margin-bottom: 20px;

          abbr{
            color: inherit;
            text-decoration: none;
          }
          a{
            text-decoration: none;
            color: #9b2626;
          }
        }
        input, textarea{
          padding: 10px;
          color: black;
          border: 2px solid white;
          width: 96%;
          border-radius: 5px;
          position: relative;
          z-index: 1;

          &:focus{
            outline: none;
            border: 2px solid #9b2626;
          }
        }
        textarea{
          resize: none;
        }
        button[type="submit"]{
            font-size: 22px;
        }
      }
    }
  }
`
const ContactOptions = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 20px;

  a{
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
  }
  i{
    font-size: 30px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;

    &:hover .contact-bubble{
     width: 150px;
    }
    &.fa-phone{
      font-size: 25px;
    }
    &.fa-whatsapp:hover, &.fa-whatsapp.contact-selected{
        color: #00FF38 !important;
    }
    &.fa-linkedin-in:hover, &.fa-linkedin-in.contact-selected{
        color: #0277b5 !important;
    }
    &.fa-instagram:hover, &.fa-instagram.contact-selected{
        color: transparent !important;
        background-image: linear-gradient(to right, #f07421, #ed342b, #d1217f);
        -webkit-background-clip: text;
    }
    &.fa-envelope:hover, &.fa-envelope.contact-selected{
        color: #9b2626 !important;
    }
    &.fa-github:hover, &.fa-github.contact-selected{
        color: ${props => props.theme.colors.grayTwo} !important;
    }
    &.fa-phone:hover, &.fa-phone.contact-selected{
        color: #ff0 !important;
    }
    & .contact-bubble{
        transition: all .2s;
        position: absolute;
        border-radius: 50%;
        width: 0px;
        height: 150px;
        background-color: #00FF38;
        z-index: 1;
        top: -165px;
    }
  }
`
const StyledH2 = styled.h2`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  margin-bottom: 10px;
  gap: 7px;

  a{
    color: #9b2626;
    text-decoration: none;
    transition: all .2s;
    cursor: pointer;

    &:hover{
      color: ${props => props.theme.colors.grayTwo};
    }
  }
`

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
      path: ''
    },
    {
      name: 'Instagram',
      classes: 'fa-brands fa-instagram',
      path: ''
    },
    {
      name: 'Linkedin',
      classes: 'fa-brands fa-linkedin-in',
      path: ''
    },
    {
      name: 'Phone',
      classes: 'fa-solid fa-phone',
      path: ''
    },
    {
      name: 'Github',
      classes: 'fa-brands fa-github',
      path: ''
    },
  ]

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
                Me mande uma mensagem por <a href=""><abbr title="Copy 'paulomiguel11111971@gmail.com' to clipboard">Email</abbr></a>!
              </h1>
              <input required autoFocus={true} tabIndex={1} type="text" name="name" id="text-input" placeholder="Seu nome" />
              <input required tabIndex={2} type="email" name="email" id="email-input" placeholder="Seu email" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="" />
              <textarea required tabIndex={3} name="message" id="message-box" placeholder="Escreva uma mensagem"></textarea>
              <ContactOptions>
                {contacts.map(contact => (
                  <Link to={contact.path}>
                    <i className={contact.classes} />
                  </Link>
                ))}
              </ContactOptions>
              <ContactButton type="submit" width="270px">
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