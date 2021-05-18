import ProjectCard from "./ProjectCard";
import { projects } from "../../data";
import React from "react";

const ProjectsBlock = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-intro">
          <h1>This is a description of my projects.</h1>
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
            background-color: #000;
            color: #fff;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .projects-intro {
            height: 500px;
            border: 1px solid white;
            padding: 80px;
          }

          @media screen and (max-width: 1080px) {
            #projects {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectsBlock;