import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLi = styled.li`
  display: inline-block;
  color: ${(props) => props.color};
`;

StyledLi.displayName = 'li';

const StyledNavUl = styled.ul`
  display: flex;
`;

type NavigationProps = {
  defaultTab: string;
};

const Navigation = function Navigation({ defaultTab }: NavigationProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const changeTab = (which: string) => {
    setSelectedTab(which);
  };

  return (
    <nav>
      <StyledNavUl>
        <StyledLi color={selectedTab === 'main' ? 'purple' : 'white'}>
          <Link
            onClick={() => {
              changeTab('main');
            }}
            to="home"
            smooth
          >
            메인
          </Link>
        </StyledLi>
        <StyledLi color={selectedTab === 'work' ? 'purple' : 'white'}>
          <Link
            onClick={() => {
              changeTab('work');
            }}
            to="work"
            smooth
          >
            포트폴리오
          </Link>
        </StyledLi>
        <StyledLi color={selectedTab === 'project' ? 'purple' : 'white'}>
          <Link
            onClick={() => {
              changeTab('project');
            }}
            to="project"
          >
            프로젝트
          </Link>
        </StyledLi>
      </StyledNavUl>
    </nav>
  );
};

export default Navigation;
