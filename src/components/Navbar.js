import React from "react";
import ImageOne from "../img/SmallLogo.png";
import "../styles/_Navbar.scss";

const Navbar = props => {

  const open = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
  };
  
  return (
    <>
      <div id="mySidenav" className="sidenav" onClick={close}>
        <a href="javascript:void(0)" className="closebtn">
          &times;
        </a>
        <img src={ImageOne} alt="Navbar Logo" className="navlogo" />
        <div>
          <br />
        </div>
        {props.children}
      </div>
      <span className="span-style" onClick={open}>
        &#9776;
      </span>
    </>
  );
};

export default Navbar;
