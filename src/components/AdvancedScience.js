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
import ImageOne from "../img/respiration.jpg";
import ImageTwo from "../img/krebs-cycle.jpg";
import ImageThree from "../img/earth-rotation.jpg";
import ImageFour from "../img/circular-motion.jpg";
import ImageFive from "../img/thermodynamics.jpg";
import ImageSix from "../img/first-law-open-system.jpg";
import ImageSeven from "../img/biodiversity.jpg";
import ImageEight from "../img/chart.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_ScienceLessons.scss";

const AdvancedScienceCourse = () => {
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
        <h1 className="title">Level Three Science</h1>
        <Container>
          <br />
          <h2 style={{ textAlign: "center", color: "lightGrey" }}>
            Learning Section
          </h2>
          <br />
          <br />

          <Container>
            <Row>
              <div className="scienceCardDiv">
                <Card>
                  <CardImg
                    src={ImageOne}
                    alt="Lungs/Diagram explaining respiration"
                  />
                  <CardBody>
                    <CardTitle>Respiration</CardTitle>
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
                    src={ImageTwo}
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
              <div className="scienceCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="Image taken by ESO Photo Ambassador Alexandre Santerne. Resembling an optical illusion or an abstract painting, the starry circles arc around the south pole, seen overhead at ESO's La Silla Observatory in Chile"
                  />
                  <CardBody>
                    <CardTitle>Circular Motion</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Movement and Rotation
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Circular motion is a movement of an object along the
                      circumference of a circle or rotation along a circular
                      path. It can be uniform, with constant angular rate of
                      rotation.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How Does Circular Rotation Work?"
                    url="https://www.youtube.com/watch?v=txrrf6CT_vc"
                    src={ImageFour}
                    alt="Twin Flowers"
                    caption="Velocity v and acceleration a in uniform circular motion at angular rate ω; the speed is constant, but the velocity is always tangent to the orbit; the acceleration has constant magnitude, but always points toward the center of rotation."
                  >
                    <h2>Centripetal Force</h2>
                    <br />
                    <p className="justifyContent">
                      A centripetal force is a force that makes a body follow a
                      curved path. Its direction is always orthogonal to the
                      motion of the body and towards the fixed point of the
                      instantaneous center of curvature of the path. Isaac
                      Newton described it as "a force by which bodies are drawn
                      or impelled, or in any way tend, towards a point as to a
                      centre". In Newtonian mechanics, gravity provides the
                      centripetal force responsible for astronomical orbits.
                      Circular motion is an accelerated motion and thus relies
                      on centripetal force
                    </p>
                    <br />
                    <h2>Radian</h2>
                    <br />
                    <p className="justifyContent">
                      The radian is the SI unit for measuring angles, and is the
                      standard unit of angular measure used in many areas of
                      mathematics. The length of an arc of a unit circle is
                      numerically equal to the measurement in radians of the
                      angle that it subtends; one radian is just under 57.3
                      degrees (expansion at OEIS: A072097). The unit was
                      formerly an SI supplementary unit, but this category was
                      abolished in 1995 and the radian is now considered an SI
                      derived unit.[1]
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="scienceCardDiv">
                <Card>
                  <CardImg
                    src={ImageFive}
                    alt="A globe simulating weather patterns"
                  />
                  <CardBody>
                    <CardTitle>The Thermodynamic System</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Enthalpy
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Enthalpy is a concept used in science and engineering when
                      heat and work need to be calculated. The name comes from
                      the Greek word "enthalpos", meaning "to put heat into".
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Enthalpy Defined"
                    url="https://www.youtube.com/watch?v=fucyI7Ouj2c"
                    src={ImageSix}
                    alt="First Law Open System Diagram"
                    caption="During steady, continuous operation, an energy balance applied to an open system equates shaft work performed by the system to heat added plus net enthalpy added."
                  >
                    <h2>Lattice Enthalpy/Lattice Energy</h2>
                    <br />
                    <p className="justifyContent">
                      Lattice enthalpy is a measure of the strength of the
                      forces between the ions in an ionic solid. The greater the
                      lattice enthalpy, the stronger the forces.
                      <br />
                      <br />
                      Those forces are only completely broken when the ions are
                      present as gaseous ions, scattered so far apart that there
                      is negligible attraction between them.
                    </p>
                    <h2>Born–Haber Cycle</h2>
                    <br />
                    <p className="justifyContent">
                      The Born–Haber cycle is an approach to analyze reaction
                      energies. It was named after the two German scientists Max
                      Born and Fritz Haber, who developed it in 1919. It was
                      also independently formulated by Kasimir Fajans. The cycle
                      is concerned with the formation of an ionic compound from
                      the reaction of a metal (often a Group I or Group II
                      element) with a halogen or other non-metallic element such
                      as oxygen.
                      <br />
                      <br />
                      Born–Haber cycles are used primarily as a means of
                      calculating lattice energy (or more precisely enthalpy),
                      which cannot otherwise be measured directly. The lattice
                      enthalpy is the enthalpy change involved in the formation
                      of an ionic compound from gaseous ions (an exothermic
                      process), or sometimes defined as the energy to break the
                      ionic compound into gaseous ions (an endothermic process).
                      A Born–Haber cycle applies Hess's law to calculate the
                      lattice enthalpy by comparing the standard enthalpy change
                      of formation of the ionic compound (from the elements) to
                      the enthalpy required to make gaseous ions from the
                      elements.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageSeven} alt="Biodiverse Scenary" />
                  <CardBody>
                    <CardTitle>Biodiversity</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Ecosystem
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Biodiversity is the variety and variability of life on
                      Earth. Biodiversity is typically a measure of variation at
                      the genetic, species, and ecosystem level.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is Biodiversity?"
                    url="https://www.youtube.com/watch?v=US58f-SwO0k"
                    src={ImageEight}
                    alt="Marine Fossil Diversity Statistical Chart"
                    caption="Apparent marine fossil diversity during the Phanerozoic era."
                  >
                    <h2>Chronology</h2>
                    <br />
                    <p className="justifyContent">
                      Biodiversity is the result of 3.5 billion years of
                      evolution. The origin of life has not been established by
                      science, however, some evidence suggests that life may
                      already have been well-established only a few hundred
                      million years after the formation of the Earth. Until
                      approximately 600 million years ago, all life consisted of
                      microorganisms – archaea, bacteria, and single-celled
                      protozoans and protists.
                    </p>
                    <br />
                    <h2>Diversification</h2>
                    <br />
                    <p className="justifyContent">
                      The existence of a global carrying capacity, limiting the
                      amount of life that can live at once, is debated, as is
                      the question of whether such a limit would also cap the
                      number of species. While records of life in the sea show a
                      logistic pattern of growth, life on land (insects, plants
                      and tetrapods) shows an exponential rise in diversity. As
                      one author states, "Tetrapods have not yet invaded 64
                      percent of potentially habitable modes and it could be
                      that without human influence the ecological and taxonomic
                      diversity of tetrapods would continue to increase
                      exponentially until most or all of the available eco-space
                      is filled
                    </p>
                    <h2>Ecosystem Services</h2>
                    <br />
                    <p className="justifyContent">
                      Ecosystem services are the suite of benefits that
                      ecosystems provide to humanity. The natural species, or
                      biota, are the caretakers of all ecosystems. It is as if
                      the natural world is an enormous bank account of capital
                      assets capable of paying life sustaining dividends
                      indefinitely, but only if the capital is maintained.
                      <br />
                      <br />
                      <strong>These services come in three varieties</strong>
                      <br />
                      <br />
                      <ol>
                        <li>
                          Provisioning services which involve the production of
                          renewable resources (e.g.: food, wood, fresh water)
                        </li>
                        <li>
                          Regulating services which are those that lessen
                          environmental change (e.g.: climate regulation,
                          pest/disease control)
                        </li>
                        <li>
                          Cultural services represent human value and enjoyment
                          (e.g.: landscape aesthetics, cultural heritage,
                          outdoor recreation and spiritual significance)
                        </li>
                      </ol>
                      <br />
                      There have been many claims about biodiversity's effect on
                      these ecosystem services, especially provisioning and
                      regulating services. After an exhaustive survey through
                      peer-reviewed literature to evaluate 36 different claims
                      about biodiversity's effect on ecosystem services, 14 of
                      those claims have been validated, 6 demonstrate mixed
                      support or are unsupported, 3 are incorrect and 13 lack
                      enough evidence to draw definitive conclusions.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-three-science-quiz">
          This is the section where you can take a test to determine if you are
          beyond the GCSE level three skill level or if you need to return to
          science level two and brush up on additional core knowledge. We will
          use our AI to determine if you are still at the same level, need to
          revise core knowledge or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default AdvancedScienceCourse;