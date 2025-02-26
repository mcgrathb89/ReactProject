import React from 'react';
import PropTypes from 'prop-types';
import "../styles/_Question.scss";

function Question(props) {
  return <h2 className="question">{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
