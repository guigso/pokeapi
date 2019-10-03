import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/Header';

import { getGenerationRequest } from 'store/modules/pokemon/actions';
import { Wrapper, Content, ListContainer, ListItem } from './styles';

export default function Main({ history }) {
  const dispatch = useDispatch();

  const pokemons = useSelector(state => state.pokemon.pokemons);

  useEffect(() => {
    function loadFirstGeneration() {
      dispatch(getGenerationRequest());
    }
    loadFirstGeneration();
  }, [dispatch]);

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
            <strong>#{poke.id}</strong>
            <strong>{poke.name}</strong>
          </ListItem>
        ))}
      </ListContainer>
    </Content>
  );
}
