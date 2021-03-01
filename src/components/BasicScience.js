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
import ImageOne from "../img/particles.jpg";
import ImageTwo from "../img/SLG.jpg";
import ImageThree from "../img/microscope.jpg";
import ImageFour from "../img/cells.jpg";
import ImageFive from "../img/energy.jpg";
import ImageSix from "../img/solar-energy.jpg";
import ImageSeven from "../img/electric.jpg";
import ImageEight from "../img/static.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_ScienceLessons.scss";

const BasicScienceCourse = () => {
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
        <h1 className="title">Level One Science</h1>
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
                  <CardImg src={ImageOne} alt="Particles" />
                  <CardBody>
                    <CardTitle>Particles</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Solids, Liquids and Gases
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The particle theory of matter is a model that describes
                      the arrangement and movement of particles in a substance.
                      The model is used to explain the physical properties of
                      solids, liquids and gases.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Solid, Liquid and Gas"
                    url="https://www.youtube.com/watch?v=fnsChuaR_qI"
                    src={ImageTwo}
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
              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageFour} alt="Image of a Single Cell" />
                  <CardBody>
                    <CardTitle>Cell Structures</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Cell Microscopy
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Organisms are made of cells. Most organisms are
                      multicellular and have cells that are specialised to do a
                      particular job. Microscopes produce magnified images of
                      cells so we can study them in detail.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How to Measure Cells"
                    url="https://www.youtube.com/watch?v=VBdVARYWq1c"
                    src={ImageThree}
                    alt="Microscope"
                    caption="The components of a light microscope and their functions."
                  >
                    <h2>Light Microscopes</h2>
                    <br />
                    <p className="justifyContent">
                      Most animal cells range in size from 0.01 to 0.05 mm, and
                      plant cells from 0.01 to 0.10 mm.
                      <br />
                      <br />
                      The human eye can see objects as small as around 0.05 mm.
                      Therefore a microscope is needed to see cells in detail.
                      <br />
                      <br />
                      Microscopes magnify the image of a specimen - cells,
                      tissues or other structures - so that it appears larger.
                    </p>
                    <br />
                    <h2>Calculating Magnification of Compound Microscope</h2>
                    <br />
                    <p className="justifyContent">
                      A compound microscope uses two lenses to magnify the
                      specimen - the eyepiece and an objective lens.
                      <br />
                      <br />
                      In most microscopes, there is a choice of objective lenses
                      to use. Magnification can therefore be varied according to
                      the size of the specimen to be viewed and the level of
                      detail required.
                      <br />
                      <br />
                      The magnification of a lens is shown by a multiplication
                      sign followed by the amount the lens magnifies, eg ×10.
                      <br />
                      <br />
                      Magnification of the microscope = magnification of
                      eyepiece × magnification of objective.
                      <br />
                      <br />
                      So, if the magnification of an eyepiece is ×10 and the
                      objective is ×4, the magnification of the microscope is:
                      <br />
                      <br />
                      magnification of eyepiece × magnification of objective =
                      10 × 4 = 40.
                    </p>
                    <h2>Calculating Image Magnification</h2>
                    <br />
                    <p className="justifyContent">
                      Microscopes use lenses to magnify the image of a
                      biological specimen so that it appears larger.
                      <br />
                      <br />
                      The formula to calculate magnification is: <br />
                      Magnification = Size of Image ÷ Text Real Size of Object.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Energy Being Produced" />
                  <CardBody>
                    <CardTitle>Energy</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Energy Stores and Transfers
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Energy can be described as being in different 'stores'. It
                      cannot be created or destroyed but it can be transferred,
                      dissipated or stored in different ways.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is Energy?"
                    url="https://www.youtube.com/watch?v=CW0_S5YpYVo"
                    src={ImageSix}
                    alt="Solar Panels"
                    caption="The image above demonstrates solar panels, they absorb energy from the sun and convert that energy into electricity to power homes."
                  >
                    <h2>Energy Explained</h2>
                    <br />
                    <p className="justifyContent">
                      Energy can be stored or transferred but it cannot be used
                      up. For example, energy can be stored in the chemical
                      bonds of diesel oil. It can be transferred when the diesel
                      oil burns in a car engine, allowing the car to move and
                      accelerate, or reach a certain distance. Where there are
                      energy transfers in a system, the total energy associated
                      with the system stays the same. Energy is measured in
                      joules (J).
                    </p>
                    <br />
                    <h2>Energy Stores</h2>
                    <br />
                    <p className="justifyContent">
                      There are eight energy stores which are used to keep track
                      of energy in a system.
                      <br />
                      <br />
                      <strong>1. Magnetic:</strong> The energy stored when like
                      poles are pushed closer together or when unlike poles are
                      pulled further apart. <br />
                      <strong>Examples:</strong> Fridge magnets, compasses and
                      Maglev Trains which use magnetic levitation.
                      <br />
                      <br />
                      <strong>2. Thermal:</strong> In most cases this is the
                      vibrations of the particles in the object. In hotter
                      objects, the particles vibrate faster.
                      <br />
                      <strong>Examples:</strong> The human bodies, hot coffees,
                      stoves or hobs. Also: ice particles vibrate slower, but
                      still have energy.
                      <br />
                      <br />
                      <strong>3. Chemical:</strong> The energy store associated
                      with chemical bonds, such as those between molecules.
                      <br />
                      <strong>Examples:</strong> Food, muscles, electrical
                      cells.
                      <br />
                      <br />
                      <strong>4. Kinetic:</strong> The energy associated with a
                      moving object.
                      <br />
                      <strong>Examples:</strong> Runners, busses, comets.
                      <br />
                      <br />
                      <strong>5. Electrostatic:</strong> The energy stored when
                      like charges are moved closer together or when unlike
                      charges are pulled further apart.
                      <br />
                      <strong>Examples:</strong> Thunderclouds, Van De Graaff
                      generators.
                      <br />
                      <br />
                      <strong>6. Elastic:</strong> The energy stored when an
                      object is stretched, squashed or twisted.
                      <br />
                      <strong>Examples:</strong> Drawn catapults, compressed
                      springs, inflated balloons.
                      <br />
                      <br />
                      <strong>7. Gravitational:</strong> The energy associated
                      with an object at height.
                      <br />
                      <strong>Examples:</strong> Aeroplanes, kites, mugs on a
                      table.
                      <br />
                      <br />
                      <strong>8. Nuclear:</strong> The energy associated with
                      nuclear interactions.
                      <br />
                      <strong>Examples:</strong> Nuclear fusion of hydrogen and
                      helium in the Sun, Uranium-245 undergoing fission.
                    </p>
                    <h2>What is a Store?</h2>
                    <br />
                    <p className="justifyContent">
                      A store is not a physical place, and energy is not a
                      physical substance. The idea of an energy store is to
                      allow calculations to be made and to state how many joules
                      are available for an action to happen. Each of the stores
                      has an equation associated with it.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageSeven} alt="Light bulb" />
                  <CardBody>
                    <CardTitle>Electricity</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Static and Charge
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Electric current is caused by moving electric charges. The
                      effects of charge and electric fields can be investigated
                      by looking at the forces they exert on conductors and
                      insulators.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Charge and Static"
                    url="https://www.youtube.com/watch?v=5obbfXg_MH4"
                    src={ImageEight}
                    alt="Static"
                    caption="As can be seen from the child's hair in the image above static, can travel through the body and literally make your hair stand up! 
                    A way to observe static in real life is to rub a ballon against your hair, then stick the balloon to the wall. The balloon should stick to the wall because there is a layer of static electricity between the wall and the balloon itself."
                  >
                    <h2>Charge</h2>
                    <br />
                    <p className="justifyContent">
                      All matter has charge, in the same way that all matter has
                      mass. Atoms have no overall charge – they are neutral.
                      This is because atoms contain equal numbers of protons and
                      electrons. Electrons carry a negative electric charge and
                      protons carry a positive electric charge.
                    </p>
                    <br />
                    <h2>Static</h2>
                    <br />
                    <p className="justifyContent">
                      Electrons can be made to move from one object to another.
                      However, protons do not move because they are tightly
                      bound in the nuclei of atoms. <br />
                      <br />
                      For example, when a plastic rod is rubbed with a duster,
                      electrons are transferred from one material to the other.
                      The material that gains electrons becomes negatively
                      charged. The material that loses electrons becomes
                      positively charged.
                    </p>
                    <h2>How Does Static Occur?</h2>
                    <br />
                    <p className="justifyContent">
                      Static charge occurs when electrons build up on an object.
                      <br />
                      <br />
                      <strong>Static charge:</strong>
                      <br /><br />
                      <ul>
                        <li>
                          Can only build up on objects which are insulators, eg
                          plastic or wood.
                        </li>
                        <br />
                        <li>
                          Cannot build up on objects that act as conductors, eg
                          metals Conductors allow the electrons to flow away,
                          forming an electric current.
                        </li>
                      </ul>
                      When a static charge on an object is discharged, an
                      electric current flows through the air. This can cause
                      sparks. Lightning is an example of a large amount of
                      static charge being discharged.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-one-science-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to do some more work
          on your current level. We will use our AI to determine if you are still
          at the same level or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default BasicScienceCourse;
