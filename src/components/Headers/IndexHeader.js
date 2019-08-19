/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import DesktopImage from '../../assets/img/living-care/desktop-image.jpg'
import MobileImage from '../../assets/img/living-care/mobile-image.jpg'
import Logo from '../../assets/img/living-care/home-care-logo.png'

import './indexHeader.styles.scss'

const IndexHeader= () => {

  let pageHeader = React.createRef();

  const [windowWidth, setWindowWidth ] = React.useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? DesktopImage : MobileImage;

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
              src={Logo}
              style={{height: '18em', size: '50em'}}
            ></img>
            
            <h1 className='h1-seo'>Simple Living of Mishawaka</h1>
            <h3>Residential Assited Living Care Facility</h3>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
