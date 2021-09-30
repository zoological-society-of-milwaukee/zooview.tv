import React   from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  // NavItem,
  NavLink, } from 'reactstrap';

import { streams } from '../../db';

export default   function MainMenu({close}) { 

    return (
      <Nav  className="ml-auto " navbar>  
            {streams.map((item ,i) => ( 
              <li key={i+"nav"}>
                    <NavLink  tag={RRNavLink} exact to={`/exhibits/${item.slug}`} onClick={close} activeClassName="active">
                      {item.name}
                     </NavLink> 
              </li>
            
            ))} 

            <li>  <hr/> </li> 
            
            <li> <NavLink  tag={RRNavLink}  exact to='/legal/terms-of-service' onClick={close} activeClassName="active">   Terms Of Service    </NavLink></li>
            <li> <NavLink  tag={RRNavLink}   exact to='/legal/privacy-policy' onClick={close} activeClassName="active">   Privacy Policy    </NavLink></li> 
      </Nav>
    );
 
}