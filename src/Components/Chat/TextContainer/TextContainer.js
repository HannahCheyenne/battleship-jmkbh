
import React from 'react';

import onlineIcon from '../Icons/onlineIcon.png';

import './TextContainer.css';
const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Space Chat<span role="img" aria-label="emoji">🤖💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h2>Pilots:</h2>
            <div className="activeContainer">
              <h3>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;