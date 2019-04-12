import React, { PureComponent, Fragment } from 'react';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
import * as IONIcons from 'react-icons/io';

class SideNav extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="left-panel">
          <Nav vertical className="pl-0 pr-0">
            <NavItem active >
              <NavLink to="/dashboard" >
                <IONIcons.IoIosApps className="icon1" /> Dashboard
                </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <IONIcons.IoMdCart className="icon2" /> Orders
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/orders/order-list" >Order List</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/orders/order-statistics">Statics</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <IONIcons.IoMdBookmarks className="icon3" /> Catalog
                </DropdownToggle>
              <DropdownMenu  >
                <DropdownItem>
                  <Link to="/catalog/categories">
                    Categories
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/catalog/products">
                    Products
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/catalog/offers">
                    Offers
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <IONIcons.IoIosPeople className="icon4" /> Customers
                </DropdownToggle>
              <DropdownMenu  >
                <DropdownItem>
                  <Link to="/customer/details">
                    Users List
                  </Link>

                </DropdownItem>
                <DropdownItem>
                  <Link to="/customer/feedback">
                    Feedback
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <IONIcons.IoMdImages className="icon4" /> Banners
                </DropdownToggle>
              <DropdownMenu  >
                <DropdownItem>
                  <Link to="/banner/list">
                    Upload Banners
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <IONIcons.IoMdListBox className="icon5" /> Contact
                </DropdownToggle>
              <DropdownMenu  >
                <DropdownItem>
                  <Link to="/contact/list">
                    Add Contact
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </div>
      </Fragment>
    )
  }
}

export default SideNav;