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
import ImageOne from "../img/grammar.jpg";
import ImageTwo from "../img/german-grammar.jpg";
import ImageThree from "../img/calculator.jpg";
import ImageFour from "../img/money.jpg";
import ImageFive from "../img/atoms.jpg";
import ImageSix from "../img/atom-symbol.jpg";
import ImageSeven from "../img/motherboard.jpg";
import ImageEight from "../img/RAM.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_GeneralLessons.scss";

const MediumGeneralCourse = () => {
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
        <h1 className="title">Level Two Course</h1>
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
                    alt="Image of grammar terms written on a chalkboard."
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>English:</strong> Grammar and Forming Sentences
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Grammatical Structuring
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Grammar refers to the structure of language and how
                      different words fit together. Following English grammar
                      rules should help you to construct more meaningful
                      sentences.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Forming Grammatically Correct Sentences"
                    url="https://www.youtube.com/watch?v=jul2urONzOQ"
                    src={ImageTwo}
                    alt="Bookcase filled with books written in the German language"
                    caption="All languages have their own forms of grammar, it is important to be able to understand how a sentence is formed in order to be able to get the most out of the language you are speaking or even learning."
                  >
                    <h2>Word Classes</h2>
                    <br />
                    <p className="justifyContent">
                      Words can be grouped according to their function, or what
                      they ‘do’, in a sentence. Words are grouped into the
                      following main classes:
                      <ul>
                        <li>Nouns</li>
                        <li>Pronouns</li>
                        <li>Adjectives</li>
                        <li>Verbs</li>
                        <li>Adverbs</li>
                      </ul>
                      <strong>Nouns and Pronouns</strong>
                      <br />
                      <br />
                      Nouns are by far the largest category of words in English.
                      They signify all kinds of physical things both living and
                      inanimate. They also signify imagined things like ‘a
                      ghost’; and ideas or concepts, such as ‘love’, ‘guilt’ or
                      ‘fate’.
                      <br />
                      <br />
                      Pronouns Pronouns take the place of proper nouns in a
                      sentence.
                      <ul>
                        <li>I</li>
                        <li>He</li>
                        <li>She</li>
                        <li>It</li>
                      </ul>
                      <strong>Examples:</strong>
                      <br />
                      <br />
                      Sarah was tired. = <strong>She</strong> was tired. <br />
                      Dev bought a new bike. = <strong>He</strong> bought a new
                      bike. <br />
                      The coffee was expensive. = <strong>It</strong> was
                      expensive.
                    </p>
                    <br />
                    <h2>Adjectives and Verbs</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Adjectives</strong>
                      <br />
                      <br />
                      An adjective is a describing word that adds qualities to a
                      noun or pronoun. An adjective normally comes before a
                      noun, eg:
                      <br />
                      <br />
                      The greedy man counted each shiny coin in his money pile;
                      he rubbed his grubby hands excitedly. An adjective can
                      also come after a noun or pronoun:
                      <ul>
                        <li>
                          He was extremely <strong>greedy.</strong>
                        </li>
                        <li>
                          My mother seemed to be <strong>uncertain.</strong>
                        </li>
                      </ul>
                      <strong>Adjective phrases</strong> are describing phrases.
                      For example:
                      <br />
                      <br />
                      <ul>
                        <li>
                          The <strong>exceedingly tasty</strong> pie sat on the
                          table.
                        </li>
                        <li>
                          The <strong>incredibly high</strong> price of tickets
                          put her off the festival.
                        </li>
                        <li>
                          She was
                          <strong> intelligent but extremely arrogant.</strong>
                        </li>
                      </ul>
                      <strong>Verbs</strong>
                      <br />
                      <br />A <strong>verb</strong> lies at the heart of a
                      sentence. It describes the action or state of the subject.
                      It is the ‘doing’ or ‘being’ part of the sentence.
                      <br />
                      <br />
                      <ul>
                        <li>Abigail ran through the field.</li>
                        <li>Jane tore off the wrapping paper.</li>
                      </ul>
                      Some verbs can also link extra information about their
                      subject to an adjective:
                      <ul>
                        <li>The cake was delicious.</li>
                        <li>Noah appeared unwell.</li>
                      </ul>
                    </p>
                    <h2>Adverbs</h2>
                    <br />
                    <p className="justifyContent">
                      Adverbs give extra detail about other words. They can add
                      detail to a verb, to an adjective or even to a whole
                      sentence. Like adjectives, they can be single words or
                      phrases. An adverb describes
                      <strong> how, when or where</strong> something happens
                      (and they often end in ‘–ly’):
                      <ul>
                        <li>
                          The dog growled <strong>menacingly.</strong>
                        </li>
                        <li>
                          There were several seagulls squawking
                          <strong> nearby.</strong>
                        </li>
                        <li>
                          The seagulls <strong>suddenly</strong> pounced on the
                          family’s picnic.
                        </li>
                        <li>
                          The family could <strong>hardly</strong> move.
                        </li>
                        <li>
                          It was a <strong>very</strong> nice day.
                        </li>
                      </ul>
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="generalCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="Calculator with tax button added."
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Maths:</strong> Financial Mathematics and How it
                      Works
                    </CardTitle>
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
                    src={ImageFour}
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

              <div className="generalCardDiv">
                <Card>
                  <CardImg src={ImageFive} alt="Atom structure" />
                  <CardBody>
                    <CardTitle>
                      <strong>Science:</strong> Atoms and Their Purpose
                    </CardTitle>
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
                    src={ImageSix}
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

              <div className="generalCardDiv">
                <Card>
                  <CardImg src={ImageSeven} alt="Labeled Motherboard Diagram" />
                  <CardBody>
                    <CardTitle>
                      <strong>Computing:</strong> CPU, Memory and its Functions
                    </CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Computer Transfer and Storage
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The performance of the CPU is affected by the number of
                      cores, clock speed and memory. There are different types
                      of volatile and non-volatile memory.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How Computing Memory Works"
                    url="https://www.youtube.com/watch?v=DKGZlaPlVLY"
                    src={ImageEight}
                    alt="2 RAM Sticks"
                    caption="RAM is volatile memory, meaning that when you turn off the computer it is erased, however this is useful when the computer is turned on for tasks such as gaming or creating graphics."
                  >
                    <h2>Motherboard</h2>
                    <br />
                    <p className="justifyContent">
                      The motherboard is a circuit board that connects the CPU
                      to the memory and all the other hardware. The CPU sits on
                      the motherboard (also called the logic board).
                    </p>
                    <br />
                    <h2>Buses</h2>
                    <br />
                    <p className="justifyContent">
                      Buses are circuits on the motherboard that connect the CPU
                      to other components. There are many buses on the
                      motherboard. A bus moves instructions and data around the
                      system. The speed of a bus is measured in megahertz (MHz).
                      The faster the bus, the faster data is communicated. The
                      speed of the motherboard is defined by the bus speed.
                    </p>
                    <h2>Memory</h2>
                    <br />
                    <p className="justifyContent">
                      Memory is the area where the computer stores or remembers
                      data. Memory provides the CPU with its instructions. There
                      are different types of memory, and each one plays an
                      important role in the running of a computer system. Memory
                      is sometimes called primary memory.
                      <br />
                      <br />
                      Memory is either volatile or non-volatile. Volatile memory
                      only stores information to run programs while the computer
                      is on. It is reset and emptied once the computer is turned
                      off. Volatile memory requires electricity to store data
                      using transistors and capacitors.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-two-general-quiz">
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

export default MediumGeneralCourse;
