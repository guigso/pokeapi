import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGenerationRequest } from 'store/modules/pokemon/actions';
import { Content, ListContainer, ListItem } from './styles';

export default function Main({ history }) {
  const dispatch = useDispatch();

  const pokemons = useSelector(state => state.pokemon.pokemons);
  const genNumber = useSelector(state => state.pokemon.generation_number);

  useEffect(() => {
    function loadFirstGeneration() {
      dispatch(getGenerationRequest(genNumber));
    }
    loadFirstGeneration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genNumber]);

  const background = useSelector(state => state.pokemon.background);

  return (
    <Content>
      <ListContainer background={background}>
        {pokemons.map(poke => (
          <ListItem
            key={poke.id}
            onClick={() => history.push(`/infos/${poke.id}`)}
          >
            <img src={poke.sprite} alt={poke.name} />
            <strong>{`#${poke.id} ${poke.name}`}</strong>
          </ListItem>
        ))}
      </ListContainer>
    </Content>
  );
}
