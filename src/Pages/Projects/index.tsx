import styled from "styled-components";

const StyledContainer = styled.div`
  width: 95%;
  height: 80%;
  overflow: hidden scroll;
  position: relative;

  &::-webkit-scrollbar{
    background-color: transparent;
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 320px;
  }
  h2{
    position: absolute;
  }
`
const StyledCard = styled.article`
  background-color: #051119;
  border-radius: 40px;
  width: 1074px;
  height: 638px;
  margin-top: 50px;
  display: flex;
  align-items: end;
  justify-content: center;
`
const CardContainer = styled.div`
  width: 90%;
  height: 80%;
  background-color: red;
  margin-bottom: 40px;
  display: flex;

  .cardText{

  }
`

export default function Projects() {
  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <img src="Images/frame.png" alt="Uma moldura com bordas vermelhas escrito 'projetos' dentro" />
        </StyledDiv>
        <StyledCard>
          <CardContainer>
            <div className="cardText">
              <p className="letter-spacing">
                Blog
              </p>
              <h3>
                XWriter
              </h3>
            </div>
          </CardContainer>
        </StyledCard>
      </StyledContainer>
    </section>
  );
}