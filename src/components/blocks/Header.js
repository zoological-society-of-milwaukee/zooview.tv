import React, { useState , useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar } from 'reactstrap'; 
import { MainMenu } from '../micro';
import { ReactComponent as HeaderLogo } from '../../media/images/logo.svg';
import imgHeaderPartners from '../../media/images/header-partners.png';
import useOnClickOutside from '../hooks/useOnClickOutside'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  function close() {
    setIsOpen(false)  
  }
  const ref = useRef();
  const ref2 = useRef();
  useOnClickOutside(ref, close , ref2);
 
  return (
    <Container>
      <Navbar dark  > 
        <NavLink  to="/">
          <HeaderLogo  className="logo" />
        </NavLink> 
            <div  ref={ref2}  style={{order:2}}>
                <button className= {  isOpen?"hamburger-menu open":"hamburger-menu "} onClick={toggle} >        
                <span></span>  <span></span>  <span></span>  <span></span>   <span></span>  <span></span>
               </button>
            </div>  
            <div className="center header-partners">
              <img src={imgHeaderPartners} alt="partners" />
            </div>  
            <Collapse className="main-nav" isOpen={isOpen}  >
              <div ref={ref}>
                  <MainMenu close={close} />   
              </div> 
            </Collapse> 
      </Navbar>
    </Container>
  );
}
export default Header;
