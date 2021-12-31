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
  justify-content: space-between;
`;

const StyledHorizontalLine = styled.div`
  position: absolute;
  width: 100%;
  background-color: purple;
  height: 4px;
  top: 50px;
`;

type NavigationProps = {
  defaultTab: string;
  menus: { key: string; to: string; name: string }[];
};

const Navigation = function Navigation({ defaultTab, menus }: NavigationProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const changeTab = (which: string) => {
    setSelectedTab(which);
  };

  return (
    <nav>
      <StyledNavUl>
        <StyledHorizontalLine />
        {menus.map((menu) => (
          <StyledLi key={menu.key} color={selectedTab === menu.key ? 'purple' : 'white'}>
            <Link
              to={menu.to}
              smooth
              offset={-20}
              onClick={() => {
                changeTab(menu.key);
              }}
            >
              {menu.name}
            </Link>
          </StyledLi>
        ))}
      </StyledNavUl>
    </nav>
  );
};

export default Navigation;
