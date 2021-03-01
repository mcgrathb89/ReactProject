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

class EnglishCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        englishGrade: 1
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
    fetch("http://127.0.0.1:7000/prediction/", {
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

    var englishGrade = [];
    for (var a = 1; a <= 8; a = +(a + 1).toFixed(1)) {
      englishGrade.push(
        <option key={a} value={a}>
          {a}
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
            <NavLink exact to="/mainpage/general">
              General Course
            </NavLink>
            <NavLink exact to="/mainpage/maths">
              Maths Course
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
              <h1 className="title">English Course: Enter GCSE Grade</h1>
              <div className="content">
                <Form>
                  <Col>
                    <FormGroup>
                      <Label className="EnglishLabel">English Grade 1-8</Label>
                      <Input
                        type="select"
                        value={formData.responseOne}
                        name="englishGrade"
                        onChange={this.handleChange}
                      >
                        {englishGrade}
                      </Input>
                    </FormGroup>
                  </Col>
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
                          <NavLink exact to="/mainpage/lvl-one-english">
                            <Button className="Fade">Level One English</Button>
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
                          <NavLink exact to="/mainpage/lvl-two-english">
                            <Button className="Fade">Level Two English</Button>
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
                          <NavLink exact to="/mainpage/lvl-three-english">
                            <Button className="Fade">Level Three English</Button>
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

export default EnglishCourse;