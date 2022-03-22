import React from 'react';
import './formationScreen.css';
import 'animate.css';

export const FormationScreen = () => {
  return (
    <div className=" animate__animated animate__fadeIn">
      <div className="profileFormation card w-100 glass ">
        <div className="card-body">
          <h1 className="titleFormation">Formation</h1>
          <p>Click on the boxes to see my educational background!</p>
          <br />
          <div tabIndex="0" className=" collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content"
              style={{ fontSize: '25px' }}
            >
              2010 to 2017
            </div>
            <div className="collapse-content bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
              <p style={{ fontWeight: 'bold' }}>
                High School: IPET N°60 Mariano Moreno:
              </p>{' '}
              <br />
              <p>
                • Secondary Education Certificate: Electronics Technician
              </p>{' '}
            </div>
          </div>

          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content"
              style={{ fontSize: '25px' }}
            >
              2017 to 2019
            </div>
            <div className="collapse-content bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
              <p style={{ fontWeight: 'bold' }}>
                Cisco Certified Network Associate:
              </p>{' '}
              <br />
              <p>• Introduction to Networks (CCNA 1) </p>
              <p>• Routing and Switching Essentials (CCNA 2) </p>
              <p>• Scaling Networks (CCNA 3) </p>
              <p>
                • Enterprise Networking, Security, and Automation (CCNA 3v7)
              </p>{' '}
            </div>
          </div>

          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content"
              style={{ fontSize: '25px' }}
            >
              2020 to 2020
            </div>
            <div className="collapse-content bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
              <p style={{ fontWeight: 'bold' }}>
                Senior Technician in Software Development (University):
              </p>{' '}
              <br />
              <p>• First full year at Instituto Superior Santo Domingo</p>{' '}
            </div>
          </div>

          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content"
              style={{ fontSize: '25px' }}
            >
              2021 to 2022
            </div>

            <div className="collapse-content bg-blue-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
              <p style={{ fontWeight: 'bold' }}>Udemy:</p> <br />
              <p>• HTML5 Course: Complete</p>
              <p>• CSS3 Course: Complete</p>
              <p>• JavaScript Course: Complete</p>
              <p>• React & Redux Course: Complete</p>{' '}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
