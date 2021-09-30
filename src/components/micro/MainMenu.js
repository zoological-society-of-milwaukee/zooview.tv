import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  // NavItem,
  NavLink, } from 'reactstrap';

import { streams } from '../../db';

export default   function MainMenu({toggle}) { 
  
    return (
      <Nav className="ml-auto " navbar>  
            {streams.map(i => ( 
              <li>
                    <NavLink tag={RRNavLink} exact to={`/exhibits/${i.slug}`} onClick={toggle} activeClassName="active">
                      {i.name}
                     </NavLink> 
              </li>
            
            ))} 

            <li>  <hr/> </li> 
            
            <li> <NavLink  tag={RRNavLink}  exact to='/legal/terms-of-service' onClick={toggle} activeClassName="active">   Terms Of Service    </NavLink></li>
            <li> <NavLink  tag={RRNavLink}   exact to='/legal/privacy-policy' onClick={toggle} activeClassName="active">   Privacy Policy    </NavLink></li> 
      </Nav>
    );
 
}