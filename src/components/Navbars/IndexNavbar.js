import React from "react";
// import { Link } from "react-router-dom";

import smoothscroll from 'smoothscroll-polyfill';
import Logo from '../../assets/img/living-care/logo.png'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

const IndexNavbar = () => {

  smoothscroll.polyfill();

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const gotoSection = (e, id) => {
    document.querySelector(`#${id}`).scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        color="white"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand font-weight-bold"
              href="#headersection"
              src={Logo}
            >
              Logo
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>

          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => gotoSection(e, "gallerysection")}
                >
                  <i className="now-ui-icons business_briefcase-24" />
                  <p>GALLERY</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => gotoSection(e, "aboutsection")}
                >
                  <i className="now-ui-icons business_badge" />
                  <p>ABOUT US</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => gotoSection(e, "servicesection")}
                >
                  <i className="now-ui-icons business_briefcase-24" />
                  <p>OUR SERVICES</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => gotoSection(e, "contactussection")}
                >
                  <i className="now-ui-icons ui-1_send" />
                  <p>CONTACT US</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink target="_blank" id="facebook-tooltip">
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
