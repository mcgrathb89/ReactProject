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
import ImageThree from "../img/keyboard.jpg";
import ImageFour from "../img/spanish-language-pack.jpg";
import ImageFive from "../img/language-comparison.jpg";
import ImageSix from "../img/meme.jpg";
import ImageSeven from "../img/diversity.jpg";
import ImageEight from "../img/map.jpg";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TestSection from "./TestSection";
import "../styles/_EnglishLessons.scss";

const AdvancedEnglishCourse = () => {
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
        <h1 className="title">Level Three English</h1>
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
                  <CardImg src={ImageOne} alt="Sociolinguistics book." />
                  <CardBody>
                    <CardTitle>Sociolinguistics</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Language Varieties
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The descriptive study of the effect of any and all aspects
                      of society, including cultural norms, expectations, and
                      context, on the way language is used, and society's effect
                      on language.
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

              <div className="englishCardDiv">
                <Card>
                  <CardImg
                    src={ImageThree}
                    alt="Image of a keyboard"
                  />
                  <CardBody>
                    <CardTitle>Computer-Mediated Communication</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Electronic Human Communication
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Computer-mediated communication (CMC) is defined as any
                      human communication that occurs through the use of two or
                      more electronic devices.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Fundamentals of Computer Based Communication"
                    url="https://www.youtube.com/watch?v=awfT-GXYEUM"
                    src={ImageFour}
                    alt="Spanish language software"
                    caption="Due to the growth of technology, learning languages has become more accessible though spoken dialects, situational videos and contextual scenarios which make learning a new language much easier."
                  >
                    <h2>Forms</h2>
                    <br />
                    <p className="justifyContent">
                      Computer-mediated communication can be broken down into
                      two forms: synchronous and asynchronous. Synchronous
                      computer-mediated communication refers to communication
                      which occurs in real time. All parties are engaged in the
                      communication simultaneously; however, they are not
                      necessarily all in the same location. Examples of
                      synchronous communication are video chats and FaceTime
                      audio calls.
                    </p>
                    <br />
                    <h2>Scope</h2>
                    <br />
                    <p className="justifyContent">
                      Scholars from a variety of fields study phenomena that can
                      be described under the umbrella term of computer mediated
                      communication (CMC) (see also Internet studies). For
                      example, many take a sociopsychological approach to CMC by
                      examining how humans use "computers" (or digital media) to
                      manage interpersonal interaction, form impressions and
                      form and maintain relationships.
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
                    alt="Language Comparison Chart (old vs new English)"
                  />
                  <CardBody>
                    <CardTitle>Language Change</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      English Language Evolution
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      Language change is variation over time in a language's
                      features. It is studied in several subfields of
                      linguistics: historical linguistics, sociolinguistics, and
                      evolutionary linguistics.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Evolution of Languages"
                    url="https://www.youtube.com/watch?v=pFkNed4gsRU"
                    src={ImageSix}
                    alt="Meme image"
                    caption="Memes have become a new medium of communication in modern day society, with memes it is easy to convey for the purposes of informing or entertaining."
                  >
                    <h2>Causes</h2>
                    <br />
                    <p className="justifyContent">
                      {" "}
                      <strong>Economy:</strong> Speech communities tend to
                      change their utterances to be as efficient and effective
                      (with as little effort) as possible, while still reaching
                      communicative goals. Purposeful speaking therefore
                      involves a trade-off of costs and benefits.
                      <br />
                      <br />
                      The principle of least effort tends to result in phonetic
                      reduction of speech forms. See vowel reduction, cluster
                      reduction, lenition, and elision. After some time a change
                      may become widely accepted (it becomes a regular sound
                      change) and may end up treated as standard. For instance:
                      going to → gonna.
                      <br />
                      <br />
                      <strong>Expressiveness:</strong> Common or overused
                      language tends to lose its emotional or rhetorical
                      intensity over time; therefore, new words and
                      constructions are continuously employed to revive that
                      intensity.
                      <br />
                      <br />
                      <strong>Analogy:</strong> Over time, speech communities
                      unconsciously apply patterns of rules in certain words,
                      sounds, etc. to unrelated other words, sounds, etc.
                      <br />
                      <br />
                      <strong>Language Contact:</strong> Words and constructions
                      are borrowed from one language into another. Geographic
                      separation: When people with one language move away from
                      each other, the language will gradually diverge into
                      separate dialects, due to different experiences.
                      <br />
                      <br />
                      <strong>Cutural Environment:</strong> As a culture
                      evolves, new places, situations, and objects inevitably
                      enter its language, whether or not the culture encounters
                      different people.
                      <br />
                      <br />
                      <strong>Migration/Movement:</strong> Speech communities,
                      moving into a region with a new or more complex linguistic
                      situation, will influence, and be influenced by, language
                      change; they sometimes even end up with entirely new
                      languages, such as pidgins and creoles.
                      <br />
                      <br />
                      <strong>Imperfect Learning:</strong> According to one
                      view, children regularly learn the adult forms
                      imperfectly, and the changed forms then turn into a new
                      standard. Alternatively, imperfect learning occurs
                      regularly in one part of society, such as an immigrant
                      group, where the minority language forms a substratum, and
                      the changed forms can ultimately influence majority usage.
                      <br />
                      <br />
                      <strong>Social Prestige:</strong> Language may not only
                      change towards features that have more social prestige,
                      but also away from ones with negative prestige, as in the
                      case of the loss of rhoticity in the British Received
                      Pronunciation accent. Such movements can go back and
                      forth.
                    </p>
                    <br />
                    <h2>Lexical Changes</h2>
                    <br />
                    <p className="justifyContent">
                      The study of lexical changes forms the diachronic portion
                      of the science of onomasiology. The ongoing influx of new
                      words into the English language (for example) helps make
                      it a rich field for investigation into language change,
                      despite the difficulty of defining precisely and
                      accurately the vocabulary available to speakers of
                      English. Throughout its history English has not only
                      borrowed words from other languages but has re-combined
                      and recycled them to create new meanings, whilst losing
                      some old words.
                    </p>
                    <h2>Phonetic and Phonological Changes</h2>
                    <br />
                    <p className="justifyContent">
                      The concept of sound change covers both phonetic and
                      phonological developments.
                      <br />
                      <br />
                      The sociolinguist William Labov recorded the change in
                      pronunciation in a relatively short period in the American
                      resort of Martha's Vineyard and showed how this resulted
                      from social tensions and processes. Even in the relatively
                      short time that broadcast media have recorded their work,
                      one can observe the difference between the pronunciation
                      of the newsreaders of the 1940s and the 1950s and the
                      pronunciation of today. The greater acceptance and
                      fashionability of regional accents in media may[original
                      research?] also reflect a more democratic, less formal
                      society — compare the widespread adoption of language
                      policies.
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
                    alt='Blue poster containing the word "Diversity"'
                  />
                  <CardBody>
                    <CardTitle>Linguistic Diversity</CardTitle>
                    <CardSubtitle
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Living Languages
                    </CardSubtitle>
                    <CardText className="cardText">
                      <br />
                      The exact number of known living languages varies from
                      6,000 to 7,000, depending on the precision of one's
                      definition of "language", and in particular, on how one
                      defines language.
                    </CardText>
                  </CardBody>
                  <Modal
                    title="Exploring Diversity in Linguistics"
                    url="https://www.youtube.com/watch?v=KcEg12ErvKI"
                    src={ImageEight}
                    alt="Map of the World."
                    caption="The world is vast, as are the languages that are spoken throughout the world, although they are all different, many languages are formed off similar concepts."
                  >
                    <h2>Languages and Dialects</h2>
                    <br />
                    <p className="justifyContent">
                      There is no clear distinction between a language and a
                      dialect, notwithstanding a famous aphorism attributed to
                      linguist Max Weinreich that "a language is a dialect with
                      an army and navy". For example, national boundaries
                      frequently override linguistic difference in determining
                      whether two linguistic varieties are languages or
                      dialects. Hakka, Cantonese and Mandarin are, for example,
                      often classified as "dialects" of Chinese, even though
                      they are more different from each other than Swedish is
                      from Norwegian.
                    </p>
                    <br />
                    <h2>Language Families of the World</h2>
                    <br />
                    <p className="justifyContent">
                      The world's languages can be grouped into language
                      families consisting of languages that can be shown to have
                      common ancestry. Linguists recognize many hundreds of
                      language families, although some of them can possibly be
                      grouped into larger units as more evidence becomes
                      available and in-depth studies are carried out. At
                      present, there are also dozens of language isolates:
                      languages that cannot be shown to be related to any other
                      languages in the world.
                    </p>
                    <h2>Language Endangerment</h2>
                    <br />
                    <p className="justifyContent">
                      Language endangerment occurs when a language is at risk of
                      falling out of use as its speakers die out or shift to
                      speaking another language. Language loss occurs when the
                      language has no more native speakers, and becomes a dead
                      language. If eventually no one speaks the language at all,
                      it becomes an extinct language. While languages have
                      always gone extinct throughout human history, they have
                      been disappearing at an accelerated rate in the 20th and
                      21st centuries due to the processes of globalization and
                      neo-colonialism, where the economically powerful languages
                      dominate other languages.
                    </p>
                    <br />
                  </Modal>
                  <br />
                </Card>
              </div>
            </Row>
          </Container>
        </Container>
        <TestSection link="/mainpage/level-three-english-quiz">
          This is the section where you can take a test to determine if you are
          beyond the GCSE level three skill level or if you need to return to
          English level two and brush up on additional core knowledge. We will
          use our AI to determine if you are still at the same level, need to
          revise core knowledge or if you need to be challenged further.
        </TestSection>
      </div>
    </>
  );
};

export default AdvancedEnglishCourse;
