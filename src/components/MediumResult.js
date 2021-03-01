import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import Wait from "./Wait";
import Hide from "./Hide";
import "../styles/_Result.scss";

function Result(props) {
  Result.defaultProps = {
    correctResponseCourseLink: "",
    incorrectResponseCourseLink: "",
    currentCourseLink: "",
    incorrectMessage: "",
    correctMessage: "",
    mixedMessage: ""
  };

  return (
    <CSSTransitionGroup
      className="testContainer result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <Hide hideText={3000}>
        <Row>
          <Col className="result-container">
            <h5>Calculating Your Test Scores, Please Wait...</h5>
            <Hide hideText={3000}>
              <div className="spinner-border"></div>
            </Hide>
          </Col>
        </Row>
      </Hide>
      <div>
        {props.quizResult === "Incorrect" ? (
          <Wait waitBeforeShow={3000}>
            <div className="col text-center">
              Your Answers Were <strong>{props.quizResult}</strong>:
              <br />
              <br />
              {props.incorrectMessage}
            </div>
            <br />
            <br />
            <NavLink exact to={props.incorrectResponseCourseLink}>
              <Button className="col text-center" color="secondary">
                Level One Course
              </Button>
            </NavLink>
            <br />
            <br />
            <NavLink exact to={props.currentCourseLink}>
              <Button className="col text-center" color="secondary">
                Level Two Course
              </Button>
            </NavLink>
          </Wait>
        ) : null}
      </div>
      <div>
        {props.quizResult === "Correct" ? (
          <Wait waitBeforeShow={3000}>
            <div className="col text-center">
              Your Answers Were <strong>{props.quizResult}</strong>:
              <br />
              <br />
              {props.correctMessage}
            </div>
            <br />
            <br />
            <NavLink exact to={props.correctResponseCourseLink}>
              <Button className="col text-center" color="secondary">
                Level Three Course
              </Button>
            </NavLink>
          </Wait>
        ) : null}
      </div>
      <div>
        {props.quizResult === "Mixed" ? (
          <Wait waitBeforeShow={3000}>
            <div className="col text-center">
              Your Answers Were <strong>{props.quizResult}</strong>:
              <br />
              <br />
              {props.mixedMessage}
            </div>
            <br />
            <br />
            <NavLink exact to={props.incorrectResponseCourseLink}>
              <Button className="col text-center" color="secondary">
                Level One Course
              </Button>
            </NavLink>
            <br />
            <br />
            <NavLink exact to={props.currentCourseLink}>
              <Button className="col text-center" color="secondary">
                Level Two Course
              </Button>
            </NavLink>
          </Wait>
        ) : null}
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
