import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/MainPage";
import General from "./components/General"
import Maths from "./components/Maths";
import English from "./components/English";
import Science from "./components/Science";
import BasicGeneral from "./components/BasicGeneral";
import MediumGeneral from "./components/MediumGeneral";
import AdvancedGeneral from "./components/AdvancedGeneral";
import BasicMaths from "./components/BasicMaths";
import MediumMaths from "./components/MediumMaths";
import AdvancedMaths from "./components/AdvancedMaths";
import BasicEnglish from "./components/BasicEnglish";
import MediumEnglish from "./components/MediumEnglish";
import AdvancedEnglish from "./components/AdvancedEnglish";
import BasicScience from "./components/BasicScience";
import MediumScience from "./components/MediumScience";
import AdvancedScience from "./components/AdvancedScience";
import LevelFour from "./components/LevelFourInfo"
import LevelOneGeneralQuiz from "./components/GeneralLevelOneQuiz";
import LevelTwoGeneralQuiz from "./components/GeneralLevelTwoQuiz";
import LevelThreeGeneralQuiz from "./components/GeneralLevelThreeQuiz";
import LevelOneEnglishQuiz from "./components/EnglishLevelOneQuiz";
import LevelTwoEnglishQuiz from "./components/EnglishLevelTwoQuiz";
import LevelThreeEnglishQuiz from "./components/EnglishLevelThreeQuiz";
import LevelOneMathsQuiz from "./components/MathsLevelOneQuiz";
import LevelTwoMathsQuiz from "./components/MathsLevelTwoQuiz";
import LevelThreeMathsQuiz from "./components/MathsLevelThreeQuiz";
import LevelOneScienceQuiz from "./components/ScienceLevelOneQuiz";
import LevelTwoScienceQuiz from "./components/ScienceLevelTwoQuiz";
import LevelThreeScienceQuiz from "./components/ScienceLevelThreeQuiz";

function App() {
  return (
    <Router>
      <div>
        <header>
          <switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/mainpage/level-four-info" component={LevelFour}/>
          <Route exact path="/mainpage" component={Main}/>
          <Route exact path="/mainpage/general" component={General}/>
          <Route exact path="/mainpage/maths" component={Maths}/>
          <Route exact path="/mainpage/english" component={English}/>
          <Route exact path="/mainpage/science" component={Science}/>
          <Route exact path="/mainpage/lvl-one-general" component={BasicGeneral}/>
          <Route exact path="/mainpage/lvl-two-general" component={MediumGeneral}/>
          <Route exact path="/mainpage/lvl-three-general" component={AdvancedGeneral}/>
          <Route exact path="/mainpage/lvl-one-maths" component={BasicMaths}/>
          <Route exact path="/mainpage/lvl-two-maths" component={MediumMaths}/>
          <Route exact path="/mainpage/lvl-three-maths" component={AdvancedMaths}/>
          <Route exact path="/mainpage/lvl-one-english" component={BasicEnglish}/>
          <Route exact path="/mainpage/lvl-two-english" component={MediumEnglish}/>
          <Route exact path="/mainpage/lvl-three-english" component={AdvancedEnglish}/>
          <Route exact path="/mainpage/lvl-one-science" component={BasicScience}/>
          <Route exact path="/mainpage/lvl-two-science" component={MediumScience}/>
          <Route exact path="/mainpage/lvl-three-science" component={AdvancedScience}/>
          <Route exact path="/mainpage/level-one-general-quiz" component={LevelOneGeneralQuiz}/>
          <Route exact path="/mainpage/level-two-general-quiz" component={LevelTwoGeneralQuiz}/>
          <Route exact path="/mainpage/level-three-general-quiz" component={LevelThreeGeneralQuiz}/>
          <Route exact path="/mainpage/level-one-english-quiz" component={LevelOneEnglishQuiz}/>
          <Route exact path="/mainpage/level-two-english-quiz" component={LevelTwoEnglishQuiz}/>
          <Route exact path="/mainpage/level-three-english-quiz" component={LevelThreeEnglishQuiz}/>
          <Route exact path="/mainpage/level-one-maths-quiz" component={LevelOneMathsQuiz}/>
          <Route exact path="/mainpage/level-two-maths-quiz" component={LevelTwoMathsQuiz}/>
          <Route exact path="/mainpage/level-three-maths-quiz" component={LevelThreeMathsQuiz}/>
          <Route exact path="/mainpage/level-one-science-quiz" component={LevelOneScienceQuiz}/>
          <Route exact path="/mainpage/level-two-science-quiz" component={LevelTwoScienceQuiz}/>
          <Route exact path="/mainpage/level-three-science-quiz" component={LevelThreeScienceQuiz}/>
          </switch>
        </header>
      </div>
    </Router>
  );
}

export default App;