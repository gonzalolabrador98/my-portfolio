import React from 'react';
import './aboutMeScreen.css';
import 'animate.css';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import js from '../../../assets/js.png';
import react from '../../../assets/react.png';
import redux from '../../../assets/redux.png';

export const AboutMeScreen = () => {
  return (
    <div className="aboutMe animate__animated animate__fadeIn">
      <div className=" card w-100 glass">
        <div className="card-body">
          <h1 className="titleAboutMe">About me</h1>

          <p>
            I'm passionate about computers and web development. I consider
            myself a committed, responsible, proactive person focused on solving
            all the challenges that are proposed to me, demanding myself to
            achieve the goal. My goal is to be part of a work team in which I
            can develop professionally and thus be able to grow in my career as
            a web developer.
          </p>
        </div>
      </div>

      <div className="imgAboutMe">
        <div>
          <img src={html} alt="html" />
        </div>
        <div>
          <img src={css} alt="css" />
        </div>
        <div>
          <img src={js} alt="js" />
        </div>
        <div>
          <img src={react} alt="react" />
        </div>
        <div>
          <img src={redux} alt="redux" />
        </div>
      </div>
    </div>
  );
};
