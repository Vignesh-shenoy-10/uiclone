import React, { useState, useEffect } from "react";
import "./Chatbot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Are you looking for a job?" },
  ]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { sender: "user", text: option }]);
    setTimeout(() => handleBotResponse(option), 500);
    toggleChat();
  };

  const handleBotResponse = (userInput) => {
    let botMessage = "";
    if (userInput.toLowerCase() === "find a job") {
      botMessage = "Great! You can search for jobs on our job portal.";
    } else if (userInput.toLowerCase() === "ask a question") {
      botMessage = "Sure! What would you like to know?";
    } else {
      botMessage = "I'm sorry, I didn't understand that.";
    }

    setMessages([...messages, { sender: "bot", text: botMessage }]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${month} ${day}, ${year} ${hours}:${strMinutes}${ampm}`;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-ui ${isOpen ? "open" : "close"}`}>
        <div className="chatbot-body">
          <div className="chatbot-header">
            <img
              src="https://d1b9xwwlt0lrqx.cloudfront.net/dev/bot-icons/prod-ir-PGBPGNGLOBAL-en_global-cx-web-chatbotavatar-1707306431835.png"
              alt="Chatbot Avatar"
              className="chatbot-avatar"
            />
            <span className="chatbot-title">Emma</span>
            <button onClick={toggleChat} className="chatbot-close-btn">
              &times;
            </button>
          </div>
          <div className="chatbot-important-message">
            Please note that any personal information you provide will be
            processed in accordance with our privacy policy.
          </div>
          <div className="chatbot-date-time">
            <span>{formatDateTime(currentDateTime)}</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-search-bar">
            <div className="search-bar-inner">
              <button className="search-bar-button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Any other questions? Type here"
                className="search-bar-input"
              />
              <button
                className="search-bar-submit"
                onClick={handleSearchSubmit}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12L6 6v4l12 4-12 4v4L22 12z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="chatbot-options">
        {!isOpen && (
          <>
            <div className="chatbot-initial-message">
              <span>Hi! Are you looking for a job?</span>
              <button className="close-btn" onClick={toggleChat}>
                &times;
              </button>
            </div>
            <div className="chatbot-buttons">
              <button
                className="chatbot-option-button"
                onClick={() => handleOptionClick("Find a job")}
                aria-label="Find a job"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M14.175 15.225L9.975 11.025C9.6 11.325 9.16875 11.5625 8.68125 11.7375C8.19375 11.9125 7.675 12 7.125 12C5.7625 12 4.6095 11.5282 3.666 10.5848C2.722 9.64075 2.25 8.4875 2.25 7.125C2.25 5.7625 2.722 4.60925 3.666 3.66525C4.6095 2.72175 5.7625 2.25 7.125 2.25C8.4875 2.25 9.64075 2.72175 10.5848 3.66525C11.5282 4.60925 12 5.7625 12 7.125C12 7.675 11.9125 8.19375 11.7375 8.68125C11.5625 9.16875 11.325 9.6 11.025 9.975L15.2438 14.1937C15.3813 14.3312 15.45 14.5 15.45 14.7C15.45 14.9 15.375 15.075 15.225 15.225C15.0875 15.3625 14.9125 15.4313 14.7 15.4313C14.4875 15.4313 14.3125 15.3625 14.175 15.225ZM7.125 10.5C8.0625 10.5 8.8595 10.172 9.516 9.516C10.172 8.8595 10.5 8.0625 10.5 7.125C10.5 6.1875 10.172 5.3905 9.516 4.734C8.8595 4.078 8.0625 3.75 7.125 3.75C6.1875 3.75 5.3905 4.078 4.734 4.734C4.078 5.3905 3.75 6.1875 3.75 7.125C3.75 8.0625 4.078 8.8595 4.734 9.516C5.3905 10.172 6.1875 10.5 7.125 10.5Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                Find a job
              </button>
              <button
                className="chatbot-option-button"
                onClick={() => handleOptionClick("Ask a question")}
                aria-label="Ask a question"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.5c-5.1 0-9.5-4.4-9.5-9.5S6.9 2.5 12 2.5 21.5 6.9 21.5 12 17.1 21.5 12 21.5zm0-17C7.6 4.5 4.5 7.6 4.5 12s3.1 7.5 7.5 7.5S19.5 16.4 19.5 12 16.4 4.5 12 4.5zm-1 8h2v2h-2v-2zm0-4h2v2h-2V8z"
                    fill="currentColor"
                  />
                </svg>
                Ask a question
              </button>
            </div>
            <button className="chatbot-button-avatar" onClick={toggleChat}>
              <img
                src="https://d1b9xwwlt0lrqx.cloudfront.net/dev/bot-icons/prod-ir-PGBPGNGLOBAL-en_global-cx-web-chatbotavatar-1707306431835.png"
                alt="Chatbot Avatar"
                className="chatbot-avatar"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
