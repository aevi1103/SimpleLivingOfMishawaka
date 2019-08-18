import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
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

      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white">
        <Container>

          <div className="navbar-translate">

            <NavbarBrand id="navbar-brand font-weight-bold">
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
                <NavLink to="/about" tag={Link}>
                  <i className="now-ui-icons business_badge" />
                  <p>ABOUT US</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink >
                  <i className="now-ui-icons business_briefcase-24" />
                  <p>OUR SERVICES</p>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1" />
                  <p>Gallerry</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1" />
                    Gallery 1
                  </DropdownItem>
                  <DropdownItem>
                    <i className="now-ui-icons design_bullet-list-67 mr-1" />
                    Gallery 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink tag={Link} to="/contact" >
                  <i className="now-ui-icons ui-1_send" />
                  <p>CONTACT US</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
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
