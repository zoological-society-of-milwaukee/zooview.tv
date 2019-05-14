import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  // NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { streams } from '../../db';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Nav className="ml-auto" navbar>

        <UncontrolledDropdown nav inNavbar>

          <DropdownToggle nav caret>
            Exhibits
          </DropdownToggle>

          <DropdownMenu right>

            {streams.map(i => (
              <DropdownItem key={i.id}>
                <NavLink tag={RRNavLink} exact to={`/exhibits/${i.slug}`} activeClassName="active">
                  {i.name}
                </NavLink>
              </DropdownItem>
            ))}

            <DropdownItem divider />

            <DropdownItem>
              View All
            </DropdownItem>

          </DropdownMenu>

        </UncontrolledDropdown>
      </Nav>
    );
  }
}