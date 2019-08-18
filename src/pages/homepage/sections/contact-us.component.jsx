import React from 'react'

import{
    Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const ContactUs = () => {

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [phoneFocus, setLphoneFocus] = React.useState(false);
    const [subjFocus, setsubjFocus] = React.useState(false);

    return (
      <div className="section section-contact-us" id="contactUs">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
              <h2 className="title">Contact Us</h2>
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="First Name..."
                  type="text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
              </InputGroup>

              <InputGroup
                className={
                  "input-lg" + (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  type="text"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                />
              </InputGroup>

              <InputGroup
                className={
                  "input-lg" + (phoneFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons tech_mobile" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Telephone..."
                  type="telephone"
                  onFocus={() => setLphoneFocus(true)}
                  onBlur={() => setLphoneFocus(false)}
                />
              </InputGroup>

              <InputGroup
                className={
                  "input-lg" + (subjFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons files_paper" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Subject..."
                  type="text"
                  onFocus={() => setsubjFocus(true)}
                  onBlur={() => setsubjFocus(false)}
                />
              </InputGroup>

              <div className="textarea-container">
                <Input
                  cols="80"
                  name="name"
                  placeholder="Type a message..."
                  rows="4"
                  type="textarea"
                />
              </div>

              <div className="send-button">
                <Button
                  block
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </Col>

            <Col lg="6" md="8" className="ml-auto mr-auto">
              <h2 className="title">Where you can find us</h2>

              <p className="category text-info mb-0 mt-2">12253 Jefferson Blvd</p>
              <p className="">
                Mishawaka, IN 46545
              </p>

              <p className="category text-info mb-0 mt-2">Call Us</p>
              <p className="">
                574-123-4567
              </p>

              <p className="category text-info mb-0 mt-2">Email Us</p>
              <p className="">
                maynard.utayde@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ContactUs
