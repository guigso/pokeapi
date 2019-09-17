import React from 'react';

import arrowIcon from 'assets/arrow-icon.png';
import background from 'assets/backgrounds/header-1.png';

import { Container, NavButton, NavStatus } from './styles';

export default function Navigator() {
  return (
    <Container>
      <NavButton>
        <img src={arrowIcon} alt="Previous" />
      </NavButton>
      <NavStatus background={background}>
        <h1>Generation I</h1>
      </NavStatus>
      <NavButton>
        <img src={arrowIcon} alt="Next" />
      </NavButton>
    </Container>
  );
}
