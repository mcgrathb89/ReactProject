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
import ImageThree from "../img/public-speaker.jpg";
import ImageFour from "../img/conversation.jpg";
import ImageFive from "../img/colourful-language-image.jpg";
import ImageSix from "../img/MLK.jpg";
import ImageSeven from "../img/romeo-and-juliet.jpg";
import ImageEight from "../img/william-shakespeare.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_EnglishLessons.scss";

const MediumEnglishCourse = () => {
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
        <h1 className="title">Level Two English</h1>
        <Container>
          <br />
          <h2 style={{ textAlign: "center", color: "lightGrey" }}>
            Learning Section
          </h2>
          <br />
          <br />

          <Container>
            <Row>
              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageOne}
                    alt="Image of grammar terms written on a chalkboard."
                  />
                  <CardBody>
                    <CardTitle>Grammar</CardTitle>
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

              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="A person speaking publicly in a conference"
                  />
                  <CardBody>
                    <CardTitle>Speaking and Listening</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      English Language and Spoken Language
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Effective face-to-face communication means thinking about
                      audience and purpose. Generally this means using Standard
                      English, listening carefully and being polite and
                      co-operative.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Building the Foundations of Confident Speaking and Listening"
                    url="https://www.youtube.com/watch?v=aoJ1rbW3R6U"
                    src={ImageFour}
                    alt="Woman wearing blue-top sat beside table, having a conversation with a woman wearing a white-top"
                    caption="Conversing is an everyday skill, from doing  a presentation to doing a job interview, there are some key principles to keep in mind when doing any type of speaking."
                  >
                    <h2>Audience and Purpose</h2>
                    <br />
                    <p className="justifyContent">
                      To help you decide on a style of speaking that is suitable
                      for a particular situation or context you should think
                      about:
                      <ul>
                        <li>Who you are speaking to</li>
                        <li>Why you are speaking to them</li>
                      </ul>
                      For example, in a conversation with friends you are likely
                      to use a very different style of speaking and listening
                      than you would in a formal presentation to an unfamiliar
                      audience.
                      <br />
                      <br />
                      Ask yourself the following key questions when preparing
                      for speaking and listening:
                      <ul>
                        <li>Who are your audience?</li>
                        <li>How old are they?</li>
                        <li>What matters to them?</li>
                        <li>What matters to them?</li>
                        <li>Why should they listen to you?</li>
                      </ul>
                      Your answers to these questions should help you focus on
                      how you might best speak to your audience in an
                      interesting and convincing way.
                      <br />
                      <br />
                      Be clear about your <strong>purpose</strong> in
                      presentations and discussions. Is your aim:
                      <ul>
                        <li>
                          To persuade your audience to do something, eg to stop
                          dropping litter?
                        </li>
                        <li>
                          To convince your listeners that your point of view is
                          a fair one to hold?
                        </li>
                        <li>To entertain your audience?</li>
                        <li>To share important information?</li>
                        <li>
                          To give instructions, a report, advice or explanation?
                        </li>
                      </ul>
                      It is a good idea to prepare notes in advance of formal
                      speaking and listening situations and to practice
                      beforehand in front of people.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageFive}
                    alt="Colourful image of faces and ears in picasso style"
                  />
                  <CardBody>
                    <CardTitle>Language and Structure</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      English Language and Analysing Non-Fiction
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Writers choose words and language features deliberately -
                      to have an effect on their readers. The way they structure
                      parts of a text, eg openings and endings, influences the
                      reader too.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Linguistics"
                    url="https://www.youtube.com/watch?v=nM8EMfHhovs"
                    src={ImageSix}
                    alt="Martin Luther King's 1963 I Have a Dream Speech"
                    caption="The purpose of King’s rhetorical speech was to end racism in America and persuade the audience that everyone should have equal rights."
                  >
                    <h2>Language</h2>
                    <br />
                    <p className="justifyContent">
                      During Martin Luther King's famous speech of 1963 he said
                      the following:
                      <br />
                      <br />
                      "We are not satisfied, and we will not be satisfied until
                      justice rolls down like waters and righteousness like a
                      mighty stream"
                      <br />
                      <br />
                      When we break down Dr. King's speech a few things become
                      apparent.
                      <br />
                      <br />
                      King uses similes “until justice rolls down like waters”
                      and “righteousness like a mighty stream” to make the
                      reader visualise “justice” and “righteousness” as rushing
                      water – implying that they need to be forceful and
                      unstoppable.
                      <br />
                      <br />
                      Exam questions may ask you to comment on how writers use
                      language to make an impression on the reader.
                      <br />
                      <br />
                      You should select words and phrases for close analysis -
                      to show that you understand how language features affect
                      the reader, looking at popular speeches such as that of
                      Dr. King will allow you to build this understanding
                      further.
                    </p>
                    <br />
                    <h2>Language features</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>Terminology: </strong>Simile
                      <br />
                      <br />
                      <strong>Definition: </strong>A comparison using 'like' or
                      'as' to create a vivid image.
                      <br />
                      <br /> <strong>Examples: </strong>As big as a whale; float
                      like a butterfly, sting like a bee.
                      <br />
                      <br />
                      <strong>Terminology: </strong>Metaphor
                      <br />
                      <br />
                      <strong>Definition: </strong>A comparison made without
                      using 'like' or 'as'.
                      <br />
                      <br />
                      <strong>Examples: </strong>'Sea of troubles' and 'drowning
                      in debt.'
                      <br />
                      <br />
                      <strong>Terminology: </strong>Personification
                      <br />
                      <br />
                      <strong>Definition: </strong>A type of imagery in which
                      non-human objects, animals or ideas are given human
                      characteristics.
                      <br />
                      <br />
                      <strong>Examples: </strong>The jaws of the cave, the
                      leaves danced in the breeze.
                    </p>
                    <h2>Additional Considerations</h2>
                    <br />
                    <p className="justifyContent">
                      Also consider:
                      <ul>
                        <li>
                          Is the text in the first person or third person? Is it
                          personal or impersonal?
                        </li>
                        <li>
                          Which tense has the writer chosen, eg past or present?
                          What effect does this have?
                        </li>
                        <li>
                          How sentences are structured, eg short and simple – to
                          pack a punch - or is listing used to suggest boredom
                          or to pick up the pace?
                        </li>
                      </ul>
                      Avoid ‘feature spotting’ – you need to show that you
                      understand the impact of writers’ language choices on the
                      reader and not just list them.
                      <br />
                      <br />
                      You should always comment on the possible effects of
                      language use on the reader – how it makes the reader
                      respond eg, think, feel, imagine or visualise something.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>

              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageSeven}
                    alt="Romeo and Juliet Novel Image"
                  />
                  <CardBody>
                    <CardTitle>Romeo and Juliet</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Plot and Structuring
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Shakespeare’s Romeo and Juliet tells the tale of a young
                      man and woman, who fall in love but are destined for
                      tragedy due to their warring families - the Montagues and
                      the Capulets.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Plot summary"
                    url="https://www.youtube.com/watch?v=5WU9rKeGSy8"
                    src={ImageEight}
                    alt="Copper engraving Copper engraving from 1750 depicting William Shakespeare (1564-1616) - Writer and playwright."
                    caption="William Shakespeare (1564-1616), was the creator of Romeo and Juliet amongst many other stories, his works are often studied as part of Enlgish literature as the formation of his plots and stories form the basis of todays modern language structure."
                  >
                    <h2>Romeo and Juliet</h2>
                    <br />
                    <p className="justifyContent">
                      <i>Romeo and Juliet</i> is a play written by Shakespeare.
                      It is a tragic love story where the two main characters,
                      Romeo and Juliet, are supposed to be sworn enemies but
                      fall in love. Due to their families' ongoing conflict,
                      they cannot be together, so they kill themselves because
                      they cannot cope with being separated from one another.
                      Romeo and Juliet is a Shakespearean
                      <strong> tragedy.</strong>
                    </p>
                    <br />
                    <h2>Structure of Plot</h2>
                    <br />
                    <p className="justifyContent">
                      Two wealthy families, the Montagues and the Capulets, have
                      another brawl in the city of Verona. The Prince and the
                      townspeople cannot cope with the constant fighting so the
                      Prince declares that the next person to break the peace
                      will be killed.
                      <br />
                      <br />
                      Romeo Montague and his friends gatecrash a Capulet party
                      and Romeo meets Juliet Capulet. He falls in love with her
                      instantly. They are shocked to discover they are sworn
                      enemies due to their feuding families. Friar Laurence
                      marries Romeo and Juliet.
                      <br />
                      <br />
                      Romeo goes to celebrate his marriage with his friends,
                      Mercutio and Benvolio, but gets into a fight with Juliet's
                      cousin, Tybalt. Tybalt kills Mercutio and Romeo avenges
                      his death by killing Tybalt.
                      <br />
                      <br />
                      The Prince banishes Romeo because he killed Tybalt. Both
                      Romeo and Juliet are heartbroken.
                      <br />
                      <br />
                      Capulet, Juliet's father, decides she should marry Paris.
                      Juliet refuses and goes to Friar Laurence where they come
                      up with a plan for Romeo and Juliet to be together.
                      <br />
                      <br />
                      Juliet fakes her death and lies in a tomb waiting for
                      Romeo to come so they can run away together. Romeo doesn't
                      receive the message about the plan, so thinks Juliet has
                      actually died. He goes to Verona and sees Juliet in her
                      tomb, 'dead'.
                      <br />
                      <br />
                      Romeo drinks poison so he can be with Juliet in death. She
                      wakes up to discover Romeo is dead. Juliet kills herself
                      with his dagger. The Capulet and Montague families vow
                      never to argue again.
                    </p>
                    <h2>Detailed Plot Summary</h2>
                    <br />
                    <p className="justifyContent">
                      <strong>An ancient grudge</strong>
                      <br />
                      <br />
                      The play opens with a prologue that highlights to the
                      audience the conflict between the two families: the
                      Montagues and the Capulets. It is described to be an
                      'ancient grudge'. The families' servants have an argument,
                      which quickly turns into something more violent and draws
                      the families into the conflict. Romeo's cousin, Benvolio,
                      and Juliet's cousin, the fiery Tybalt, get involved in the
                      fray. The heads of the families, Capulet and Montague,
                      also get involved but are quickly stopped when Prince
                      Escalus arrives and puts a stop to the brawling. He
                      declares that anybody fighting on the streets of Verona
                      will be killed. He hopes to put a stop to the fighting and
                      have peace in his city once again.
                      <br />
                      <br />
                      <strong>Romeo Meets Juliet</strong>
                      <br />
                      <br />
                      Romeo and Juliet meet at the ball and fall in love
                      Mercutio, Romeo's best friend, decides it would be a good
                      idea to gatecrash a Capulet party. Romeo, Mercutio and
                      Benvolio (Romeo's cousin) all go and have a good time.
                      Whilst dancing, Romeo meets Juliet and is struck by her
                      beauty. He speaks with her and they kiss, declaring their
                      love for one another. As he leaves, Romeo asks Juliet's
                      nurse for Juliet's name. The nurse tells him and he is
                      shocked to discover they are sworn enemies and that she is
                      the daughter of Capulet. Juliet feels the same way about
                      Romeo when she discovers his real identity. Romeo sneaks
                      into the Capulet mansion where he meets Juliet and they
                      decide to get married. The next day, Friar Laurence
                      marries Romeo and Juliet in secret. He secretly hopes that
                      it will end the conflict.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-two-english-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to return to English
          level one and brush up on your foundational knowledge. We will use our
          AI to determine if you are still at the same level, need to go back to
          basics or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default MediumEnglishCourse;
