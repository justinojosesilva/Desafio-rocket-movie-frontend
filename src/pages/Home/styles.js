import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 4rem 12.3rem;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.6rem;
      font-weight: 400;

      padding: 2.2rem 3.2rem;
      border: none;
      border-radius: .8rem;

      background-color: ${({ theme }) => theme.COLORS.ROSE};

      svg {
        font-size: 2.2rem;
      }
    }
  }

`

export const AddMovie = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 400;

  padding: 2.2rem 3.2rem;
  border: none;
  border-radius: .8rem;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    font-size: 2.2rem;
  }
`

export const Card = styled.section`
  width: 100%;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 1.6rem;
  margin-top: 3.7rem;

  display: flex;
  flex-direction: column;
  
  .stars {
    display: flex;
    align-items: flex-start;
  }
  
  .titleCard {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  
  > div a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: .8rem;
  }

  > p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    font-family: 'Roboto';
    font-size: 1.6rem;
    
    color: #999591;
  }

  > div {
    span {
      background-color: transparent;
    }
  }

  .tags span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`

export const Footer = styled.footer`
  padding: 2rem;
`