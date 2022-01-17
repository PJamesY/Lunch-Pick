import React, { MouseEvent, ReactNode, useEffect, useState, useRef, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  position: sticky;
  top: 0;
  @media screen and (min-width: 501px) {
    span {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    span {
      color: white;
      font-size: 25px;
      float: right;
      margin-top: 10px;
      margin-right: 30px;
      cursor: pointer;
    }
  }
`;

const StyledheaderLogo = styled.h1`
  position: absolute;
  top: 16px;
  left: 8%;
  font-family: 'james';
  color: white;
`;

const StyledNavUl = styled.ul<{ mobileShow: boolean }>`
  margin-right: 10px;
  float: right;
  @media screen and (max-width: 500px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #34495e;
    top: 50px;
    left: ${(props) => (props.mobileShow ? '0' : '-100%')};
    text-align: center;
    transition: all 0.5s;
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  line-height: 45px;
  margin: 0 15px;
  a {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.color};
  }

  a:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: ${(props) => props.color};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s linear;
  }
  a:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media screen and (max-width: 500px) {
    display: block;
    margin: 50px 0;
    line-height: 30px;

    a {
      font-size: 20px;
    }
  }
`;

StyledLi.displayName = 'li';

type NavigationProps = {
  defaultTab: string;
  menus: { key: string; to: string; name: string }[];
};

const Navigation = function Navigation({ defaultTab, menus }: NavigationProps) {
  // const [show, setShow] = useState('0');
  const [show, setShow] = useState(false);
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const ref = useRef(null);

  const changeTab = (which: string) => {
    setSelectedTab(which);
  };

  return (
    <StyledNav>
      {!show && <MenuOutlined onClick={() => setShow(true)} />}
      {show && <CloseOutlined onClick={() => setShow(false)} />}

      <StyledheaderLogo>JAMES</StyledheaderLogo>
      <StyledNavUl mobileShow={show}>
        {menus.map((menu) => (
          <StyledLi key={menu.key} color={menu.key === selectedTab ? 'red' : 'white'}>
            <Link
              to={menu.to}
              smooth
              offset={-50}
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
