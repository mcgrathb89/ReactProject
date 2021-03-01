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
import ImageOne from "../img/fiction.jpg";
import ImageTwo from "../img/books.jpg";
import ImageThree from "../img/numbers.jpg";
import ImageFour from "../img/cash-register.jpg";
import ImageFive from "../img/particles.jpg";
import ImageSix from "../img/SLG.jpg";
import ImageSeven from "../img/scratch.jpg";
import ImageEight from "../img/GUI.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_GeneralLessons.scss";

const BasicGeneralCourse = () => {
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
        <h1 className="title">Level One Course</h1>
        <Container>
          <br />
          <h2 style={{ textAlign: "center", color: "lightGrey" }}>
            Learning Section
          </h2>
          <br />
          <br />

          <Container>
            <Row>
              <div className="generalCardDiv">
                <Card>
                  <CardImg
                    src={ImageOne}
                    alt="Map of the land of Oz, the fictional realm that is the setting for L. Frank Baum's Oz series."
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>English:</strong> Understanding Fiction
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Fictional Storytelling
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Fiction is usually made up by the writer. Fiction texts
                      could be based on the writer’s own life experiences or
                      come from their imagination (or be a mixture of the two).
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Fictional Writing"
                    url="https://www.youtube.com/watch?v=HZuvk-leHgM"
                    src={ImageTwo}
                    alt="Bookcase filled with fiction books"
                    caption='Fiction books can be found in any library in the section marked "Fiction" they are often fantasy and made up for the readers entertainment'
                  >
                    <h2>Example of Fiction</h2>
                    <br />
                    <p className="justifyContent">
                      Nearly every type of fiction has its own created universe.
                      Many of these examples started in one category and now
                      exist in many of them. For example, Harry Potter started
                      out as a series of books then moved to movies and then
                      video games.
                    </p>
                    <br />
                    <h2>How to Write Fiction</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Show, don’t tell:</strong> This is one of the main
                      rules in fiction, and it’s also one that often gets
                      ignored. Showing rather than telling means demonstrating
                      emotions or plots through actions and reactions, not
                      through telling your readers what happened or what a
                      character felt.
                      <br />
                      <br />
                      <strong>For example:</strong> Instead of writing something
                      like "Ben was upset", which tells. Give the character
                      something to do to show the reader what’s going on eg:
                      "Ben clenched his fists and color rushed to his face".
                      This shows the reader that Ben’s upset without having to
                      tell them.
                    </p>
                    <h2>Parts of fiction</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Characters</strong>
                      <br />
                      <br />
                      In fiction, there are always characters. There is usually
                      a protagonist, or hero. Sometimes this is a group of
                      people, not one person. You usually support the hero (or
                      heroes.) The protagonist has to face some kind of enemy,
                      usually another character called the antagonist. The fight
                      between the protagonist and their enemy is called the
                      conflict.
                      <br />
                      <br />
                      <strong>Plot</strong>
                      <br />
                      <br />
                      <strong>Climax</strong>
                      <br />
                      <br />
                      The climax is the most dangerous and exciting part of the
                      plot. For example, if you were on a rollercoaster, the
                      highest part would be the climax. The climax usually near
                      to the end of the story, because the whole story has been
                      building up to it (rising action). In an action drama it
                      is the point when the hero or heroine looks like s/he is
                      about to lose, and is in the greatest danger.
                      <br />
                      <br />
                      <strong>Conflict</strong>
                      <br />
                      <br />
                      Conflict is very important in fiction. Every work of
                      fiction needs a conflict, or problem. There are five basic
                      types of conflict. In modern times, a new one, "Person vs.
                      Technology", has been used.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="generalCardDiv">
                <Card>
                  <CardImg src={ImageThree} alt="Whole number" />
                  <CardBody>
                    <CardTitle>
                      <strong>Maths:</strong> Working With Whole Numbers
                    </CardTitle>
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
                    src={ImageFour}
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

              <div className="generalCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Particles" />
                  <CardBody>
                    <CardTitle>
                      <strong>Science:</strong> The Basics of Particles
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Solids, Liquids and Gases
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The particle theory of matter is a model that describes
                      the arrangement and movement of particles in a substance.
                      The model is used to explain solids, liquids and gases.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Solid, Liquid and Gas"
                    url="https://www.youtube.com/watch?v=fnsChuaR_qI"
                    src={ImageSix}
                    alt="Diagram of Particle Formation in Solid, Liquids and Gasses"
                    caption="As it can be seen above the particles will be closer if in solid form, flow more  freely in liquid form and be free flowing in gas form."
                  >
                    <h2>Solids</h2>
                    <br />
                    <p className="justifyContent">
                      Have a fixed volume and a fixed shape cannot flow, because
                      their particles cannot move from place to place cannot be
                      easily compressed, because their particles are close
                      together with no space to move into.
                    </p>
                    <br />
                    <h2>Liquids</h2>
                    <br />
                    <p className="justifyContent">
                      Have a fixed volume but no fixed shape can flow and take
                      the shape of their container, because their particles can
                      move around each other cannot be easily compressed,
                      because their particles are close together with no space
                      to move into.
                    </p>
                    <h2>Gases</h2>
                    <br />
                    <p className="justifyContent">
                      Have no fixed shape or volume can flow and completely fill
                      their container, because their particles move quickly in
                      all directions can be compressed, because their particles
                      are far apart with space to move into.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="generalCardDiv">
                <Card>
                  <CardImg
                    src={ImageSeven}
                    alt="Scratch Programming Language Logo"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Computing:</strong> Programming With Scratch
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Graphical Programming Languages
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Scratch is a block-based visual programming language and
                      online community. Users of the site can create online
                      projects using a block-like interface.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Programming wih Scratch"
                    url="https://www.youtube.com/watch?v=VIpmkeqJhmQ&t=1s"
                    src={ImageEight}
                    alt="Image of the Scratch Graphical User Interface"
                    caption="As it can be seen above it is much easier to learn how to code using something more visual like scratch rather than blocks of hand typed code when starting out in programming."
                  >
                    <h2>User Interface</h2>
                    <br />
                    <p className="justifyContent">
                      The area where the user can interact with is called the
                      stage area. The stage area features all of the animations,
                      graphics, drawings, and among other visual features. The
                      list of sprites (characters) on screen are placed below
                      the stage area to show a list of sprites that are usable
                      for the program.
                    </p>
                    <br />
                    <h2>Community of Users</h2>
                    <br />
                    <p className="justifyContent">
                      Scratch is used in many different settings: schools,
                      museums, libraries, community centers, and homes. Although
                      Scratch's main user age group is 8–18 years of age,
                      Scratch has also been created for educators and parents.
                      This wide outreach has created many surrounding
                      communities, both physical and digital
                    </p>
                    <h2>Scratch Wiki</h2>
                    <br />
                    <p className="justifyContent">
                      The Scratch Wiki is a support resource for Scratch and its
                      website, history, and phenomena surrounding it. Although
                      supported by the Scratch Team (developers of Scratch), it
                      is primarily written by Scratchers (users of Scratch) for
                      information regarding projects and things that interest
                      users.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-one-general-quiz">
          This is the section where you can take a test to determine what areas
          you are strongest and weakest in, you may be brilliant at maths but
          struggle in english, this course will give a general idea as to what
          your strengths and weaknesses are so that you can choose the right
          course going forward.
        </TestSection>
      </div>
    </>
  );
};

export default BasicGeneralCourse;
