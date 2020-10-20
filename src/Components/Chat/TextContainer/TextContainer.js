
import React from 'react';

import onlineIcon from '../Icons/onlineIcon.png';

// import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Welcome to Space Chat <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created to chat with other pilots <span role="img" aria-label="emoji"></span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
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