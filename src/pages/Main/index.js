import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/Header';

import { getGenerationRequest } from 'store/modules/pokemon/actions';
import { Wrapper, Content, ListContainer, ListItem } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const generation_number = useSelector(
    state => state.pokemon.generation_number
  );

  const pokemons = useSelector(state => state.pokemon.pokemons);

  useEffect(() => {
    function loadFirstGeneration() {
      dispatch(getGenerationRequest(generation_number));
    }
    loadFirstGeneration();
  }, [dispatch, generation_number]);

  const background = useSelector(state => state.pokemon.background);

  return (
    <Wrapper>
      <Header />
      <Content>
        <ListContainer background={background}>
          {pokemons.map(poke => (
            <ListItem key={poke.id}>
              <img src={poke.sprite} alt={poke.name} />
              <strong>#{poke.id}</strong>
              <strong>{poke.name}</strong>
            </ListItem>
          ))}
        </ListContainer>
      </Content>
    </Wrapper>
  );
}
