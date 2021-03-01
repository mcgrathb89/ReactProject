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
import ImageOne from "../img/calculator.jpg";
import ImageTwo from "../img/money.jpg";
import ImageThree from "../img/equation.jpg";
import ImageFour from "../img/multi-algebra.jpg";
import ImageFive from "../img/cards.jpg";
import ImageSix from "../img/dice.jpg";
import ImageSeven from "../img/percentages.jpg";
import ImageEight from "../img/percentage-calculator.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_MathsLessons.scss";

const MediumMathsCourse = () => {
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
        <h1 className="title">Level Two Maths</h1>
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
                  <CardImg
                    src={ImageOne}
                    alt="Calculator with tax button added."
                  />
                  <CardBody>
                    <CardTitle>Financial Mathematics</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Financial Calculations
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Financial maths is needed for all jobs, from calculating
                      wages to working out profit, loss and VAT. Knowledge of
                      financial maths is also required to be able to understand
                      savings.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Fundamentals of Financial Mathematics"
                    url="https://www.youtube.com/watch?v=NQfw-3_Ol60"
                    src={ImageTwo}
                    alt="A fan of 20 pound notes being held on a white background."
                    caption="Understanding finance in mathematics will allow you to be able to work with money much more effectively and is therefore a vital life skill."
                  >
                    <h2>Profit and Loss</h2>
                    <br />
                    <p className="justifyContent">
                      In its simplest sense, profit is the money made after
                      expenses. If the expenses are more than the money received
                      then it's considered a loss. A profit is a positive number
                      and a loss is a negative number.
                    </p>
                    <br />
                    <h2>Wages and salaries</h2>
                    <br />
                    <p className="justifyContent">
                      Wages are paid by an employer to their staff in return for
                      work. Wages are usually paid weekly or monthly. They are
                      either calculated on a rate of pay per hour or as an
                      annual salary. In Britain, people should be paid at least
                      the minimum wage rate set by the government. The value of
                      the minimum age varies depending on whether the person
                      working is an apprentice, under the age of 18, or an
                      adult. If a person earns £5.52 and works 10 hours per
                      week, they would earn £55.20.
                    </p>
                    <h2>Salary and Pay</h2>
                    <br />
                    <p className="justifyContent">
                      Salary and pay Salary usually refers to the amount of
                      money a person earns over a year. For example, if a shop
                      assistant has a salary of £18,000 per year, his/her
                      monthly pay would be £1,500 ( £18,000 \ 12 months). £1,500
                      is the gross pay.
                      <br />
                      <br />
                      Gross pay is the full amount paid to an employee before
                      any deductions are made. Deductions are income tax,
                      national insurance and sometimes pension contributions.
                      Net pay is what's left after deductions have been made
                      from gross pay. This is the amount an employee actually
                      receives.
                      <br />
                      <br />
                      <strong>Example</strong>
                      <br />
                      If the shop assistant has to pay tax at a rate of 20% and
                      has to pay £100 national insurance then what is his/her
                      net pay?
                      <br />
                      <br />
                      Tax to pay = £1,500* 0.2 = £300
                      <br />
                      <br />
                      National insurance deduction = £100
                      <br />
                      <br />
                      Net pay = £1,500 - £ 300 - £100 = £1,100
                      <br />
                      <br />
                      £1,100 is their net or 'take home' pay.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="mathsCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="Two-dimensional plot graph (showing a red curve) of an algebraic equation."
                  />
                  <CardBody>
                    <CardTitle>Simultaneous Equations</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Solving Simultaneous Equations
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Simultaneous equations require algebraic skills to find
                      the values of letters within two or more equations. They
                      are solved at the same time.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is a Simultaneous Equation?"
                    url="https://www.youtube.com/watch?v=Lwto-lQzmec"
                    src={ImageFour}
                    alt="Multiplying Binomials Chart"
                    caption="Algebra can look confusing at times, but its important to remember that it follows a logical structure when you study it closely enough."
                  >
                    <h2>Simultaneous equations</h2>
                    <br />
                    <p className="justifyContent">
                      Equations that have more than one unknown can have an
                      infinite number of solutions. For example, 2x + y = 10
                      could be solved by:
                      <br />
                      <br />
                      x = 1 and y = 8
                      <br />
                      <br />
                      x = 2 and y = 6
                      <br />
                      <br />
                      x = 3 and y = 4
                      <br />
                      <br />
                      However, if the solution is to work for another equation
                      at the same time (simultaneously), then there will be just
                      one answer. Solving simultaneous equations finds that
                      answer.
                      <br />
                      <br />
                      An example of a pair of simultaneous equations is:
                      <br />
                      <br />
                      3x + y = 11 and 2x + y = 8
                      <br />
                      <br />
                      Solving the equations simultaneously will give the unique
                      pair of values for x and y that work for both equations at
                      the same time.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Deck of Cards" />
                  <CardBody>
                    <CardTitle>Probability</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Probability Scale
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Probabilities can be written as fractions, decimals or
                      percentages on a scale from 0 to 1. Knowing basic facts
                      about equally likely outcomes can help to solve more
                      complicated problems.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How Probability Works"
                    url="https://www.youtube.com/watch?v=KzfWUEJjG18"
                    src={ImageSix}
                    alt="Set of Dice"
                    caption="Probability can determine the outcome of the roll of a dice, knowing probability can help give the upper hand in any situations where dice are involved such as a board game!"
                  >
                    <h2>Probability and the Probability Scale</h2>
                    <br />
                    <p className="justifyContent">
                      Probability is about estimating or calculating how likely
                      or probable something is to happen. Probabilities can be
                      described in words. For example, the chance of an event
                      happening could be ‘certain’, ‘impossible’ or ‘likely’.
                      <br />
                      <br />
                      <strong>The probability scale </strong>
                      <br />
                      <br />
                      An event which is impossible has a probability of 0 and an
                      event which is certain has a probability of 1. This means
                      probabilities cannot be bigger than 1. This can be shown
                      on a probability scale.
                    </p>
                    <br />
                    <h2>Finding Probability</h2>
                    <br />
                    <p className="justifyContent">
                      Think about a dice. When a dice is rolled there are six
                      possible outcomes: 1, 2, 3, 4, 5 and 6. To find the
                      probability of the event of rolling a 4, find the number
                      of possible ways of rolling a 4 and divide it by the total
                      number of possible outcomes.
                    </p>
                    <h2>Probability of Events not Happening</h2>
                    <br />
                    <p className="justifyContent">
                      Events that cannot happen at the same time are called
                      mutually exclusive events. For example, a football team
                      can win, lose or draw but these things cannot happen at
                      the same time - they are mutually exclusive. Since it is
                      certain that one of these outcomes will happen, their
                      probabilities must add up to 1.
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
                    alt="Romeo and Juliet Novel Image"
                  />
                  <CardBody>
                    <CardTitle>Percentages</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Calculating Percentages
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Percentages are used in everyday life, for example,
                      calculating discounts during sales and interest rates at
                      banks. Knowing how to find and use percentages is an
                      important skill.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Working With Percentages"
                    url="https://www.youtube.com/watch?v=JeVSmq1Nrpw"
                    src={ImageEight}
                    alt="Online percentage calculator."
                    caption="Plenty of calculators exist which can help calculate percentage specifically, but knowing the steps yourself can save time and additional effort!."
                  >
                    <h2>Finding a Percentage</h2>
                    <br />
                    <p className="justifyContent">
                      A percentage is a proportion that shows a number as parts
                      per hundred. The symbol '%' means 'per cent'. 9% means 9
                      out of every 100.
                      <br />
                      <br />
                      Percentages are just one way of expressing numbers that
                      are part of a whole. These numbers can also be written as
                      fractions or decimals. 50% can also be written as a
                      fraction, or a decimal. They are all exactly the same
                      amount.
                    </p>
                    <br />
                    <h2>Calculating Percentages of Amounts</h2>
                    <br />
                    <p className="justifyContent">
                      Percentages of amounts can be calculated by writing the
                      percentage as a fraction or decimal and then multiplying
                      it by the amount in question.
                      <br />
                      <br />
                      Another way is to times by a decimal eg:
                      <br />
                      <br />
                      <strong>Calculating 20% of £12</strong>
                      <br />
                      <br />
                      £12 * 0.2 (which is the same as 20%) = £2.40
                    </p>
                    <h2>Increasing and Decreasing an Amount by a Percentage</h2>
                    <br />
                    <p className="justifyContent">
                      To increase or decrease an amount by a percentage, first
                      calculate the percentage of the amount and then either add
                      this answer on to increase the quantity, or subtract this
                      answer to decrease the quantity.
                      <br />
                      <br />
                      If you look at the previous section where we calculated
                      20% of £12 as an example and got £2.40 as our result, in
                      order to increase/decrease the value based upon the 20%,
                      we can just add or subtract that £2.40 from our £12
                      depending on whether we wish to add the value of 20% (eg
                      including British VAT on an item) or remove it (eg a 20%
                      off sale).
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-two-maths-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to return to maths
          level one and brush up on your foundational knowledge. We will use our
          AI to determine if you are still at the same level, need to go back to
          basics or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default MediumMathsCourse;