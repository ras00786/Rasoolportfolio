import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ras00786/e-commerce" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-commerce - Backend(Node.js)</h3>
              <p>
              This website sells men's cloth products and helps men look their best. It is easy to find what you need, whether it's cloth shirts, pants, or accessories. The site is useful for men who want to look their best and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ras00786/TodoListReact" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Todo List</h3>
              <p>
              In this project, I developed a full-stack TodoList application using React for the frontend and Node.js with Express for the backend. The application allows users to manage their tasks efficiently, including adding new tasks, removing completed tasks, and marking tasks as completed. With a clean and intuitive user interface, users can easily organize their daily activities and stay productive.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title>you</svg>
              <div className="project-links">
                <a href="https://green-beach-0caa2f210.3.azurestaticapps.net/sign-in?redirectUrl=/company-list" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>NewEra - Health Care(React.Js)</h3>
              <p>
              The new ERA web portal is designed to cater the needs of patients / attorney / Copy Services for medical, billing and XRay documents from doctor facility. Typically, these record requests needed for the patient / attorney / Copy Services as
              a result of legal / court proceeding. In order to request any documents, patient / attorney / Copy Services should register
              themselves into Customer portal.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Redux</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}