import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #3b4cca;
  height: 100%;
`;
export const Content = styled.div`
  padding: 3%;
  display: flex;
  height: calc(100% - 65px);
`;

export const ListContainer = styled.ul`
  background: #fff url(${props => props.background}) no-repeat;
  background-size: 100% 100%;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  padding: 15px 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px 10px;
  overflow-y: auto;

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  min-height: 110px;
  img {
    max-height: 96px;
    max-width: 96px;
  }

  strong {
    color: #fff;
    font-size: 1.2em;
    text-transform: capitalize;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    min-width: 70px;
    min-height: 85px;
    img {
      max-width: 70px;
    }
  }
`;
