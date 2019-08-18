import React from 'react'

import{
  Container,
  Row,
  Col
} from "reactstrap";

const Services = () => {
    return (
      <div className="section section-services" id="servicesection">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our Services</h2>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 1</b>
              </p>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 2</b>
              </p>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 3</b>
              </p>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 4</b>
              </p>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 5</b>
              </p>
              <p>
                <i className="now-ui-icons ui-1_check mr-2" />
                <b>Service 6</b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Services
