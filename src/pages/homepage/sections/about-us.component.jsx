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
      <Container>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Massa enim nec dui nunc mattis enim. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Fermentum leo vel orci porta non pulvinar neque. Augue mauris augue neque gravida in fermentum et. Turpis massa tincidunt dui ut ornare lectus sit amet. 
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
                        "url(" + require("assets/img/living-care/loc1.jpg") + ")"
                    }}
                  />
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/living-care/loc2.jpg") + ")"
                    }}
                  />
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/living-care/loc3.jpg") + ")"
                    }}
                  />
                  <h3>Our Services</h3>
                  <p>
                    <b>Service 1</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit 
                  </p>
                  <p>
                    <b>Service 2</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  </p>
                  <p>
                    <b>Service 3</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                  <p>
                    <b>Service 4</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                  <p>
                    <b>Service 5</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/default-avatar.png")}
                    />
                    <h4 className="title">Employee 1</h4>
                    <p className="category text-info">Therapist</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/default-avatar.png")}
                    />
                    <h4 className="title">Maynard Utayde</h4>
                    <p className="category text-info">Owner</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/default-avatar.png")}
                    />
                    <h4 className="title">Employee 2</h4>
                    <p className="category text-info">Therapist</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </Col>
               </Row>
            </div>
          </Container>
        </div>
      </Container>
    );
};

export default AboutUs