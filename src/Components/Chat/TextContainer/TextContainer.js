
import React from 'react';

import onlineIcon from '../Icons/onlineIcon.png';

import './TextContainer.css';
const TextContainer = ({ users }) => (
  <div className="textContainer">
    
      <h1><span role="img" aria-label="emoji">🤖💬</span></h1>
    
    {users ? (
          <div>
            <h1>Space Chat:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;