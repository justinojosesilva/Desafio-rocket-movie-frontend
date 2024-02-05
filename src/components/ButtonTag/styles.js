import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none' };
  border-radius: 1rem;
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`