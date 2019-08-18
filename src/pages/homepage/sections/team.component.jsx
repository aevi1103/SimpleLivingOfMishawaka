import React from 'react'

import{
  Container,
  Row,
  Col
} from "reactstrap";

const Team = () => {
    return (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
}

export default Team
