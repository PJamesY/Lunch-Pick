import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    background: gray;
  }
  span {
    margin-right: 10px;
    @media screen and (min-width: 500px) {
      display: none;
    }
  }
`;

const menus = [
  { key: 'home', to: 'home', name: 'main' },
  { key: 'work', to: 'work', name: 'portfolio' },
  { key: 'project', to: 'project', name: 'project' },
];

const Header = function Header() {
  const [show, setShow] = useState(false);

  const clicked = () => {
    console.log(12312312);
    setShow(!show);
  };

  return (
    <StyledHeader>
      <StyledTitle>
        <div onClick={clicked} onKeyPress={clicked} role="button" tabIndex={0}>
          <MenuOutlined width={20} />
        </div>
        {show && <h1>jjjj</h1>}
      </StyledTitle>
      <Navigation defaultTab="home" menus={menus} />
    </StyledHeader>
  );
};

export default Header;
