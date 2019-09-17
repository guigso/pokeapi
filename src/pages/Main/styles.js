import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #3b4cca;
  height: 100%;
`;
export const Content = styled.div`
  padding: 50px;
  display: flex;
  height: calc(100% - 65px);
`;
export const ListContainer = styled.div`
  background: #fff url(${props => props.background}) no-repeat;
  background-size: 100% 100%;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  padding: 25px;
`;
