import React, { PureComponent, Fragment } from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input } from 'reactstrap';


import logo from 'images/favicon.png';
import 'styles/nav.css';

class Header extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = async () => {
    await this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Fragment>
        <section className="header-section">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">EasyFruitVeg </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Input className="txt-box" placeholder="Search..." />
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <img src={logo} className="img-fluid profile-img" alt="Logo Load" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </section>
      </Fragment> 
    )
  }
}

export default Header;