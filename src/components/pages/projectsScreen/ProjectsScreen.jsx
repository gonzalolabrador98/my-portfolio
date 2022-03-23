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
          className="card glass"
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
          <hr style={{ margin: '30px' }} />

          <div className="imgProjects">
            <div>
              <h1 className="titles">TODO App</h1>

              <div class="badge bg-red-700 m-1">HTML</div>
              <div class="badge bg-blue-900 m-1">CSS</div>
              <div class="badge bg-yellow-400 m-1">Javascript</div>

              <p>
                It is my first application created in a Javascript course. It
                consists of a recorder of tasks performed and to be performed.
                It was made using HTML5, CSS3 y JAVASCRIPT.
              </p>
              <a
                target="_blank"
                href="https://gonzalolabrador98.github.io/todo.js/"
                rel="noreferrer"
              >
                <img src={todoapp} class="w-full" alt="todoapp" />
              </a>
              <hr style={{ margin: '30px' }} />
            </div>

            <div>
              <h1 className="titles">GifExpert App</h1>

              <div class="badge bg-red-700 m-1">HTML</div>
              <div class="badge bg-blue-700 m-1">CSS</div>
              <div class="badge bg-yellow-400 m-1">Javascript</div>
              <div class="badge bg-blue-900 m-1">React</div>
              <div class="badge m-1">API</div>

              <p>
                Do you like gifs? In this application you can find the one you
                like just by typing a keyword. It was made using HTML5, CSS3,
                JAVASCRIPT and REACT consulting GIPHY API.
              </p>

              <a
                target="_blank"
                href="https://gifexpertreact.netlify.app"
                rel="noreferrer"
              >
                <img src={gifapp} class="w-full" alt="gifexpert" />
              </a>
              <hr style={{ margin: '30px' }} />
            </div>

            <div>
              <h1 className="titles">Heroes App</h1>
              <p>
                In Heroes App you have all the heroes of Marvel and DC. You can
                find them on your own, or search for them by placing the hero's
                name in the search engine. It was made using HTML5, CSS3,
                JAVASCRIPT, BOOTSTRAP and REACT.
              </p>
              <div class="badge bg-red-700 m-1">HTML</div>
              <div class="badge bg-blue-700 m-1">CSS</div>
              <div class="badge bg-yellow-400 m-1">Javascript</div>
              <div class="badge bg-blue-900 m-1">React</div>
              <div class="badge bg-purple-900 m-1">Bootstrap</div>

              <a
                target="_blank"
                href="https://marveldcapp.netlify.app"
                rel="noreferrer"
              >
                <img src={marveldcapp} class="w-full" alt="marveldcapp" />
              </a>
              <hr style={{ margin: '30px' }} />
            </div>

            <div>
              <h1 className="titles">Journal App</h1>

              <div class="badge bg-red-700 m-1">HTML</div>
              <div class="badge bg-blue-700 m-1">CSS</div>
              <div class="badge bg-yellow-400 m-1">Javascript</div>
              <div class="badge bg-blue-900 m-1">React</div>
              <div class="badge bg-purple-800 m-1">Redux</div>
              <div class="badge m-1">Firebase</div>

              <p>
                Physical journals are a thing of the past, now you can write
                your daily activities in JournalApp! It's super private, only
                you can see what you write by creating a generic account or
                logging in with your gmail. You can put a title, a story or even
                upload a photo. It was made with HTML5, CSS3, JAVASCRIPT, REACT,
                REDUX and FIREBASE.
              </p>

              <a
                target="_blank"
                href="https://journalappreact.netlify.app"
                rel="noreferrer"
              >
                <img src={journalapp} class="w-full" alt="journalapp" />
              </a>
              <hr style={{ margin: '30px' }} />
            </div>

            <div>
              <h1 className="titles">Movie App</h1>

              <div class="badge bg-red-700 m-1">HTML</div>
              <div class="badge bg-blue-700 m-1">CSS</div>
              <div class="badge bg-yellow-400 m-1">Javascript</div>
              <div class="badge bg-blue-900 m-1">React</div>
              <div class="badge m-1">API</div>
              <div class="badge bg-blue-400 m-1">Material UI</div>

              <p>
                Movie App brings you all the movies of the moment describing its
                ranking, title, image and number of votes. You can click on the
                one that interests you and read the description of the movie in
                a modal. You can also change the order, from A to Z, from Z to A
                and by ranking. It was made using HTML5, CSS3, JAVASCRIPT,
                MATERIAL UI, REACT, REDUX and THEMOVIEDB API.
              </p>

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
      <br />
    </>
  );
};
