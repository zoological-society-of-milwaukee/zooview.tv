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
      </Nav>
    );
 
}