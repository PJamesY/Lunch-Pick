import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLi = styled.li`
  display: inline-block;
  &.active {
    color: red;
  }
`;

StyledLi.displayName = 'li';

const StyledNavUl = styled.ul``;

const Navigation = function Navigation() {
  const [tab, setTab] = useState('main');

  const changeTab = () => {
    setTab('메인');
  };

  return (
    <nav>
      <ul>
        <StyledLi onClick={changeTab}>
          <Link onClick={changeTab} to="home" smooth activeClass="active">
            메인
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="work" smooth activeClass="active">
            포트폴리오
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="profile">메인</Link>
        </StyledLi>
      </ul>
    </nav>
  );
};

export default Navigation;
