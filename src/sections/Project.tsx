import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styledComponent/Section';

export const StyledBoard = styled.div`
  width: 100%;
  min-height: calc(93.5vh);
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCell = styled.div`
  background-color: green;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopup = styled.div`
  position: absolute;
  top: 35%;
  left: 22%;
  width: 400px;
  height: 200px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Project = function Project() {
  const showPopup = (msg: string) => {
    console.log('click', msg);
  };

  return (
    <StyledSection id="project">
      <StyledBoard>
        <StyledRow>
          <StyledCell
            onClick={() => {
              showPopup('암송');
            }}
          >
            1
          </StyledCell>
          <StyledCell
            onClick={() => {
              showPopup('암송');
            }}
          >
            2
          </StyledCell>
          <StyledCell>3</StyledCell>
          <StyledCell>4</StyledCell>
          <StyledCell>5</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell>2</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell>2</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell>2</StyledCell>
        </StyledRow>
        <StyledRow>
          <StyledCell>1</StyledCell>
          <StyledCell>2</StyledCell>
          <StyledCell>3</StyledCell>
          <StyledCell>4</StyledCell>
          <StyledCell>5</StyledCell>
        </StyledRow>
      </StyledBoard>
      <StyledPopup>jjjj</StyledPopup>
    </StyledSection>
  );
};

export default Project;
