import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import './Join.css';


//Only used for reference and testing purposes at the /joinChat route

const Join = ({name, room}) => {
  
    name = 'JOIN USER'
    room = 'JOIN ROOM'
  console.log("USER: ", name)
  console.log("ROOM: ", room)

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Start Chatting</h1>
        <h2>Pilot: {name}</h2>
        <h2>Room: {room}</h2>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/activeChat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;