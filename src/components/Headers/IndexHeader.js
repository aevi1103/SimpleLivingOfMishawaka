/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import desktopImage from '../../assets/img/living-care/desktop-image.jpg'
import mobileImage from '../../assets/img/living-care/mobile-image.jpg'

function IndexHeader() {

  let pageHeader = React.createRef();

  const [windowWidth, setWindowWidth ] = React.useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

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

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
  })

  return (
    <>
      <div className="page-header clear-filter" filter-color="gray">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${imageUrl})`
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
