import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPokemonRequest } from 'store/modules/pokemon/actions';
import {
  Container,
  CardsWrapper,
  ProfileCard,
  PokemonImageWrapper,
  Tags,
  NumberTag,
  TypeTag,
  DetailsCard,
  EvolutionChain,
  EvolutionLevel,
  Evolution,
  AnotherCard,
} from './styles';

export default function Pokemon({ match, history }) {
  const pokemon_id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPokemon() {
      await dispatch(getPokemonRequest(pokemon_id));
    }
    getPokemon();
    // eslint-disable-next-line
  }, [pokemon_id]);

  const { pokemon_detail: pokemon, loading } = useSelector(
    state => state.pokemon
  );

  function getTypes() {
    return pokemon.types.map(ele => (
      <TypeTag key={ele.slot}>{ele.type.name}</TypeTag>
    ));
  }
  function getEvolutions() {
    return pokemon.evo_chain.map(ele => (
      <EvolutionLevel
        key={ele.id}
        onClick={() => history.push(`/infos/${ele.id}`)}
      >
        {`name: ${ele.name} |`}
        {`evo_chain_level: ${ele.evo_chain_level} |`}
        {ele.details
          ? `details:  ${
              ele.details.min_level ? `Level up ${ele.details.min_level}` : ''
            }`
          : ''}
      </EvolutionLevel>
    ));
  }

  return (
    <Container>
      {!loading && pokemon ? (
        <CardsWrapper>
          <ProfileCard>
            <PokemonImageWrapper>
              <img src={pokemon.sprite} alt={pokemon.name} />
            </PokemonImageWrapper>
            <Tags>
              <NumberTag>#{pokemon_id}</NumberTag>
              {getTypes()}
            </Tags>
          </ProfileCard>
          <DetailsCard>
            <EvolutionChain>{getEvolutions()}</EvolutionChain>
            <AnotherCard>Another card </AnotherCard>
          </DetailsCard>
        </CardsWrapper>
      ) : (
        'wait'
      )}
    </Container>
  );
}
