import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/pokeapi.png';

import Navigator from 'components/Navigator';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="PokeApi" />
          </Link>
        </nav>
        <aside>
          <Navigator />
        </aside>
      </Content>
    </Container>
  );
}
