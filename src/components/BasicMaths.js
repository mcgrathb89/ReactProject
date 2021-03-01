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
import ImageOne from "../img/numbers.jpg";
import ImageTwo from "../img/cash-register.jpg";
import ImageThree from "../img/decimal-numbers.jpg";
import ImageFour from "../img/converting-decimals.jpg";
import ImageFive from "../img/algebra.jpg";
import ImageSix from "../img/programming.jpg";
import ImageSeven from "../img/big-data.jpg";
import ImageEight from "../img/facebook-data.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_MathsLessons.scss";

const BasicMathsCourse = () => {
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
        <h1 className="title">Level One Maths</h1>
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
                  <CardImg src={ImageOne} alt="Whole number" />
                  <CardBody>
                    <CardTitle>Whole Numbers</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Positive and Negative
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Numbers can be written in words. Both positive and
                      negative numbers can be added, subtracted, multiplied and
                      divided using rules. These rules must be applied in a
                      specific order.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="The Use of Whole Numbers"
                    url="https://www.youtube.com/watch?v=73VCLo1qxso"
                    src={ImageTwo}
                    alt='Cash register displaying the sign "Welcome to our Store"'
                    caption="We use numbers in everyday life, shopping is a prime example of that."
                  >
                    <h2>Writing Whole Numbers as Words</h2>
                    <br />
                    <p className="justifyContent">
                      Each digit in a number has a place value. It shows the
                      position of a digit in a number. The first few place
                      values are shown below.
                      <br />
                      <br />
                      Millions, Hundred thousands, Ten thousands, Thousand,
                      Hundreds, Tens, Units.
                      <br />
                      <br />
                      Numbers can be written as words using a place value table.
                      <br />
                      <br />
                      <strong>Example: </strong>
                      In the number 52,604, the digit 5 has a value of 50,000
                      (fifty thousand) and the digit 4 has the value of 4 units
                      (four).
                    </p>
                    <br />
                    <h2>Ordering Whole Numbers</h2>
                    <br />
                    <p className="justifyContent">
                      Place values are used to order whole numbers.
                      <br />
                      <br />
                      <strong>Example: </strong>
                      Which of the following four sportspeople earns more in a
                      week?
                      <br />
                      <br />
                      <ol>
                        <li>Player A - £310,500</li>
                        <li>Player B - £309,500</li>
                        <li>Player C - £295,500</li>
                        <li>Player D - £315,500</li>
                      </ol>
                      How do we figure this out? Well we have to use the columns
                      as mentioned earlier to work out which values are the
                      largest:
                      <ul>
                        <li>
                          The smallest digit in the hundred thousands column is
                          2, so Player C earns the lowest amount
                        </li>
                        <li>
                          The smallest digit in the ten thousands column is 0,
                          so Player B earns less than Players A and D
                        </li>
                        <li>
                          The smallest digit in the thousands column is 0, so
                          Player A earns less than Player D
                        </li>
                      </ul>
                    </p>
                    <h2>Adding and Subtracting Whole Numbers</h2>
                    <br />
                    <p className="justifyContent">
                      Numbers can be added together using the column method
                      which involves writing one number underneath the other.
                      <br />
                      <br />
                      <strong>Example: </strong>
                      What is 343 + 315?
                      <br />
                      <br />
                      <ol>
                        <li>
                          <strong>Step One</strong> - Start from the units
                          column: 3 + 5 = 8
                        </li>
                        <li>
                          <strong>Step Two</strong> - In the tens column: 40 +
                          10 = 50. 5 is written in the tens column as this is
                          worth 50
                        </li>
                        <li>
                          <strong>Step Three</strong> - In the hundreds column:
                          300 + 300 = 600. 6 is written in the hundreds column
                          as this is worth 600
                        </li>
                        <li>The finished sum = 658</li>
                      </ol>
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg src={ImageFour} alt="Decimal numbers" />
                  <CardBody>
                    <CardTitle>Decimal Numbers</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Values and Ordering Numbers
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Decimals are used every day, for example, when using
                      money. Knowing how to use decimal points and places when
                      adding, subtracting, dividing and multiplying is
                      important.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Working with extended number types"
                    url="https://www.youtube.com/watch?v=BItpeFXC4vA"
                    src={ImageThree}
                    alt="Cartoon depicting someone trying to convert fractions into decimals."
                    caption="Decimals can be used in conversions too like transferring fractions into decimals or the reverse of that."
                  >
                    <h2>How Decimals Work</h2>
                    <br />
                    <p className="justifyContent">
                      Decimal points are used in numbers to separate the whole
                      number from parts of the whole. Like whole numbers,
                      numbers written as decimals can be either positive or
                      negative, for example, 2.6 or -2.6. Decimals are just one
                      way of expressing numbers that are parts of wholes. These
                      numbers can also be written as fractions or percentages.
                      The number 1.5 (decimal) could also be written as 1 \frac
                      {1}
                      {2} (fraction) or 150% (percentage). They are all exactly
                      the same number. Knowledge of converting between decimals,
                      fractions and percentages is important.
                    </p>
                    <br />
                    <h2>Place Value</h2>
                    <br />
                    <p className="justifyContent">
                      Place value gives the value of each digit in a number. For
                      example, in the number 42, the 4 is worth 4 tens, or 40,
                      and the 2 is worth 2 units, or 2. The same process is true
                      for decimals. In the number 2.78, the 2 is worth two
                      units, the 7 is worth 7 tenths and the 8 is worth 8
                      hundredths. This is the same as 2 and 78 hundredths or 2
                      \frac{78}
                      {100}.
                    </p>
                    <h2>Ordering Decimals</h2>
                    <br />
                    <p className="justifyContent">
                      Ordering decimals involves comparing digits in the same
                      columns, starting with the digits in the place value
                      column that is furthest to the left.
                      <br />
                      <br />
                      <strong>Example</strong>
                      <br />
                      <br />
                      Which is greater, 2.5 or 2.15?
                      <br />
                      <br /> Firstly, both numbers have a 2 in the units column,
                      so look at the next digit along. This is the digit in the
                      first decimal place. The first number has a 5 in the
                      tenths column whereas the second number has a 1 in the
                      tenths column. 5 is greater than 1, so that means that 2.5
                      is greater than 2.15.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="mathsCardDiv">
                <Card>
                  <CardImg
                    src={ImageFive}
                    alt="Someone doing Algebra with a pencil on paper"
                  />
                  <CardBody>
                    <CardTitle>Algebra</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Algebraic Calculations
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Letters can be used to stand for unknown values or values
                      that can change. Formulas can be written and equations
                      solved to solve a range of problems in science and
                      engineering.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is Algebra?"
                    url="https://www.youtube.com/watch?v=NybHckSEQBI"
                    src={ImageSix}
                    alt="Programming language on a screen"
                    caption="Another area aside to maths where algebra is used is in programming, it can be used to store and use numbers throughout a program along with calculations."
                  >
                    <h2>Expressions</h2>
                    <br />
                    <p className="justifyContent">
                      In algebra, letters are used to stand for values that can
                      change (variables) or for values that are not known
                      (unknowns). A term is a number or letter on its own, or
                      numbers and letters multiplied together, such as - 2, 3x
                      or 5a^2. An expression is a set of terms combined using
                      the operations +, – , x or \div, for example 4x − 3 or
                      5x^2 – 3xy + 17. An equation states that two expressions
                      are equal in value, for example 4b − 2 = 6.
                    </p>
                    <br />
                    <h2>Writing Expressions</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Example</strong> <br />
                      <br />
                      Pens are sold in packs of 6 and rulers are sold in boxes
                      of 10.
                      <br />
                      <br />
                      A teacher buys p packs of pens and r boxes of rulers.
                      Write an expression for the total number of pens and
                      rulers bought.
                      <br />
                      <br />
                      Firstly, assign letters to the items: p for the number of
                      packs of pens and r for the number of boxes of rulers.
                      <br />
                      <br />
                      There are 6 pens in each pack, so the number of pens
                      bought is 6 * p which is 6p.
                      <br />
                      <br />
                      There are 10 rulers in each box, so the number of rulers
                      bought is 10 * r which is 10r.
                      <br />
                      <br />
                      The number of pens and rulers bought is 6p + 10r
                    </p>
                    <h2>Simplifying Expressions</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Collecting Like Terms</strong>
                      <br />
                      <br />
                      Collecting like terms means to simplify terms in
                      expressions in which the variables are the same. In the
                      expression 5a + 2b + 3a - 6b, the terms 5a and + 3a are
                      like terms, as are 2b and -6b.
                      <br />
                      <br />
                      Example 1 Simplify b + b + b + b.
                      <br />
                      <br />
                      Adding the four like terms together which gives 4b.
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
                    alt="Poster depicting big data and its statistics"
                  />
                  <CardBody>
                    <CardTitle>Collecting Data</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Statistics and Analysis
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Many companies and organisations collect data to improve
                      their information and products. Skills in collecting data
                      can make this process more efficient and reliable.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Working With Data"
                    url="https://www.youtube.com/watch?v=kuyt0u_tFi4"
                    src={ImageEight}
                    alt="Static"
                    caption="Data is collected in many forms, lets use Facebook as an example, they will use data to make choices, advertise specific products and recommend friends to people based upon their friends lists."
                  >
                    <h2>Types of Data</h2>
                    <br />
                    <p className="justifyContent">
                      This guide is for information only and should help you
                      understand the different types of data and how they can be
                      used. Data is a collective name for information recorded
                      for statistical purposes. There are many different types
                      of data:
                      <ul>
                        <li>
                          <strong>Qualitative data</strong> - Data that can only
                          be written in words, not numbers, for example, the
                          colours of cars in a car park
                        </li>
                        <li>
                          <strong>Quantitative data</strong> - Data that can be
                          written in numbers, for example, the heights of
                          children
                        </li>
                        <li>
                          <strong>Discrete data</strong> - Numerical data that
                          cannot be shown in decimals, for example, the number
                          of children in a classroom
                        </li>
                        <li>
                          <strong>Continuous data</strong> - Numerical data that
                          can be shown in decimals, for example, the weights of
                          10 babies
                        </li>
                        <li>
                          <strong>Primary data</strong> - Data that has been
                          collected from the original source for a specific
                          purpose, for example, if a school wanted to know what
                          their students thought of the school canteen service
                          they would question the pupils directly
                        </li>
                        <li>
                          <strong>Secondary data</strong> - Data that is not
                          originally collected by a group for a specific
                          purpose, for example, finding out the average cost of
                          cars in a car park by using national statistics
                        </li>
                      </ul>
                    </p>
                    <br />
                    <h2>Data Collection Sheets</h2>
                    <br />
                    <p className="justifyContent">
                      Data that is collected can often be from more than one
                      category. For example, data collected on children at a
                      primary school may include their gender as one category
                      and their year group as another. Two-way tables are a way
                      of sorting data so that the frequency of each category can
                      be seen quickly and easily. For example, 20 people are
                      questioned about whether they have a pet or not. The
                      results can be seen in this two-way table. From the table,
                      it can be seen that there were 9 girls and 11 boys
                      questioned. 4 girls owned pets and 5 girls did not. 9 boys
                      owned pets and 2 boys did not.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-one-maths-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to do some more work
          on your current level. We will use our AI to determine if you are
          still at the same level or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default BasicMathsCourse;
