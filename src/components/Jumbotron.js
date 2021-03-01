import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "../styles/_Jumbotron.scss";

function Tron() {
  return (
    <Container fluid style={{width: "75%"}}>
      <Row>
        <Col sm={6}>
          <Jumbotron>
            <h2 className="CenterText">How Does it Work?</h2>
            <p className="JustifyText">
              Behind the scenes we are using a process called a decision tree.
              How you interact with the system will determine how the system
              works for you. Essentially the system learns as you are learning
              and uses the knowledge it has gained to give you an experience
              which is unique and useful to you.
            </p>
          </Jumbotron>
        </Col>
        <Col md={6}>
          <Jumbotron>
            <h2 className="CenterText">Where Do I Start?</h2>
            <p className="JustifyText">
              At the top left hand corner, there is a menu navigation system, alternatively you can click on the links above.
              The questions asked will help decide how to build the system around you. That's where we differ from other learning systems, we adjust to your needs, not the other way round. That's how we make learning unique.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Tron;
