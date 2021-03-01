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
import { NavLink } from "react-router-dom";
import Wait from "./Wait";
import Hide from "./Hide";
import "../styles/_Maths.scss";

class MathsCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        mathsGrade: 1
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
    fetch("http://127.0.0.1:8000/prediction/", {
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

    var mathsGrade = [];
    for (var a = 1; a <= 8; a = +(a + 1).toFixed(1)) {
      mathsGrade.push(
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
              <h1 className="title">Maths Course: Enter GCSE Grade</h1>
              <div className="content">
                <Form>
                  <Col>
                    <FormGroup>
                      <Label className="MathsLabel">Maths Grade 1-8</Label>
                      <Input
                        type="select"
                        value={formData.responseOne}
                        name="mathsGrade"
                        onChange={this.handleChange}
                      >
                        {mathsGrade}
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
                          <NavLink exact to="/mainpage/lvl-one-maths">
                            <Button className="Fade">Level One Maths</Button>
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
                          <NavLink exact to="/mainpage/lvl-two-maths">
                            <Button className="Fade">Level Two Maths</Button>
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
                          <NavLink exact to="/mainpage/lvl-three-maths">
                            <Button className="Fade">Level Three Maths</Button>
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

export default MathsCourse;