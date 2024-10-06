import styled from "styled-components"

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`
export const ContactContent = styled.div`
  height: 80%;
  width: 85%;
  display: flex;
  justify-content: space-between;
`
export const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 1280px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`
export const FormContainer = styled.span`
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
          text-align: center;

          abbr{
            color: inherit;
            text-decoration: none;
          }
          a{
            text-decoration: none;
            color: #9b2626;
            margin-left: 7px;
            transition: all .2s;

            &:hover{
              color: ${props => props.theme.colors.grayTwo};
            }
          }

          @media screen and (max-width: 1280px) {
            font-size: 20px;
            margin-bottom: 10px;
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
          transition: all .3s;

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
export const ContactOptions = styled.div`
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

    @media screen and (max-width: 1280px) {
      font-size: 26px;

      &.fa-phone {
        font-size: 21px;
      }
    }
  }
`
export const StyledH2 = styled.h2`
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

  @media screen and (max-width: 1280px) {
    display: none;
  }
`