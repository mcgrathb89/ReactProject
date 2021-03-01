import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import ImageOne from "../img/general.jpg";
import ImageTwo from "../img/maths.jpg";
import ImageThree from "../img/english.jpg";
import ImageFour from "../img/science.jpg";
import "../styles/_Card.scss";

const Example = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="cardDiv">
            <Link
              exact
              to="/mainpage/general"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <CardImg src={ImageOne} alt="Maths Equipment Image" />
                <CardBody>
                  <Link
                    exact
                    to="/mainpage/general"
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    <CardTitle>General Course</CardTitle>
                  </Link>
                  <CardSubtitle
                    style={{ fontWeight: "bold", fontStyle: "italic" }}
                  >
                    General AI Course
                  </CardSubtitle>
                  <CardText className="cardText">
                    <br />
                    Not sure what you are strong or weak at in particular? This
                    is the course for you then! This will allow you to get an idea of your strengths and weakness.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="cardDiv">
            <Link
              exact
              to="/mainpage/maths"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <CardImg src={ImageTwo} alt="Maths Equipment Image" />
                <CardBody>
                  <Link
                    exact
                    to="/mainpage/maths"
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    <CardTitle>Maths Course</CardTitle>
                  </Link>
                  <CardSubtitle
                    style={{ fontWeight: "bold", fontStyle: "italic" }}
                  >
                    Maths AI Course
                  </CardSubtitle>
                  <CardText className="cardText">
                    <br />
                    Maths is used in everyday life so its an important skill to
                    hone. This section will ask you a range of maths questions
                    to build a system most suited to your ability and style.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="cardDiv">
            <Link
              exact
              to="/mainpage/english"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <CardImg width="50%" src={ImageThree} alt="Pen and Paper" />
                <CardBody>
                  <Link
                    exact
                    to="/mainpage/english"
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    <CardTitle>English Course</CardTitle>
                  </Link>
                  <CardSubtitle
                    style={{ fontWeight: "bold", fontStyle: "italic" }}
                  >
                    English AI Course
                  </CardSubtitle>
                  <CardText className="cardText">
                    <br />
                    English is a fundamental skill in everyday life, by using
                    our AI we can determine how good you are at English. If you
                    struggle, or even if you are good at it Aimlearn will adapt.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>

          <div className="cardDiv">
            <Link
              exact
              to="/mainpage/science"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <CardImg width="50%" src={ImageFour} alt="Pen and Paper" />
                <CardBody>
                  <Link
                    exact
                    to="/mainpage/science"
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    <CardTitle>Science Course</CardTitle>
                  </Link>
                  <CardSubtitle
                    style={{ fontWeight: "bold", fontStyle: "italic" }}
                  >
                    Science AI Course
                  </CardSubtitle>
                  <CardText className="cardText">
                    <br />
                    Science may not seem like something you use everyday, but it is. From boiling a kettle to making food, it all science. With AimLearn you can unlock the scientist within you.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Example;
