import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>imsirshendu101@gmail.com</span>
        <div className="f-icons">
          <a href=" ">
          <Instagram color="white" size={"3rem"} />
          </a>
          <a href=" ">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/myselfSirshendu/">
          <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/sirshendu-santra/">
          <LinkedIn color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
