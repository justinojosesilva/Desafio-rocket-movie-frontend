import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  font-size: 1.6rem;
` 