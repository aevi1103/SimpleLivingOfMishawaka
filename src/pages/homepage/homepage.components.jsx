import React from "react";

// reactstrap components
import {
  Container,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter";

import AboutUs from './sections/about-us.component'
import ContactUs from "./sections/contact-us.component";
import Team from "./sections/team.component"
import Services from "./sections/services.component"

import ImageGallery  from './sections/gallery.component'

import GoogleMap from './sections/map.component'


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <ImageGallery />

          <Container>
            <AboutUs />
            <Services />
            <Team />
            <ContactUs />
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
