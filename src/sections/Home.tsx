import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponent/Section';
import hello from '../asset/hello.gif';

const StyledImg = styled.img`
  width: 100%;
`;

const Home = function Home() {
  return (
    <StyledSection id="home">
      <StyledImg src={hello} alt="background" />
    </StyledSection>
  );
};

export default Home;
