import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";
import "../styles/_Quiz.scss";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  Quiz.defaultProps = {
    link: ""
  };

  return (
    <CSSTransitionGroup
      className="testContainer"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <br />
        <div className="col text-center">
          <NavLink exact to={props.link}>
            <Button color="secondary">Return To Course</Button>
          </NavLink>
        </div>
        <br />
      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
