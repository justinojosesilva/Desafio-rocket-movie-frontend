import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600 };
  font-family: 'Roboto';
  font-size: 1.2rem;

  padding: .8rem 1.6rem;
  margin-right: .8rem;
  border-radius: .8rem;
`