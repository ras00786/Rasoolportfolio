import { Container } from "./styles";
import Rasool from "../../assets/Rasool.png";
import htmlIcon from "../../assets/html-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About me</h2>
        <p>
          Hi there! I'm Mohammad Rasool, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Gained handful of experience working as a software developer . I love creating projects that explore new things and have better functionalities, you can check out some of my work in the projects section
        </p>
        <p>
          I am open to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.
        </p>

        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          <div className="hability">
            <img src={vscodeIcon} alt="vscode"/>
          </div>
          <div className="hability">
            <img src={mysqlIcon} alt="mysql"/>
          </div>
          <div className="hability">
            <img src={reactIcon} alt="React"/>
          </div>
          <div className="hability">
            <img src={typescriptIcon} alt="Typescript"/>
          </div>
          <div className="hability">
            <img src={nodeIcon} alt="Node"/>
          </div>
          <div className="hability">
            <img src={htmlIcon} alt="Html"/>
          </div>
          <div className="hability">
            <img src={cssIcon} alt="Css"/>
          </div>
          <div className="hability">
            <img src={boostrapIcon} alt="Bootstrap" />
          </div>
          <div className="hability">
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={Rasool} alt="Rasool" />
      </div>
    </Container>
  )
}
