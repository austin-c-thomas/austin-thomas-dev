import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

const ProjectCard = ({ project }) => {
  console.log('PROJECT: ', project)

  const [ hovered, setHovered ] = useState(false);

  return (
    <>
      <div className="project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(true)}>

        <div className="card-image">
          <div className={hovered ? "overlay-shown" : "overlay-hidden"}>
            <div className="overlay-content">
              <span className="classification">{project.type} - {project.job} - {project.role}</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              
              <div className="actions-wrapper">
                <div className="button-group">
                  DEPLOY:
                  <a href={project.deploy} target="_blank">
                    <Button variant="outlined" color="primary">VISIT</Button>
                  </a>
                </div>

                <div className="button-group">
                  GITHUB:
                  <div className="buttons">
                  { project.private ?
                  <span>
                    Contact for access
                  </span>
                  : project.frontend && project.backend ?
                    <>
                      <a href={project.frontend} target="_blank">
                        <Button variant="outlined" color="primary">FRONTEND</Button>
                      </a>

                      <a href={project.backend} target="_blank">
                        <Button variant="outlined" color="primary">BACKEND</Button>
                      </a>
                    </>

                  : project.frontend && !project.backend ?
                    <a href={project.frontend} target="_blank">
                      <Button variant="outlined" color="primary">FRONTEND</Button>
                    </a>

                  : !project.frontend && project.backend ?
                    <a href={project.backend} target="_blank">
                      <Button variant="outlined" color="primary">BACKEND</Button>
                    </a>
                  : ''
                  }
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>

        
      </div>

      <style jsx>
        {`
          .project-card {
            display: flex;
            overflow: hidden;
            min-height: 400px;
          }

          .card-image {
            height: 100%;
            width: 100%;
            background: url(${project.imageURL});
            background-size: cover;
            background-position: center;
            transition: transform 0.6s;
          }

          .card-image:hover {
            transform: scale(1.2);
          }
          
          .overlay-hidden {
            display: none;
          }

          .overlay-shown {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.95);
            -webkit-animation: fadeIn 0.6s;
            -moz-animation: fadeIn 0.6s;
            -o-animation: fadeIn 0.6s;
            animation: fadeIn 0.6s; 
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .overlay-content {
            position: relative;
            right: 10%;
            height: 50%;
            width: 50%;
          }

          .classification {
            margin-bottom: 50px;
            color: rgb(160, 160, 160);
          }

          .overlay-content h1 {
            font-weight: 300;
            font-size: 2rem;
          }

          .actions-wrapper {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          
          .button-group {
            display: flex;
            flex-direction: column;
          }

          .button-group a, .button-group span {
            margin: 10px 10px 0 0;
          }

          .buttons {
            display: flex;
          }

          @keyframes fadeIn {
            0% { background-color: rgba(0, 0, 0, 0); }
            100 { background-color: rgba(0, 0, 0, 0.95); }
          }

          @media screen and (max-width: 1080px) {
            .card-image {
              height: inherit;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectCard;