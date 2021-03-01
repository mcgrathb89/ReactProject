import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import QuizQuestions from "../api/MathsLevelThreeQuestions";
import Quiz from "./Quiz";
import Result from "./AdvancedResult";
import Navbar from "./Navbar";
import "../styles/_GeneralQuiz.scss";

class MathsLevelThreeQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = QuizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < QuizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: QuizQuestions[counter].question,
      answerOptions: QuizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Mixed" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={QuizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        link="/mainpage/lvl-three-maths"
      />
    );
  }

  renderResult() {
    return (
      <Result
        homeLink="/mainpage"
        levelFourCourseInfoLink="/mainpage"
        incorrectResponseCourseLink="/mainpage/lvl-two-maths"
        currentCourseLink="/mainpage/lvl-three-maths"
        incorrectMessage="You Seem to Be Having Some Trouble On This Course. Using the Level Two Course will allow you to revise some of the core materials again and get back to grips with the core content. Alternatively you can return to your current course below to continue with your revision. Click one of the buttons below and choose a course."
        correctMessage="It seems like you are ready for a challenge beyond even that of Level Three! It would be worth looking into level 4 courses to challenge yourself even further. Of course there is also the option to access our English, Maths or Science courses if you wish to improve further in a set area too. Use the button below to return to the homepage and look at your options or the other button to look at information on level 4 courses."
        mixedMessage="This means that you are getting some answers right and some wrong, it is still recommended you continue with the learning content on the course you was on but if you want to build your core knowledge you can return to the level two course too. Click one of the buttons below and choose a course."
        quizResult={this.state.result}
      />
    );
  }

  render() {
    return (
      <div id="main" fluid>
        <Navbar>
          <NavLink exact to="/mainpage">
            Homepage
          </NavLink>
          <NavLink id="exitButton" exact to="/">
            Exit
          </NavLink>
        </Navbar>
        <div className="quizTitle">
          <h1>Level Three Maths Quiz</h1>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default MathsLevelThreeQuiz;
