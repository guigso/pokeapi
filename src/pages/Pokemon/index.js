import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPokemonRequest } from 'store/modules/pokemon/actions';
import {
  Container,
  CardsWrapper,
  MainCard,
  PokemonImageWrapper,
  TextTags,
  TypeTags,
  NumberTag,
  TypeTag,
  DetailsCard,
  EvolutionChain,
  EvolutionRow,
  EvolutionCard,
  EvolutionTrigger,
  AnotherCard,
  NameTag,
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

  function getDetails(details) {
    const keys = Object.keys(details);
    return keys.map((e, index) => {
      if (e !== 'trigger' && e !== 'needs_overworld_rain') {
        return (
          <p key={index + details[e]}>
            {e.split('_').join(' ')}:{' '}
            {details[e].name
              ? details[e].name.split('-').join(' ')
              : String(details[e])
                  .split('-')
                  .join(' ')}
          </p>
        );
      }
      return false;
    });
  }

  function getEvolutions() {
    return pokemon.evo_chain.map((ele, index) => (
      <EvolutionRow key={`${index} ${ele.evolves_to.id}`}>
        <EvolutionCard onClick={() => history.push(`/infos/${ele.id}`)}>
          <img src={ele.sprite} alt={ele.name} />
          <p>
            #{ele.id}-{ele.name}
          </p>
        </EvolutionCard>
        <EvolutionTrigger>
          <p>--------------------------------------------></p>
          <p>Trigger: {ele.evolves_to.details.trigger.split('-').join(' ')}</p>
          {getDetails(ele.evolves_to.details)}
        </EvolutionTrigger>
        <EvolutionCard
          onClick={() => history.push(`/infos/${ele.evolves_to.id}`)}
        >
          <img src={ele.evolves_to.sprite} alt={ele.evolves_to.name} />
          <p>
            #{ele.evolves_to.id} - {ele.evolves_to.name}
          </p>
        </EvolutionCard>
      </EvolutionRow>
    ));
  }

  return (
    <Container>
      {!loading && pokemon ? (
        <CardsWrapper>
          <MainCard>
            <TextTags>
              <NumberTag>#{pokemon_id}</NumberTag>
              <NameTag>{pokemon.name}</NameTag>
            </TextTags>
            <PokemonImageWrapper>
              <img src={pokemon.sprite} alt={pokemon.name} />
            </PokemonImageWrapper>
            <TypeTags>{getTypes()}</TypeTags>
          </MainCard>
          <DetailsCard>
            <EvolutionChain>{getEvolutions()}</EvolutionChain>
          </DetailsCard>
        </CardsWrapper>
      ) : (
        'wait'
      )}
    </Container>
  );
}
