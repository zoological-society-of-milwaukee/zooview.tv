import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <Navbar dark  >

        <NavLink  to="/">
          <HeaderLogo  className="logo" />
        </NavLink>

        <NavbarToggler style={{order:2}} onClick={toggle} /> 
        
        <div className="center header-partners">
          <img src={imgHeaderPartners} alt="partners" />
        </div>  

        <Collapse className="main-nav" isOpen={isOpen}  >
          <MainMenu toggle={toggle} />   
        </Collapse> 
      </Navbar>
    </Container>
  );
}
export default Header;
