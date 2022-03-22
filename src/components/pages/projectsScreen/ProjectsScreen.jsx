import React from 'react';
import todoapp from '../../../assets/todoapp.png';
import gifapp from '../../../assets/gifapp.png';
import marveldcapp from '../../../assets/heroesapp.png';
import journalapp from '../../../assets/journalapp.png';
import moviesapp from '../../../assets/moviesapp.png';
import './projectsScreen.css';

export const ProjectsScreen = () => {
  return (
    <>
      <div className="profileProjects animate__animated animate__fadeIn">
        <div
          className=" card glass"
          style={{
            paddingBottom: '30px',
            paddingRight: '30px',
            paddingLeft: '30px',
            width: '100%',
          }}
        >
          <div className="card-body">
            <h1 className="titleProjects">Projects</h1>
            <p>Click on the image to go to the project!</p>
          </div>
          <hr />

          <div className="imgProjects">
            <div>
              <h1 style={{ fontSize: '40px', paddingTop: '10px' }}>TODO App</h1>
              <p>
                It is my first application created in a Javascript course. It
                consists of a recorder of tasks performed and to be performed.
              </p>
              <a
                target="_blank"
                href="https://gonzalolabrador98.github.io/todo.js/"
                rel="noreferrer"
              >
                <img src={todoapp} class="w-full" alt="todoapp" />
              </a>
              <hr />
            </div>

            <div>
              <h1>GifExpert App</h1>
              <a
                target="_blank"
                href="https://gifexpertreact.netlify.app"
                rel="noreferrer"
              >
                <img src={gifapp} class="w-full" alt="gifexpert" />
              </a>
              <hr />
            </div>

            <div>
              <h1>Heroes App</h1>
              <a
                target="_blank"
                href="https://marveldcapp.netlify.app"
                rel="noreferrer"
              >
                <img src={marveldcapp} class="w-full" alt="marveldcapp" />
              </a>
              <hr />
            </div>

            <div>
              <h1>Journal App</h1>
              <a
                target="_blank"
                href="https://journalappreact.netlify.app"
                rel="noreferrer"
              >
                <img src={journalapp} class="w-full" alt="journalapp" />
              </a>
              <hr />
            </div>

            <div>
              <h1>Movies App</h1>
              <a
                target="_blank"
                href="https://gonzalolabrador98.github.io/movies-app/"
                rel="noreferrer"
              >
                <img src={moviesapp} class="w-full" alt="moviesapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
