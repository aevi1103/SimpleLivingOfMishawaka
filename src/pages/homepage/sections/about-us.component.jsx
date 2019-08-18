import React from "react";
// reactstrap components
import{
  Container,
  Row,
  Col
} from "reactstrap";
// core components

const AboutUs = () => {
    
    return (
      <div className="section section-about-us" id="aboutsection">
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
        </Container>
      </div>
    );
};

export default AboutUs