import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header``;

const StyledheaderLogo = styled.h1`
  font-family: 'james';
`;

const menus = [
  { key: 'home', to: 'home', name: 'main' },
  { key: 'work', to: 'work', name: 'portfolio' },
  { key: 'project', to: 'project', name: 'project' },
];

const Header = function Header() {
  return (
    <StyledHeader>
      <StyledheaderLogo>JAMES</StyledheaderLogo>
      <Navigation defaultTab="home" menus={menus} />
    </StyledHeader>
  );
};

export default Header;
