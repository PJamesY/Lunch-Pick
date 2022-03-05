import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 200;
`;

const menus = [
  { key: 'home', to: 'home', name: 'main' },
  { key: 'work', to: 'work', name: 'portfolio' },
  { key: 'project', to: 'project', name: 'project' },
];

const Header = function Header() {
  return (
    <StyledHeader>
      <Navigation defaultTab="home" menus={menus} />
    </StyledHeader>
  );
};

export default Header;
