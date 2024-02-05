import styled from "styled-components";
import backgroundImg from "../../assets/movie.png"

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };

  display: flex;
  align-items: stretch;
  gap: 16.3rem;
  padding-left: 13.4rem;
`

export const Form = styled.form`
  width: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ROSE };
  }
  
  > h2 {
    margin: 4.8rem 0;

    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE };

  }
  
  > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #CACACF;
  }

  > button {
    margin: 2.4rem 0 4.2rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE };
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`