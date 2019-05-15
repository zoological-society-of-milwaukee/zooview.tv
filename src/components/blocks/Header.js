import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler } from 'reactstrap';

import { MainMenu } from '../micro';
import { ReactComponent as HeaderLogo } from '../../media/images/logo.svg';
import imgHeaderPartners from '../../media/images/header-partners.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <Container>
      <Navbar dark expand="md">

        <Link to="/">
          <HeaderLogo className="logo" />
        </Link>

        <NavbarToggler onClick={toggle} />

        <div className="center header-partners">
          <img src={imgHeaderPartners} alt="" />
        </div>

        <Collapse isOpen={isOpen} navbar>
          <MainMenu />
        </Collapse>

      </Navbar>
    </Container>
  );
}
export default Header;
