import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/_TestJumbotron.scss";

const Jumbo = props => {
  Jumbo.defaultProps = {
    link: ""
  };
  return (
    <div className="alignColumn">
      <Jumbotron >
        <Container fluid>
          <h1 className="display-3">Test Section</h1>
          <br />
          <p className="lead">{props.children}</p>
        </Container>
        <br />
        <div className="col text-left">
          <NavLink exact to={props.link}>
            <Button>Start Test</Button>
          </NavLink>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
