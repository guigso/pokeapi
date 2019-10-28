import styled from 'styled-components';

export const Container = styled.div`
  padding: 3%;
  display: flex;
  height: calc(100% - 65px);
`;
export const CardsWrapper = styled.div`
  background: #c4c4c4;
  display: flex;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  padding: 3% 100px;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonImageWrapper = styled.div`
  background-color: #367b15;
  border: 3px solid #365015;
  border-radius: 15px;
  height: 336px;
  width: 336px;
  img {
    height: 336px;
    width: 336px;
  }
`;
export const TextTags = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 15px;
  font-size: 24px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const NumberTag = styled.li`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  border-radius: 10px;
`;
export const NameTag = styled.li`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  border-radius: 10px;
`;

export const TypeTags = styled.ul`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TypeTag = styled.li`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 50px;
  margin-top: 15px;
  border-radius: 10px;
`;

export const DetailsCard = styled.div`
  height: 100%;
  margin-left: 60px;
`;
export const EvolutionChain = styled.div`
  background: #fff;
  height: 100%;
  padding: 0px 15px;
  border-radius: 15px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
export const EvolutionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const EvolutionCard = styled.div`
  cursor: pointer;
`;
export const EvolutionTrigger = styled.div``;
export const AnotherCard = styled.div`
  background: #fff;
  height: 128px;
  padding: 15px;
  border-radius: 15px;
`;
