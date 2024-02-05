import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, isDelete }) => isDelete? theme.COLORS.BACKGROUND_900: theme.COLORS.ROSE};
  color: ${({ theme, isDelete }) => isDelete? theme.COLORS.ROSE: theme.COLORS.BACKGROUND_900};

  font-size: 1.6rem;
  font-weight: 500;

  padding: 1.6rem 0;
  border: 0;
  border-radius: 1rem;
`