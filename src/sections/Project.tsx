import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styledComponent/Section';

export const StyledBoard = styled.div`
  width: 100%;
  min-height: calc(93.5vh);
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Project = function Project() {
  return (
    <StyledSection id="project">
      <StyledBoard>
        <StyledRow>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </StyledRow>
        <StyledRow>
          <div>1</div>
          <div>2</div>
        </StyledRow>
      </StyledBoard>
    </StyledSection>
  );
};

export default Project;
