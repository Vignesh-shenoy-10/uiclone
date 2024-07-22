import React from "react";
import ChatBot from "../../components/Chatbot/Chatbot";
import Header from "../../components/Header/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="overlay"></div>
      <div className="content">
        <h1 className="content-header">Careers at P&G</h1>
        <h2 className="content-body">
          Make an impact on more than just your career #PGDAY1
        </h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search job title or location"
            className="search-input"
          />
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default HomePage;
