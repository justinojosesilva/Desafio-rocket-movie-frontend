import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    margin: 4rem 12.3rem;

    a{
      display: flex;
      align-items: center;
      gap: .25rem;
      color: ${({ theme }) => theme.COLORS.ROSE};

      font-size: 1.6rem;
      margin-bottom: 2.4rem;

    }

    div {
      display: flex;
      align-items: center;
      gap: 1.9rem;

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
      }
    }

    p {
      display: flex;
      align-items: center;
      gap: .4rem;

      margin-top: 2.4rem;
      margin-bottom: 4rem;

      font-family: 'Roboto';
      font-size: 1.6rem;


      img {
        width: 1.6rem;
        height: 1.6rem;
      }

      svg {
        margin-left: .8rem;
        font-size: 1.9rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }
  }
`

