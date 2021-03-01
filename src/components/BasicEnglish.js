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
import ImageThree from "../img/non-fiction.jpg";
import ImageFour from "../img/james-boswell.jpg";
import ImageFive from "../img/text.jpg";
import ImageSix from "../img/comparison.jpg";
import ImageSeven from "../img/spelling.jpg";
import ImageEight from "../img/misspelling.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_EnglishLessons.scss";

const BasicEnglishCourse = () => {
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
        <h1 className="title">Level One English</h1>
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
                    alt="Map of the land of Oz, the fictional realm that is the setting for L. Frank Baum's Oz series."
                  />
                  <CardBody>
                    <CardTitle>Fiction</CardTitle>
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

              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="Bookcase filled with non-fiction books."
                  />
                  <CardBody>
                    <CardTitle>Non-Fiction</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Non-Fiction Storytelling
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Non-fiction is writing about facts and is meant to be
                      truthful, sometimes it may not be. People normally assume
                      that authors mean to be truthful, but they might make
                      mistakes.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Non-Fictional Writing"
                    url="https://www.youtube.com/watch?v=D74bF5h9KjM  "
                    src={ImageFour}
                    alt="James Boswell Portrait"
                    caption="James Boswell wrote what many consider to be the first modern biography, The Life of Samuel Johnson, in 1791."
                  >
                    <h2>Example of Non-Fiction</h2>
                    <br />
                    <p className="justifyContent">
                      A few examples of non-fiction are as follows:
                      <ul>
                        <li>Autobiographies</li>
                        <li>Dictionaries</li>
                        <li>Letters</li>
                        <li>Journals</li>
                        <li>Essay</li>
                      </ul>
                      As it can be seen in the list this type of writing usually
                      contains facts and information which is not made up.
                    </p>
                    <br />
                    <h2>Major Types</h2>
                    <br />
                    <p className="justifyContent">
                      Common examples of non-fiction include argumentative and
                      opinion pieces; essays on art or literature; biographies;
                      memoirs; journalism; and historical, scientific,
                      technical, or economic writings.
                    </p>
                    <h2>Characteristics of Non-Fiction</h2>
                    <br />
                    <p className="justifyContent">
                      Non-fiction will usually contain things like:
                      <ul>
                        <li>Real People</li>
                        <li>Real Places</li>
                        <li>Historical Events</li>
                        <li>
                          Personal Information eg a diary of someones daily life
                        </li>
                        <li>
                          Dates and times of things that actually occurred
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
                    src={ImageFive}
                    alt="Text written on old style script"
                  />
                  <CardBody>
                    <CardTitle>Comparing Text</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Purpose
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Comparing involves directly linking texts through their
                      similarities and differences. It is important to move
                      equally between the two texts, and write about them
                      together, not separately.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="How to Compare Texts"
                    url="https://www.youtube.com/watch?v=FghprVBySQw"
                    src={ImageSix}
                    alt="Comparison Chart"
                    caption="Look at the chart above, look familiar? It may do because its comparing phone prices, when we buy things we compare them, we even compare ourselves to others so it something we do anyway."
                  >
                    <h2>Comparing a Writer’s Methods</h2>
                    <br />
                    <p className="justifyContent">
                      Writers use different methods to achieve their purpose.
                      The form of a non-fiction text will also effect the
                      writer’s choice of method. A comparison of two texts
                      should focus on HOW the writer’s methods are similar
                      and/or different. For example, you could focus on a
                      writer’s use of:
                      <br />
                      <br />
                      <ul>
                        <li>Tone, eg humorous, serious, satirical</li>
                        <li>
                          Language, eg word choice, literary techniques,
                          rhetorical devices
                        </li>
                        <li>
                          Structure, eg order of ideas, repetition, sentence
                          structure
                        </li>
                      </ul>
                      The writer’s choice of method will have an effect on the
                      reader’s response: it’s important to think about the
                      impact on the reader when comparing texts. This is also
                      where you can share your opinion about a text. You are the
                      reader, so think about how the text is making you feel and
                      respond.
                    </p>
                    <br />
                    <h2>Comparing by Purpose and Form</h2>
                    <br />
                    <p className="justifyContent">
                      One way to link texts is through the purpose they are
                      aiming to achieve and the form they are using.
                      <br />
                      <br />
                      <strong>Form is the type of text, for example:</strong>
                      <ul>
                        <li>An Article</li>
                        <li>A Blog</li>
                        <li>A Letter</li>
                        <li>A Diary</li>
                        <li>A Newspaper</li>
                      </ul>
                      It’s also useful to think about whether the form is for a
                      public or private audience. For example, a letter is
                      usually for a private audience while a news article is
                      usually for a public audience. This will affect the
                      purpose of the text and the language choices made by the
                      writer.
                    </p>
                    <h2>Example</h2>
                    <br />
                    <p className="justifyContent">
                      Look at these headlines, from The Mirror and The
                      Telegraph, from articles reporting the same story. They
                      have the same main purpose – to inform people about the
                      landing of a space probe on a comet.
                      <br />
                      <br />
                      Rock Star - The Mirror
                      <br />
                      <br />
                      European Space Agency's Rosetta spacecraft lands probe on
                      comet - The Telegraph
                      <br />
                      <br />
                      <strong>Analysis</strong>
                      <br />
                      <br />
                      The Mirror has used a pun, which grabs the attention,
                      playing on the idea that a comet is a rock, and this is a
                      terrific achievement – so it’s like a ‘star’. But a ‘rock
                      star’ plays on ideas of celebrity. It’s a much shorter
                      headline, which might be more able to grab the attention
                      of the reader, but does not necessarily inform them of the
                      topic of the article.
                      <br />
                      <br />
                      The Telegraph headline provides a detailed level of
                      information to the reader to indicate the topic of the
                      headline. The headline provides the reader with the name
                      of the spacecraft which adds to the educational tone of
                      the headline. The newspaper uses a longer sentence rather
                      than making use of a particular technique, instead relying
                      on the reader's interest in the topic to attract them to
                      read.
                      <br />
                      <br />
                      The difference in the approaches could be because of their
                      different audiences. The Telegraph might assume that its
                      audience is already interested in science, whereas The
                      Mirror might feel it has to attract a reader and
                      entertain, as well as inform.
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
                    alt="Person holding blue ballpoint pen, writing in notebook"
                  />
                  <CardBody>
                    <CardTitle>Spelling</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Writing Correctly
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Learning to spell correctly means you’re more likely to be
                      understood. You can improve your confidence by reading
                      widely and learning to use spelling strategies.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Fundamentals of Spelling"
                    url="https://www.youtube.com/watch?v=TSOjdaWNsWU"
                    src={ImageEight}
                    alt="Misspelt Service Station Sign"
                    caption="A misspelling of purchased on a service station sign - Small errors like this can effect credibility, so it is important to always check spelling."
                  >
                    <h2>Spelling strategies</h2>
                    <br />
                    <p className="justifyContent">
                      There are many ways to help you remember how to spell
                      words. If there are certain words that you struggle with,
                      spend some time learning and practising them so you can
                      easily recall the correct spelling in future. You could:
                      <br />
                      <br />
                      <ul>
                        <li>Use mnemonics (see below)</li>
                        <li>Write the words out again and again</li>
                        <li>
                          Get creative and make colourful posters featuring the
                          words you want to remember
                        </li>
                        <li>
                          Ask for help from friends, family or teachers or use
                          spelling apps to practice
                        </li>
                      </ul>
                      Spending time on spelling will be worth it. Accurate
                      spelling helps to ensure that your intended meaning is
                      conveyed through your writing.
                    </p>
                    <br />
                    <h2>Mnemonics</h2>
                    <br />
                    <p className="justifyContent">
                      A mnemonic is a tool that helps your memory to retrieve
                      information you have stored. In spelling you might use a
                      pattern, rhyme or saying to help you recall the way a word
                      is put together.
                      <br />
                      <br />
                      For example, a mnemonic for remembering ‘necessary’:
                      <br />
                      <br />
                      “It’s necessary that a shirt has one collar and two
                      sleeves.”
                      <br />
                      <br />
                      This helps us to remember that ‘necessary’ has one ‘c’
                      (collar) and two ‘s’s (sleeves).
                    </p>
                    <h2>Hear With Your Ear</h2>
                    <br />
                    <p className="justifyContent">
                      Another way of remembering a tricky spelling is to sound
                      the word out. By doing this, you break down the way the
                      word is structured and this makes it easier to remember.
                      <br />
                      <br />
                      For example, you might break down the word ‘friend’ to
                      'fri-end' to remind you that the 'i' comes before the 'e'.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-one-english-quiz">
          This is the section where you can take a test to determine if you are
          ready to step up to the next level or if you need to do some more work
          on your current level. We will use our AI to determine if you are
          still at the same level or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default BasicEnglishCourse;
