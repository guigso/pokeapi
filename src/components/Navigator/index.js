import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import arrowIcon from 'assets/arrow-icon.png';

import { getGenerationRequest } from 'store/modules/pokemon/actions';
import history from 'services/history';
import { Container, NavButton, NavStatus } from './styles';

export default function Navigator() {
  const { pathname } = history.location;
  const dispatch = useDispatch();
  const generation_number = useSelector(
    state => state.pokemon.generation_number
  );
  const header = useSelector(state => state.pokemon.header);

  function handleNextGeneration() {
    if (generation_number === 7) {
      dispatch(getGenerationRequest(1));
    } else {
      dispatch(getGenerationRequest(generation_number + 1));
    }
  }
  function handlePrevGeneration() {
    if (generation_number === 1) {
      dispatch(getGenerationRequest(7));
    } else {
      dispatch(getGenerationRequest(generation_number - 1));
    }
  }
  return (
    <Container>
      <NavButton
        onClick={handlePrevGeneration}
        disabled={pathname.includes('info')}
      >
        <img src={arrowIcon} alt="Previous" />
      </NavButton>
      <NavStatus background={header}>
        <h1>
          Generation
          {generation_number}
        </h1>
      </NavStatus>
      <NavButton
        onClick={handleNextGeneration}
        disabled={pathname.includes('info')}
      >
        <img src={arrowIcon} alt="Next" />
      </NavButton>
    </Container>
  );
}
