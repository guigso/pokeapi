import styled from 'styled-components';

export const Container = styled.div`
  padding: 3%;
  display: flex;
  height: calc(100% - 65px);
`;
export const CardsWrapper = styled.div`
  background: #c4c4c4;
  background-size: 100% 100%;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 10px;
  overflow-y: auto;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 2fr);
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 3%;
  border-right: 1px solid rgba(0, 0, 0, 0.21);
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: space-around;
    border: none;
  }
`;
export const PokemonImageWrapper = styled.div`
  background-color: #367b15;
  border: 3px solid #365015;
  border-radius: 15px;
  height: 254px;
  width: 254px;
  img {
    height: 254px;
    width: 254px;
  }
`;
export const Tags = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const NumberTag = styled.li`
  background: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const TypeTag = styled.li`
  background: white;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 24px;
  border: 1px solid black;
  margin: 5px 0;
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const EvolutionChain = styled.div`
  background: #fff;
  height: 254px;
  padding: 15px;
  border-radius: 15px;
  overflow-y: auto;
`;
export const EvolutionRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const EvolutionCard = styled.div``
export const EvolutionTrigger = styled.div``
export const AnotherCard = styled.div`
  background: #fff;
  height: 128px;
  padding: 15px;
  border-radius: 15px;
`;
