import ProjectCard from "./ProjectCard";
import { projects } from "../../data";
import React from "react";

const ProjectsBlock = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-intro">
          <h1>PROJECTS</h1>
        </div>

        {projects.map((project, index) => {
          return (
            <React.Fragment key = {index}>
              <ProjectCard project = {project}/>
            </React.Fragment>
          )
        })}
        <div className="project-card"></div>
        <div className="project-card"></div>

      </section>

      <style jsx>
        {`
          #projects {
            padding-top: 80px;
            background-color: #000;
            color: #fff;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .projects-intro {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .projects-intro h1 {
            font-size: 2rem;
            font-weight: 300;
          }

          @media screen and (max-width: 1080px) {
            #projects {
              display: flex;
              flex-direction: column;
            }

            .projects-intro {
              display: block;
              margin: 0 10vw 30px 10vw;
              border-bottom: 1px solid #fff;
              padding-bottom: 10px;
            }

            .projects-intro h1 {
              font-size: 1.5em;
              font-weight: 400;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectsBlock;