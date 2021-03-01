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
import { NavLink } from "react-router-dom";
import ImageOne from "../img/sine-cosine.jpg";
import ImageTwo from "../img/hipparchus.jpg";
import ImageThree from "../img/exponent-function.jpg";
import ImageFour from "../img/base-1-2.jpg";
import ImageFive from "../img/tangent-curve.jpg";
import ImageSix from "../img/linear-function.jpg";
import ImageSeven from "../img/integrals.jpg";
import ImageEight from "../img/integral-approximations.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_MathsLessons.scss";

const AdvancedMathsCourse = () => {
  return (
    <>
      <div id="main" fluid>
        <Navbar>
          <NavLink exact to="/mainpage">
            Homepage
          </NavLink>
          <NavLink id="exitButton" exact to="/">
            Exit
          </NavLink>
        </Navbar>
        <h1 className="title">Level Three Maths</h1>
        <Container>
          <br />
          <h2 style={{ textAlign: "center", color: "lightGrey" }}>
            Learning Section
          </h2>
          <br />
          <br />

          <Container>
            <Row>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg src={ImageOne} alt="Sine/Cosine Representation" />
                  <CardBody>
                    <CardTitle>Trigonometry</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Lengths and Angles
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Trigonometry is a branch of mathematics that studies
                      relationships between side lengths and angles of
                      triangles.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Principles of Trigonometry"
                    url="https://www.youtube.com/watch?v=PUB0TaZ7bhA"
                    src={ImageTwo}
                    alt="Image of Hipparchus"
                    caption='Hipparchus, credited with compiling the first trigonometric table, has been described as "the father of trigonometry"'
                  >
                    <h2>Mnemonics</h2>
                    <br />
                    <p className="justifyContent">
                      A common use of mnemonics is to remember facts and
                      relationships in trigonometry. For example, the sine,
                      cosine, and tangent ratios in a right triangle can be
                      remembered by representing them and their corresponding
                      sides as strings of letters. For instance, a mnemonic is
                      SOH-CAH-TOA:
                      <br />
                      <br />
                      Sine = Opposite ÷ Hypotenuse
                      <br />
                      <br />
                      Cosine = Adjacent ÷ Hypotenuse
                      <br />
                      <br />
                      Tangent = Opposite ÷ Adjacent
                      <br />
                      <br />
                      One way to remember the letters is to sound them out
                      phonetically (i.e., SOH-CAH-TOA, which is pronounced
                      'so-ka-toe-uh' /soʊkæˈtoʊə/). Another method is to expand
                      the letters into a sentence, such as "Some Old Hippie
                      Caught Another Hippie Trippin' On Acid
                    </p>
                    <br />
                    <h2>The Unit Circle and Common Trigonometric Values</h2>
                    <br />
                    <p className="justifyContent">
                      Trigonometric ratios can also be represented using the
                      unit circle, which is the circle of radius 1 centered at
                      the origin in the plane. In this setting, the terminal
                      side of an angle A placed in standard position will
                      intersect the unit circle in a point (x,y), where x= cos A
                      and y = sin A.
                    </p>
                    <h2>Inverse Trigonometric Functions</h2>
                    <br />
                    <p className="justifyContent">
                      Because the six main trigonometric functions are periodic,
                      they are not injective (or, 1 to 1), and thus are not
                      invertible. By restricting the domain of a trigonometric
                      function, however, they can be made invertible.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg src={ImageThree} alt="Exponent Function Diagram" />
                  <CardBody>
                    <CardTitle>Exponential Function</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Real Numbers
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      An exponential function is a function of the form where is
                      a positive real number, and in which the argument occurs
                      as an exponent.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is the Exponential Function?"
                    url="https://www.youtube.com/watch?v=lIQMv2jrhW4"
                    src={ImageFour}
                    alt="Exponential Functions Chart"
                    caption="Exponential functions with bases 2 and 1/2."
                  >
                    <h2>Formal Definition</h2>
                    <br />
                    <p className="justifyContent">
                      The real exponential function exp: r > r can be
                      characterized in a variety of equivalent ways. Most
                      commonly, it is defined by the power series.
                    </p>
                    <br />
                    <h2>Overview</h2>
                    <br />
                    <p className="justifyContent">
                      The exponential function arises whenever a quantity grows
                      or decays at a rate proportional to its current value. One
                      such situation is continuously compounded interest, and in
                      fact it was this observation that led Jacob Bernoulli in
                      1683 to the number now known as e.
                      <br />
                      <br />
                      Later, in 1697, Johann Bernoulli studied the calculus of
                      the exponential function.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Tangent Curve Diagram" />
                  <CardBody>
                    <CardTitle>Differentiation</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Function Values
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The derivative of a function of a real variable measures
                      the sensitivity to change of the function value with
                      respect to a change in its argument.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Key Concepts of Differentiation"
                    url="https://www.youtube.com/watch?v=rAof9Ld5sOg"
                    src={ImageSix}
                    alt="Linear Function Diagram"
                    caption="Slope of a linear function."
                  >
                    <h2>Notation</h2>
                    <br />
                    <p className="justifyContent">
                      Two distinct notations are commonly used for the
                      derivative, one deriving from Leibniz and the other from
                      Joseph Louis Lagrange. In Leibniz's notation, an
                      infinitesimal change in x is denoted by dx, and the
                      derivative of y with respect to x is written suggesting
                      the ratio of two infinitesimal quantities.
                    </p>
                    <h2>Rigorous Definition</h2>
                    <br />
                    <p className="justifyContent">
                      The most common approach to turn this intuitive idea into
                      a precise definition is to define the derivative as a
                      limit of difference quotients of real numbers. This is the
                      approach described below.
                      <br />
                      <br />
                      Let f be a real valued function defined in an open
                      neighborhood of a real number a. In classical geometry,
                      the tangent line to the graph of the function f at a was
                      the unique line through the point (a, f(a)) that did not
                      meet the graph of f transversally, meaning that the line
                      did not pass straight through the graph. The derivative of
                      y with respect to x at a is, geometrically, the slope of
                      the tangent line to the graph of f at (a, f(a)). The slope
                      of the tangent line is very close to the slope of the line
                      through (a, f(a)) and a nearby point on the graph, for
                      example (a + h, f(a + h)). These lines are called secant
                      lines. A value of h close to zero gives a good
                      approximation to the slope of the tangent line, and
                      smaller values (in absolute value) of h will, in general,
                      give better approximations.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="mathsCardDiv">
                <Card>
                  <CardImg
                    src={ImageSeven}
                    alt="A definite integral of a function can be represented as the signed area of the region bounded by its graph."
                  />
                  <CardBody>
                    <CardTitle>Integrals</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Infinitesimal Data.
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      In mathematics, an integral assigns numbers to functions
                      in a way that can describe displacement, area, volume, and
                      other concepts that arise by combining infinitesimal data.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Working with Integrals"
                    url="https://www.youtube.com/watch?v=o75AqTInKDU"
                    src={ImageEight}
                    alt="Integral Approximation Chart"
                    caption="Approximations to integral of √x from 0 to 1, with 5 (yellow) right endpoint partitions and 12 (green) left endpoint partitions."
                  >
                    <h2>Applications</h2>
                    <br />
                    <p className="justifyContent">
                      Integrals are used extensively in many areas of
                      mathematics as well as in many other areas that rely on
                      mathematics.
                      <br />
                      <br />
                      For example, in probability theory, integrals are used to
                      determine the probability of some random variable falling
                      within a certain range. Moreover, the integral under an
                      entire probability density function must equal 1, which
                      provides a test of whether a function with no negative
                      values could be a density function or not.
                    </p>
                    <br />
                    <h2>Standard</h2>
                    <br />
                    <p className="justifyContent">
                      The integral sign ∫ represents integration. The symbol dx,
                      called the differential of the variable x, indicates that
                      the variable of integration is x. The function f(x) to be
                      integrated is called the integrand. The symbol dx is
                      separated from the integrand by a space (as shown). A
                      function is said to be integrable if the integral of the
                      function over its domain is finite. The points a and b are
                      called the limits of the integral. An integral where the
                      limits are specified is called a definite integral.
                    </p>
                    <h2>Meaning of the Symbol dx</h2>
                    <br />
                    <p className="justifyContent">
                      Historically, the symbol dx was taken to represent an
                      infinitesimally "small piece" of the independent variable
                      x to be multiplied by the integrand and summed up in an
                      infinite sense. While this notion is still heuristically
                      useful, later mathematicians have deemed infinitesimal
                      quantities to be untenable from the standpoint of the real
                      number system. In introductory calculus, the expression
                      dx is therefore not assigned an independent meaning;
                      instead, it is viewed as part of the symbol for
                      integration and serves as its delimiter on the right side
                      of the expression being integrated.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-three-maths-quiz">
          This is the section where you can take a test to determine if you are
          beyond the GCSE level three skill level or if you need to return to
          maths level two and brush up on additional core knowledge. We will use
          our AI to determine if you are still at the same level, need to revise
          core knowledge or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default AdvancedMathsCourse;
