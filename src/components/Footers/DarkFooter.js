/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer text-center" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Simple Living of Mishawaka
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Assisted Living Care Facility
              </a>
            </li>
            <li>
              <a
                to="#"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <a
            href="#"
            target="_blank"
          >
            Aebbie Rontos
          </a>.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
