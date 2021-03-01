import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function LevelFour() {
  return (
    <div id="main" fluid>
      <Navbar>
        <NavLink exact to="/mainpage">
          Homepage
        </NavLink>
        <NavLink id="exitButton" exact to="/">
          Exit
        </NavLink>
      </Navbar>
      <CSSTransitionGroup
        className="testContainer result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div class="text-center">
          <h1>LEVEL FOUR COURSE INFORMATION</h1>
          <p>
            Below are a list of the different options available to you if you
            wish to progress to level four.
          </p>
        </div>
        <h1>Certificate of Higher Education</h1>
        <p class="text-justify">
          A Certificate of Higher Education (Cert.H.E./CertHE) is a higher
          education qualification in the United Kingdom. It is awarded after one
          year of full-time study (or equivalent) at a university or other
          higher education institution, or two years of part-time study. A
          CertHE is an independent tertiary award, an award in its own right,
          and students can study for a CertHE in various academic disciplines.
          At Level 4 on the national qualifications framework for England, Wales
          and Northern Ireland, the CertHE is the academic equivalent of the
          more vocational Higher National Certificate. A CertHE is not
          externally regulated but is accredited by a university itself. On
          completion, students are permitted to use the postnominals CertHE
          after their name, sometimes followed by the course name in brackets
          and the University from which they earned their qualification.
          Sometimes, having a CertHE can exempt the holder from some of the
          requirements of a bachelor's degree; for example, it might reduce the
          length of study by one or two years, or reduce the number of courses
          necessary to complete the qualification. A CertHE is worth 120
          credits; 60 within the European Credit Transfer and Accumulation
          System (ECTS). A Diploma of Higher Education (DipHE) is worth 240
          credits (120 ECTS), of which 120 credits must be at Level 4 with a
          minimum of 80 credits at Level 5. A DipHE is equivalent to the first
          two years of an undergraduate degree. An undergraduate degree
          comprises a minimum of 360 credits.
        </p>
        <h1>Higher Apprenticeship</h1>
        <p class="text-justify">
          A Higher Apprenticeship is the vocational equivalent to a Foundation
          University degree. This programme will deliver a level 4-5
          qualification and can only be undertaken if a level 3 equivalent has
          already been achieved. However, more recently a number of Training
          Providers that offer higher apprenticeships do not always require
          these qualifications. Relevant experience could lead to an interview
          with the training provider before being accepted onto the programme.
        </p>
        <h1>Higher National Certificates and Higher National Diplomas</h1>
        <p class="text-justify">
          HNCs and HNDs focus on 'learning by doing' and give skills that you
          can use in a particular job. They are highly valued by employers and
          can also count towards membership of professional bodies and other
          employer organisations. Both qualifications are provided by further
          and higher education colleges. HNCs take about one year to complete
          full-time and two years part-time. HNDs take two years full-time and
          can also be taken part-time, which takes longer.
        </p>
        <br />
        <br />
        <div className="col text-center">
          <NavLink exact to="/mainpage">
            <Button color="secondary">Home</Button>
          </NavLink>
        </div>
      </CSSTransitionGroup>
    </div>
  );
}

export default LevelFour;
