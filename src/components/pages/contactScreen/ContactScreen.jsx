import React from 'react';
import './contactScreen.css';
import 'animate.css';
import linkedin from '../../../assets/linkedin.png';
import gmail from '../../../assets/gmail.png';
import whatsapp from '../../../assets/whatsapp.png';
import github from '../../../assets/github.png';
export const ContactScreen = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="contact card w-100 glass">
          <div className="card-body">
            <h1 className="title">Contact</h1>
            <p>Contact me if you found my profile interesting!</p>
          </div>
        </div>
        <div className="imgContact">
          <div>
            <a
              target="_blank"
              href="https://github.com/gonzalolabrador98"
              rel="noreferrer"
            >
              <img src={github} alt="whatsapp" className="imgSingle" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gonzalolabrador/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="imgSingle" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="mailto:gonzalolabrador98@gmail.com"
              rel="noreferrer"
            >
              <img
                src={gmail}
                alt="gmail"
                className="imgSingle"
                style={{ width: '175px' }}
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://wa.me/+543541632097"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" className="imgSingle" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
