import React from 'react';
import logo from 'assets/pokeapi.png';

import Navigator from 'components/Navigator';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="PokeApi" />
        </nav>
        <aside>
          <Navigator />
        </aside>
      </Content>
    </Container>
  );
}
