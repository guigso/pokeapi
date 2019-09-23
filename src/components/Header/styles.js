import styled from 'styled-components';

export const Container = styled.div`
  background: #ff0000;
  padding: 0 35px 0 15px;
`;
export const Content = styled.div`
  height: 65px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
    }

    @media only screen and (max-width: 400px) {
      img {
        display: none;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    min-width: 35%;
  }
`;
