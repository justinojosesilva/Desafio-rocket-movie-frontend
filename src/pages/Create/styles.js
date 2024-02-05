import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    margin: 4rem 12.3rem;

    h1 {
      margin-top: 2.4rem;
      font-size: 3.6rem;
    }

    div {
      display: flex;
      gap: 4rem;
      margin-top: 2rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
      color: #999591;
      margin-top: 4rem;
    }
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  display: flex;
  align-items: center;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700 };
  color: ${({ theme }) => theme.COLORS.GRAY_100 };

  border-radius: 1rem;

  height: 27.4rem;

  padding: 1.9rem 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE };
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100 };
  }
`

export const ContainerTags = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  padding: 1.6rem;
  margin-top: 2.4rem;

  border-radius: .8rem;

  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`