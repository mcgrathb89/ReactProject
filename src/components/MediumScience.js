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
import ImageOne from "../img/atoms.jpg";
import ImageTwo from "../img/atom-symbol.jpg";
import ImageThree from "../img/DNA.jpg";
import ImageFour from "../img/twin-flowers.jpg";
import ImageFive from "../img/magnetics.jpg";
import ImageSix from "../img/magnetic-balls.jpg";
import ImageSeven from "../img/radiation-symbol.jpg";
import ImageEight from "../img/hazmat.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_ScienceLessons.scss";

const MediumScienceCourse = () => {
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
        <h1 className="title">Level Two Science</h1>
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
                  <CardImg src={ImageOne} alt="Atom structure" />
                  <CardBody>
                    <CardTitle>Atoms</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Atomic Model
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The atomic model consists of a nucleus containing protons
                      and neutrons, surrounded by electrons in shells. The
                      numbers of particles in an atom can be calculated from its
                      atomic number.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Atoms"
                    url="https://www.youtube.com/watch?v=LhveTGblGHY"
                    src={ImageTwo}
                    alt="Atomic Structure Diagram"
                    caption="As it can be seen from the image above the centre of an atom contains neutrons and protons whilst electrons circle around the nucleus"
                  >
                    <h2>Developing Models of Atoms</h2>
                    <br />
                    <p className="justifyContent">
                      Ancient Greek thinkers believed that all matter was made
                      of a combination of earth, air, fire and water. These
                      substances were called 'elements' but they were not the
                      same as modern elements. Later Greek thinkers suggested
                      that matter could be made up of invisible particles. They
                      called these particles atoms but they had no experimental
                      evidence for their model.
                    </p>
                    <br />
                    <h2>The First Atomic Model</h2>
                    <br />
                    <p className="justifyContent">
                      The scientist John Dalton carried out a series of
                      experiments. He concluded that all matter was made of tiny
                      particles called atoms. He suggested that an atom was a
                      tiny solid ball. He published his ideas in 1803.
                      <br />
                      <br />
                      <strong>Dalton’s model included these ideas:</strong>
                      <br />
                      <br />
                      <ul>
                        <li>
                          Atoms cannot be broken down into anything simpler
                        </li>
                        <li>
                          The atoms of a given element are identical to each
                          other
                        </li>
                        <li>
                          The atoms of different elements are different from one
                          another
                        </li>
                        <li>
                          The atoms of different elements join to make compounds
                        </li>
                        <li>
                          During chemical reactions atoms rearrange to make
                          different substances
                        </li>
                      </ul>
                      <br />
                      <br />
                      This atomic model has changed over time. Scientists used
                      the model to make predictions. Sometimes the results of
                      their experiments were a surprise and they did not fit
                      with the existing model. Scientists changed the model so
                      that it could explain the new evidence.
                    </p>
                    <h2>Nucleus</h2>
                    <br />
                    <p className="justifyContent">
                      Scientists then discovered that the nucleus is made up of
                      two types of subatomic particles called protons and
                      neutrons.
                      <br />
                      <br />
                      <strong>
                        As a result of these discoveries, we now know that:
                      </strong>
                      <br />
                      <br />
                      <ul>
                        <li>
                          Atoms can be broken down into three smaller particles
                          (protons, neutrons and electrons)
                        </li>
                        <li>
                          Atoms of an element have identical numbers of protons
                          and electrons, but can have different numbers of
                          neutrons
                        </li>
                        <li>
                          Atoms of different elements have different numbers of
                          protons and electrons
                        </li>
                      </ul>
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageThree} alt="DNA Strand" />
                  <CardBody>
                    <CardTitle>Genes</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Genomes
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Humans and other organisms look a lot like their parents.
                      This is because they have inherited information from them.
                      This information is stored in the genome of the organism.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is a Gene?"
                    url="https://www.youtube.com/watch?v=ictAm2wSwtY"
                    src={ImageFour}
                    alt="Twin Flowers"
                    caption="The image above demonstrates how genetic inheritance can affect all organisms including flowers (which also have DNA). The flowers seen in this picture are carbon copies of each other because the formation of their DNA pattern is alike, thus producing two flowers which are identical."
                  >
                    <h2>The genome</h2>
                    <br />
                    <p className="justifyContent">
                      The genome is the entire genetic material of an organism.
                      It is found in the nucleus of a cell, and is composed of a
                      chemical called DNA. The study of the structure and
                      function of the genome is called genomics.
                      <br />
                      <br />
                      DNA is a polymer - a large and complex molecule. The
                      monomers that make it are called nucleotides. DNA is made
                      up of two strands forming a twisted ladder structure
                      called a double helix. The nucleotides are arranged along
                      the DNA to form a code. This genetic code, determines the
                      characteristics of a living organism.
                    </p>
                    <br />
                    <h2>Genomes of Different Organisms</h2>
                    <br />
                    <p className="justifyContent">
                      Genetic material for eukaryotes is in their nucleus.
                      Prokaryotes such as bacteria do not have nuclei. Their
                      genetic material is in the cytoplasm and includes small
                      loops of DNA called plasmids.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Magnetic Energy" />
                  <CardBody>
                    <CardTitle>Magnetism</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Magnetic Energy
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Magnetism is caused by the fields that exist around
                      magnets. These magnetic fields can be investigated by
                      looking at the effects of the forces they exert on other
                      magnets.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="What is Energy?"
                    url="https://www.youtube.com/watch?v=cisO6ZJAhyk"
                    src={ImageSix}
                    alt="Magnetic field holding metal balls together"
                    caption="As it can be seen in the above image, the balls are metal which allows electricity to pass through via conductivity. Therefore, magnetic energy can pass through and keep the balls held together by forming a magnetic field around the balls which acts almost like glue."
                  >
                    <h2>Poles</h2>
                    <br />
                    <p className="justifyContent">
                      A magnet can exert a force on another nearby magnet.
                      Magnets have two poles:
                      <br />
                      <br />
                      <ul>
                        <li>North Pole</li>
                        <li>South Pole</li>
                      </ul>
                      Magnetic force is strongest near a magnet's poles.
                    </p>
                    <br />
                    <h2>Energy Stores</h2>
                    <br />
                    <p className="justifyContent">
                      Two magnets will either attract or repel each other in the
                      following way:
                      <ul>
                        <li>Like poles (N-N or S-S) repel</li>
                        <li>Unlike poles (N-S or S-N) attract</li>
                      </ul>
                      Magnetic forces are non-contact forces - this means that
                      magnets affect each other without touching.
                    </p>
                    <h2>Permanent and Induced Magnetism</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Permanent Magnets</strong>
                      <br />
                      <br />A permanent magnet is often made from a magnetic
                      material such as steel. A permanent magnet always causes a
                      force on other magnets, or on magnetic materials. Key
                      features of a permanent magnet:
                      <ul>
                        <li>It produces its own magnetic field</li>
                        <li>
                          The magnetic field cannot be turned on and off - it is
                          there all the time
                        </li>
                      </ul>
                      Bar magnets and horseshoe magnets are examples of
                      permanent magnets.
                      <br />
                      <br />
                      <strong>Induced Magnets</strong>
                      <br />
                      <br />
                      Unlike a permanent magnet, an induced magnet only becomes
                      a magnet when it is placed in a magnetic field. The
                      induced magnetism is quickly lost when the magnet is
                      removed from the magnetic field.
                      <br />
                      <br />
                      An iron rod placed inside a coil carrying a current will
                      become an induced magnet. If the current is dc, the ends
                      of the iron will become a N-pole and a S-pole.
                      <br />
                      <br />
                      The iron filings in the image become induced magnets when
                      they are near the bar magnet. They lose most or all of
                      their magnetism when they are removed from the magnetic
                      field.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="scienceCardDiv">
                <Card>
                  <CardImg src={ImageSeven} alt="Radiation Symbol" />
                  <CardBody>
                    <CardTitle>Radiation</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Radioactive Materials
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      All objects are continually absorbing and emitting
                      infrared radiation, which is essential for life on Earth. This section will look at what radiation is and how it is absorbed as energy.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How is Radiation Emitted?"
                    url="https://www.youtube.com/watch?v=Zw0pHT47AAU"
                    src={ImageEight}
                    alt="Static"
                    caption="When dealing with radiation hazmat suits are used, this protects the wearer from dangerous materials."
                  >
                    <h2>Emission and Absorption of Radiation</h2>
                    <br />
                    <p className="justifyContent">
                      All bodies (objects) emit electromagnetic radiation, no
                      matter what their temperature is. The type of radiation
                      emitted depends on the temperature of the body.
                      <br />
                      <br />
                      Hot bodies emit a continuous range of electromagnetic
                      radiation at different energy values - this means that the
                      radiation that is emitted is spread out over a range of
                      different frequencies and wavelengths.
                      <br />
                      <br />
                      As a body gets hotter, it emits more high frequency
                      electromagnetic radiation than low frequency. The higher
                      the frequency, the shorter the wavelength. This means that
                      the intensity of the radiation emitted is greater for a
                      hotter body.
                      <br />
                      <br />
                      As the surface temperature of a hot body such as a star
                      increases:
                      <ul>
                        <li>
                          The intensity of the radiation it emits increases
                        </li>
                        <li>
                          The wavelength that corresponds to the peak intensity
                          gets shorter
                        </li>
                      </ul>
                    </p>
                    <br />
                    <h2>Poor Absorbers and Emitters</h2>
                    <br />
                    <p className="justifyContent">
                      White and shiny silvery surfaces are the worst absorbers,
                      as they reflect all visible light wavelengths. Poor
                      absorbers are also poor emitters, and do not emit
                      radiation as quickly as darker colours. Radiators in homes
                      are usually painted white so that the infrared radiation
                      is emitted gradually.
                    </p>
                    <h2>The Earth's Temperature - Higher</h2>
                    <br />
                    <p className="justifyContent">
                      The temperature of a body is linked to the balance between
                      the amount of radiation absorbed and emitted.
                      <br />
                      <br />
                      <strong>Rate of absorption: </strong>Greater than the rate
                      of emission.
                      <br />
                      <strong>Temperature of the body: </strong>Increasing
                      <br />
                      <br />
                      <strong>Rate of absorption: </strong>Equal to the rate of
                      emission.
                      <br />
                      <strong>Temperature of the body: </strong>Constant
                      <br />
                      <br />
                      <strong>Rate of absorption: </strong>Lower than the rate
                      of emission.
                      <br />
                      <strong>Temperature of the body: </strong>Decreasing
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-two-science-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to return to science
          level one and brush up on your foundational knowledge. We will use our
          AI to determine if you are still at the same level, need to go back to basics or if you need to
          be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default MediumScienceCourse;
