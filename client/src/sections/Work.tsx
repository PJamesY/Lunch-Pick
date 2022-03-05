import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSection } from '../styledComponent/Section';

const Work = function Work() {
  return (
    <StyledSection id="work">
      <Link to="/pokemon">pokemon</Link>
    </StyledSection>
  );
};

export default Work;
