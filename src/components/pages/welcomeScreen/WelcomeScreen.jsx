import React from 'react';
import perfil from '../../../assets/perfil.jpeg';
import './welcomeScreen.css';
import 'animate.css';

export const WelcomeScreen = ({ setWelcome }) => {
  const handleOnClick = () => {
    setWelcome(false);
  };

  return (
    <div className="welcome animate__animated animate__fadeIn">
      <div>
        <img
          src={perfil}
          alt="Gonzalo Labrador"
          style={{
            width: '230px',
            display: 'inline',
            borderRadius: '60px',
            margin: '20px',
          }}
        />

        <h1 className="titleAboutMe">Hey there! Welcome to my portfolio.</h1>
        <p>My name is Gonzalo Labrador and I'm 23 years old.</p>
        <p style={{ marginBottom: '40px' }}>
          I'm building my career as a front-end developer for a long time and my
          goal is to become a professional developer.{' '}
        </p>
      </div>

      <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
        <button
          onClick={handleOnClick}
          class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Let's see my portfolio!{' '}
        </button>
      </div>
    </div>
  );
};
