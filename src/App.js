import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


function App() {

  if(!localStorage.getItem('username')) return <LoginForm /> 
  return (
    <ChatEngine 
        height="100vh"
        projectID="ca34d7a4-9875-4c46-95b6-64a2b8a46eae"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
      
  
  )
}

export default App

