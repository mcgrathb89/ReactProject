import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import Cards from "./Card";
import Navbar from "./Navbar";
import "../styles/_MainPage.scss";
import "../styles/_Background.scss";

class Main extends Component {
  render() {
    return (
      <>
        <div id="main">
          <div>
            <br /><br />
            <h1 className="headingstyle">AimLearn: Together We Learn More</h1>
            <br />
            <Navbar>
              <NavLink exact to="/mainpage/general">
                General Course
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
            <div style={{width: "75%", margin: "0 auto" }}>
              <Carousel fluid />
            </div>
            <br />
            <br /> <br />
            <Cards />
            <br />
            <br />
            <br />
            <Jumbotron />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
