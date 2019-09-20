import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 3px solid black;
  height: 55px;
  width: 50px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    #f8f8f8 -4.55%,
    #dad8d9 99.99%,
    #b9b6b8 100%
  );

  &:not(:first-child) {
    transform: scaleX(-1);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const NavStatus = styled.div`
  width: 70%;
  height: 55px;
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff url(${props => props.background}) no-repeat;
  background-size: 100% 100%;
  border: 3px solid black;
  border-radius: 15px;

  h1 {
    color: yellow;
    font-size: 30px;
    font-weight: bold;
    -webkit-text-stroke: 1px black;
  }
`;
