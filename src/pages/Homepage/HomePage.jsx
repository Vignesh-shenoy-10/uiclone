import React from 'react';
import ChatBot from '../../components/Chatbot/Chatbot';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Careers at P&G</h1>
        <h2>Make an impact on more than just your career #PGDAY1</h2>
        <input 
          type="text" 
          placeholder="Search job title or location" 
          className="search-input"
        />
      </div>
      <ChatBot />
    </div>
  );
};

export default HomePage;
