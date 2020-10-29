import React, { useState, useEffect, Component } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Redirect } from 'react-router';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

// var socket = io();
// var socket = io({ transports: ['websocket'], upgrade: false });


const Chat = ({ userName, chatRoom }) => { //location was pass through here 
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [flag, setFlag] = useState(0);
  const ENDPOINT = 'http://localhost:4000/';
  const endRouteChat = `?name=${userName}&room=${chatRoom}`;

  useEffect(() => {
    const { name, room } = queryString.parse(endRouteChat); //location.search was here before in place of endRouteChat
    
      console.log("USERS: ", users);
      //console.log("LOCATION SEARCH", location.search);
    socket = io(ENDPOINT, { transports: ['websocket'], upgrade: false });

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        setFlag(1);
        alert(error);
      }
    });
    
    return () => {
      console.log("DISCONNECT");
      
      socket.emit('disconnect', () => {
        socket.disconnect();
      })
    }
    
  }, [ENDPOINT, endRouteChat]); //location.search was her before in place of endRouteChat
  
  // useEffect(() => {
  //   const { name, room } = queryString.parse(endRouteChat); //location.search was here before in place of endRouteChat

  //   console.log("USERS: ", users);
  //   //console.log("LOCATION SEARCH", location.search);
  //   socket = io(ENDPOINT);

  //   setRoom(room);
  //   setName(name)

  //   socket.emit('disconnect', (error) => {
  //     if (error) {
  //       setFlag(1);
  //       alert(error);
  //     }
  //   })
  // }, []);
  
  
    useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  if (flag) {
    return (
      <Redirect to="/" />
    )
  }
  
  

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;