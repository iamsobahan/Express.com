import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const active = {
    color: "#f3ca20",
    textDecoration: "underline",
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mt-3" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink
              className="header_sm_margin fw-normal text-uppercase mx-3"
              activeStyle={active}
              to="/home"
            >
              Home
            </NavLink>

            {user.displayName && (
              <NavLink
                className="header_sm_margin fw-normal text-uppercase mx-3"
                activeStyle={active}
                to="/orders"
              >
                My Orders
              </NavLink>
            )}
            {user.displayName && (
              <NavLink
                className="header_sm_margin fw-normal text-uppercase mx-3"
                activeStyle={active}
                to="/manageorders"
              >
                Manage All Orders
              </NavLink>
            )}
            {user.displayName && (
              <NavLink
                className="header_sm_margin fw-normal text-uppercase mx-3"
                activeStyle={active}
                to="/addnewpack"
              >
                Add a new Packages
              </NavLink>
            )}

            {user.displayName ? (
              <NavLink className=" mx-3" to="/home">
                <button
                  className="header_sm_margin btn btn-warning"
                  onClick={logOut}
                >
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink
                className="header_sm_margin fw-normal text-uppercase mx-3"
                activeStyle={active}
                to="/login"
              >
                Login
              </NavLink>
            )}

            {user.displayName && (
              <p className="text-light m-0">sign in as : {user.displayName}</p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
