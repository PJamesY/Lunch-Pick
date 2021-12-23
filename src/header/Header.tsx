import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: space-between;
  align-items: center;
`;

const StyledheaderLogo = styled.h1`
  font-family: 'james';
`;

const Header = function Header() {
  return (
    <StyledHeader>
      <StyledheaderLogo>JAMES</StyledheaderLogo>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
