import React, { useState } from 'react';

import Header from 'components/Header';

// import background from 'assets/backgrounds/background-1.png';
import { Wrapper, Content, ListContainer } from './styles';

export default function Main() {
  const [background, setBackground] = useState(
    require('assets/backgrounds/background-1.png')
  );
  return (
    <Wrapper>
      <Header />
      <Content>
        <ListContainer background={background} />
      </Content>
    </Wrapper>
  );
}
