import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;

  border-bottom-width: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300 };

  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  padding: 2.4rem 12.3rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.ROSE };
  }

`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
  
  > div {
    display: flex;
    min-width: 15rem;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;
    text-align: end;

    span {
      font-size: 1.4rem;
      font-weight: bold;
      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`