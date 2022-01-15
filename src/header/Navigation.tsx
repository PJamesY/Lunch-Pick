import React, { MouseEvent, ReactNode, useEffect, useState, useRef, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  position: sticky;
  top: 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledheaderLogo = styled.h1`
  position: absolute;
  top: 16px;
  left: 8%;
  font-family: 'james';
  color: white;
`;

const StyledNavUl = styled.ul`
  margin-right: 10px;
  float: right;
`;

const StyledLi = styled.li`
  display: inline-block;
  color: ${(props) => props.color};
  a {
    display: block;
    padding: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 50px;
  }
`;

StyledLi.displayName = 'li';

type NavigationProps = {
  defaultTab: string;
  menus: { key: string; to: string; name: string }[];
};

const Navigation = function Navigation({ defaultTab, menus }: NavigationProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const ref = useRef(null);

  const changeTab = (which: string) => {
    setSelectedTab(which);
  };

  return (
    <StyledNav>
      <StyledheaderLogo>JAMES</StyledheaderLogo>
      <StyledNavUl>
        {menus.map((menu) => (
          <StyledLi key={menu.key} color={menu.key === selectedTab ? 'purple' : 'white'}>
            <Link
              to={menu.to}
              smooth
              offset={-90}
              onClick={() => {
                changeTab(menu.key);
              }}
              ref={ref}
            >
              {menu.name}
            </Link>
          </StyledLi>
        ))}
      </StyledNavUl>
    </StyledNav>
  );
};

export default Navigation;
