import React, { Component } from "react";
import {
  Form,
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Col
} from "reactstrap";
import Navbar from "./Navbar";
import Wait from "./Wait";
import Hide from "./Hide";
import { NavLink } from "react-router-dom";
import "../styles/_English.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        mathsGrade: 1,
        englishGrade: 1,
        scienceGrade: 1,
        otherGrade: 1
      },
      result: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  };

  handlePredictClick = event => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch("http://127.0.0.1:5000/prediction/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  };

  handleCancelClick = event => {
    this.setState({ result: "" });
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    var mathsGrades = [];
    for (var a = 1; a <= 8; a = +(a + 1).toFixed(1)) {
      mathsGrades.push(
        <option key={a} value={a}>
          {a}
        </option>
      );
    }
    var englishGrades = [];
    for (var b = 1; b <= 8; b = +(b + 1).toFixed(1)) {
      englishGrades.push(
        <option key={b} value={b}>
          {b}
        </option>
      );
    }
    var scienceGrades = [];
    for (var c = 1; c <= 8; c = +(c + 1).toFixed(1)) {
      scienceGrades.push(
        <option key={c} value={c}>
          {c}
        </option>
      );
    }
    var otherGrades = [];
    for (var d = 1; d <= 8; d = +(d + 1).toFixed(1)) {
      otherGrades.push(
        <option key={d} value={d}>
          {d}
        </option>
      );
    }
    return (
      <>
        <div id="main" fluid>
          <Navbar>
            <NavLink exact to="/mainpage">
              Homepage
            </NavLink>
            <NavLink exact to="/mainpage/maths">
              Maths Course
            </NavLink>
            <NavLink exact to="/mainpage/english">
              English Course
            </NavLink>
            <NavLink exact to="/mainpage/science">
              Science Course
            </NavLink>
            <NavLink id="exitButton" exact to="/">
              Exit
            </NavLink>
          </Navbar>
          <Container className="background">
            <Container>
              <h1 className="title">General Course: Enter GCSE Grades</h1>
              <div className="content">
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Maths</Label>
                        <Input
                          type="select"
                          value={formData.responseOne}
                          name="mathsGrade"
                          onChange={this.handleChange}
                        >
                          {mathsGrades}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup as={Col}>
                        <Label>English</Label>
                        <Input
                          type="select"
                          value={formData.responseTwo}
                          name="englishGrade"
                          onChange={this.handleChange}
                        >
                          {englishGrades}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Science</Label>
                        <Input
                          type="select"
                          value={formData.responseThree}
                          name="scienceGrade"
                          onChange={this.handleChange}
                        >
                          {scienceGrades}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Other</Label>
                        <Input
                          type="select"
                          value={formData.responseFour}
                          name="otherGrade"
                          onChange={this.handleChange}
                        >
                          {otherGrades}
                        </Input>
                        <div>&nbsp;</div>
                        <Label>Enter Subject Name</Label>
                        <Input type="text" name="subjectChoice"></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        block
                        variant="success"
                        disabled={isLoading}
                        onClick={!isLoading ? this.handlePredictClick : null}
                      >
                        {isLoading
                          ? "Making prediction"
                          : "Predict your most suitable course"}
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        block
                        variant="danger"
                        disabled={isLoading}
                        onClick={this.handleCancelClick}
                      >
                        Reset prediction
                      </Button>
                    </Col>
                  </Row>
                </Form>
                {result === "" ? null : (
                  <Hide hideText={2000}>
                    <Row>
                      <Col className="result-container">
                        <h5>
                          Calculating The Most Suitable Course For You, Please
                          Wait...
                        </h5>
                        <Hide hideText={2000}>
                          <div className="spinner-border"></div>
                        </Hide>
                      </Col>
                    </Row>
                  </Hide>
                )}
                <div>
                  {this.state.result === "Beginners" ? (
                    <Wait waitBeforeShow={2000}>
                      <Row>
                        <Col className="result-container">
                          <h5 id="result">
                            Course Calculated, please use the button below to
                            begin your tailored AI course
                          </h5>
                          <NavLink exact to="/mainpage/lvl-one-general">
                            <Button className="Fade">Level One Course</Button>
                          </NavLink>
                        </Col>
                      </Row>
                    </Wait>
                  ) : null}
                </div>
                <div>
                  {this.state.result === "Medium" ? (
                    <Wait waitBeforeShow={2000}>
                      <Row>
                        <Col className="result-container">
                          <h5 id="result">
                            Course Calculated, please use the button below to
                            begin your tailored AI course
                          </h5>
                          <NavLink exact to="/mainpage/lvl-two-general">
                            <Button className="Fade">Level Two Course</Button>
                          </NavLink>
                        </Col>
                      </Row>
                    </Wait>
                  ) : null}
                </div>
                <div>
                  {this.state.result === "Advanced" ? (
                    <Wait waitBeforeShow={2000}>
                      <Row>
                        <Col className="result-container">
                          <h5 id="result">
                            Course Calculated, please use the button below to
                            begin your tailored AI course
                          </h5>
                          <NavLink exact to="/mainpage/lvl-three-general">
                            <Button className="Fade">Level Three Course</Button>
                          </NavLink>
                        </Col>
                      </Row>
                    </Wait>
                  ) : null}
                </div>
              </div>
            </Container>
          </Container>
          <div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default Main;