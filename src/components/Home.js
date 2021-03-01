import React, { Component } from "react";
import design from "../img/SmallLogo.png";
import { Form, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/_LoginPage.scss";

class LoginFrm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`Welcome ${email} password: ${password}`);
  };

  render() {
    const { email, password } = this.state;
    const enabled = email.length > 0 && password.length > 0;
    return (
      <>
        <div className="App" fluid>
          <header className="App-header">
            <img src={design} className="App-logo" alt="logo" />
            <br />
            <p id="SplashPageText">Welcome to AimLearn: Please Login</p>
            <br />
            <Form onSubmit={this.handleSubmit} inline>
              <div className="form-group">
                <Label className="Label-Colour">Email: &nbsp;</Label>
                <Input
                  type="text"
                  placeholder="Email..."
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  required
                />
                <div>&nbsp;&nbsp;&nbsp;</div>
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password..."
                  required
                />
                <div>&nbsp;&nbsp;&nbsp;</div>
                <Link to="/mainpage">
                  <Button type="button" disabled={!enabled}>
                    Submit
                  </Button>
                </Link>
              </div>
            </Form>
          </header>
        </div>
      </>
    );
  }
}

export default LoginFrm;
