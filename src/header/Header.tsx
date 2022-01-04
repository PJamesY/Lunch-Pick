import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  // padding: 32px;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  padding-top: 32px;
  padding-bottom: 32px;
  top: -32px;
`;

const StyledheaderLogo = styled.h1`
  font-family: 'james';
`;

const menus = [
  { key: 'home', to: 'home', name: '메인' },
  { key: 'work', to: 'work', name: '포트폴리오' },
  { key: 'project', to: 'project', name: '프로젝트' },
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
