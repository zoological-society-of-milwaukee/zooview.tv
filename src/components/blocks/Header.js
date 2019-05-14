import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler } from 'reactstrap';

import { MainMenu } from '../micro';
import { ReactComponent as HeaderLogo } from '../../media/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <Container>
      <Navbar dark expand="md">

        <Link to="/">
          <HeaderLogo style={{ width: 220, position: 'relative', top: 3 }} />
        </Link>

        <NavbarToggler onClick={toggle} style={{ float: 'right' }}/>

        <Collapse isOpen={isOpen} navbar>
          <MainMenu />
        </Collapse>

      </Navbar>
    </Container>
  );
}
export default Header;
