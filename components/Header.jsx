import {APP_NAME} from "../config"
import"../public/stylesheets/index.css";
import React, { useState } from 'react';
import Link from "next/link"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className = "">
      <Navbar style= {{padding: `0`, boxShadow: `0px 2px 10px grey` , cursor: `pointer`}}color="purple" light expand="md">
        <Link href="/">
          <div className = "navbar-brand">
            <img style = {{height: `50px`}} src = "../../../../../images/Logo.png"></img>
            <div className = "navbar-brand__text">{APP_NAME}</div>
          </div>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              
                <NavLink href="/examplan">Examplan</NavLink>
         
            </NavItem>
             <NavItem>
              
                <NavLink href="/visualresume">Visual Resume</NavLink>
         
            </NavItem>
            <NavItem>
              
                <NavLink href="/blogs">Blogs</NavLink>
         
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && (
              <React.Fragment>
                {(isAuth().role == 1) && 
                <NavItem>
                  <Link  href="/admin">
                    <NavLink style={{ cursor: `pointer` }}>Admin</NavLink>
                  </Link>
              </NavItem>}
              <NavItem>
                  <Link  href="/user">
                    <NavLink style={{ cursor: `pointer` }}>Dashboard</NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: `pointer` }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
              </React.Fragment>
              
            )}
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Header;