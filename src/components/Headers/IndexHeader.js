/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {

    if (window.innerWidth > 991) {

      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
        }
      };

      window.addEventListener("scroll", updateScroll);

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="gray">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/living-care/old.jpg") + ")"
          }}
          ref={pageHeader}></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo display-1 fo">Simple Living of Mishawaka</h1>
            <h3>Residential Assited Living Care Facility</h3>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
