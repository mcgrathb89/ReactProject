import React from "react";
import { Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import "../styles/_AnswerOption.scss";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <Input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <Label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </Label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
