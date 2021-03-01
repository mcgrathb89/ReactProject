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
import ImageOne from "../img/sociolinguistics.jpg";
import ImageTwo from "../img/context.jpg";
import ImageThree from "../img/sine-cosine.jpg";
import ImageFour from "../img/hipparchus.jpg";
import ImageFive from "../img/respiration.jpg";
import ImageSix from "../img/krebs-cycle.jpg";
import ImageSeven from "../img/binary.jpg";
import ImageEight from "../img/binary-and-people.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_GeneralLessons.scss";

const AdvancedGeneralCourse = () => {
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
        <h1 className="title">Level Three Course</h1>
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
                  <CardImg src={ImageOne} alt="Sociolinguistics book." />
                  <CardBody>
                    <CardTitle>
                      <strong>English:</strong> Sociolinguistics and its Impact
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Language Varieties
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The descriptive study of the effect of any and all aspects
                      of society, including cultural norms, expectations, and
                      context.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Why do we need to study language in relation to society?"
                    url="https://www.youtube.com/watch?v=Luq8I3iCNMA"
                    src={ImageTwo}
                    alt="Roman Jakobsen Theory Diagram"
                    caption="Roman Jakobsen Theory Diagram: The six factors of an effective verbal communication. Each one corresponds a communication function."
                  >
                    <h2>Applications</h2>
                    <br />
                    <p className="justifyContent">
                      For example, a sociolinguist might determine through study
                      of social attitudes that a particular vernacular would not
                      be considered appropriate language use in a business or
                      professional setting. Sociolinguists might also study the
                      grammar, phonetics, vocabulary, and other aspects of this
                      sociolect much as dialectologists would study the same for
                      a regional dialect.
                    </p>
                    <br />
                    <h2>Traditional Sociolinguistic Interview</h2>
                    <br />
                    <p className="justifyContent">
                      The sociolinguistic interview is an integral part of
                      collecting data for sociolinguistic studies. There is an
                      interviewer, who is conducting the study, and a subject,
                      or informant, who is the interviewee. In order to get a
                      grasp on a specific linguistic form and how it is used in
                      the dialect of the subject, a variety of methods are used
                      to elicit certain registers of speech. There are five
                      different styles, ranging from formal to casual.
                    </p>
                    <h2>Speech Community</h2>
                    <br />
                    <p className="justifyContent">
                      Speech community is a concept in sociolinguistics that
                      describes a distinct group of people who use language in a
                      unique and mutually accepted way among themselves. This is
                      sometimes referred to as a Sprechbund.
                      <br />
                      <br />
                      To be considered part of a speech community, one must have
                      a communicative competence. That is, the speaker has the
                      ability to use language in a way that is appropriate in
                      the given situation. It is possible for a speaker to be
                      communicatively competent in more than one language.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="generalCardDiv">
                <Card>
                  <CardImg src={ImageThree} alt="Sine/Cosine Representation" />
                  <CardBody>
                    <CardTitle>
                      <strong>Maths:</strong> Trigonometry and its Methods
                    </CardTitle>
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
                    src={ImageFour}
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

              <div className="generalCardDiv">
                <Card>
                  <CardImg
                    src={ImageFive}
                    alt="Lungs/Diagram explaining respiration"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Science:</strong> Respiration and its Purpose
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      The Respiratory System
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Respiration releases energy from glucose so that life
                      processes can carry on. Aerobic respiration needs oxygen
                      but anaerobic respiration does not. This is adapted for
                      gas exchange.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Cycles Dictating Respiratory Patterns in Living Organisms"
                    url="https://www.youtube.com/watch?v=E9jOPUSg-As"
                    src={ImageSix}
                    alt="Krebs Cycle"
                    caption="The image above demonstrates the Krebs Cycle"
                  >
                    <h2>Aerobic Respiration - Glycolysis</h2>
                    <br />
                    <p className="justifyContent">
                      Glycolysis is the metabolic pathway that converts glucose
                      C6H12O6, into pyruvate, CH3COCOO− (pyruvic acid), and a
                      hydrogen ion, H+. <br />
                      <br />
                      The free energy released in this process is used to form
                      the high-energy molecules ATP (adenosine triphosphate) and
                      NADH (reduced nicotinamide adenine dinucleotide).
                    </p>
                    <br />
                    <h2>Pyruvate</h2>
                    <br />
                    <p className="justifyContent">
                      Pyruvate is the end-product of glycolysis, a major
                      substrate for oxidative metabolism, and a branching point
                      for glucose, lactate, fatty acid and amino acid synthesis.
                      <br />
                      <br />
                      The mitochondrial enzymes that metabolize pyruvate are
                      physically separated from cytosolic pyruvate pools and
                      rely on a membrane transport system to shuttle pyruvate
                      across the impermeable inner mitochondrial membrane (IMM).
                    </p>
                    <h2>Krebs Cycle</h2>
                    <br />
                    <p className="justifyContent">
                      The citric acid cycle (CAC) – also known as the TCA cycle
                      (tricarboxylic acid cycle) or the Krebs cycle – is a
                      series of chemical reactions used by all aerobic organisms
                      to release stored energy through the oxidation of
                      acetyl-CoA derived from carbohydrates, fats, and proteins,
                      into adenosine triphosphate (ATP) and carbon dioxide.
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
                    alt="Green binary numbers on a black screen"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Computing:</strong> Binary and its Representation
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      The Binary System
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Computers use binary to process data. There are simple
                      techniques to convert between binary and denary and to add
                      two binary numbers together.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How Computers Use Binary"
                    url="https://www.youtube.com/watch?v=LpuPe81bc2w"
                    src={ImageEight}
                    alt="Images of people against a backdrop of blue binary numbers on a black background"
                    caption="Much like how we communicate with each other, binary is the way in which computers communicate with us and thus communicates with the world"
                  >
                    <h2>What is Binary?</h2>
                    <br />
                    <p className="justifyContent">
                      Binary is a number system that only uses two digits: 1 and
                      0. All information that is processed by a computer is in
                      the form of a sequence of 1s and 0s. Therefore, all data
                      that we want a computer to process needs to be converted
                      into binary.
                    </p>
                    <br />
                    <h2>Conversion - Binary to Denary (Decimal)</h2>
                    <br />
                    <p className="justifyContent">
                      Converting from binary to denary To convert a binary
                      number to denary, start by writing out the binary place
                      values. In denary, the place values are 1, 10, 100, 1000,
                      etc – each place value is 10 times bigger than the last.
                      In binary, each place value is 2 times bigger than the
                      last (ie increased by the power of 2). The first few
                      binary place values look like this:
                    </p>
                    <h2>Binary Addition</h2>
                    <br />
                    <p className="justifyContent">
                      When two numbers are added together in denary, we take the
                      first number, add the second number to it and get an
                      answer. For example, 1 + 2 = 3.
                      <br />
                      <br />
                      When we add two binary numbers together the process is
                      different.
                      <br />
                      <br />
                      There are four rules that need to be followed when adding
                      two binary numbers. These are:
                      <ul>
                        <li>0 + 0 = 0</li>
                        <li>1 + 0 = 1</li>
                        <li>1 + 1 = 10 (binary for 2)</li>
                        <li>1 + 1 + 1 = 11 (binary for 3)</li>
                      </ul>
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-three-general-quiz">
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

export default AdvancedGeneralCourse;
