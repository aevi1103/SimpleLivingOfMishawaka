import React from "react";
// reactstrap components
import{
  Container,
  Row,
  Col
} from "reactstrap";
// core components

import Services from './services.component'
import ScrollableAnchor from 'react-scrollable-anchor';

const AboutUs = () => {
    
    return (
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Who we are?</h2>

              <h5 className="description">
                Commodo viverra maecenas accumsan lacus vel facilisis
                volutpat est. Massa enim nec dui nunc mattis enim. Ipsum a
                arcu cursus vitae congue mauris rhoncus aenean vel.
                Fermentum leo vel orci porta non pulvinar neque. Augue
                mauris augue neque gravida in fermentum et. Turpis massa
                tincidunt dui ut ornare lectus sit amet.
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary" />
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/living-care/loc1.jpg") +
                      ")"
                  }}
                />
                <div
                  className="image-container"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/living-care/loc2.jpg") +
                      ")"
                  }}
                />
              </Col>

              <Col md="5">
                <ScrollableAnchor id={"sevicesection"}>
                  <span style={{ visibility: "hidden" }}>about</span>
                </ScrollableAnchor>

                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/living-care/loc3.jpg") +
                      ")"
                  }}
                />

                <Services />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default AboutUs