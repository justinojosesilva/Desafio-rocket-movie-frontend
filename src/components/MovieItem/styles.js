import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;

  padding: 0 1.6rem;
  border: ${({ theme, $isnew }) => $isnew == 'true' ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none' };
  border-radius: 1rem;
  background-color: ${({ theme, $isnew }) => $isnew == 'true' ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE };
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100 };
    }
  }

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED };
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSE };
  }

`