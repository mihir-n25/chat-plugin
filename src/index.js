// src/index.js
import './styles.css';  // Import the custom CSS
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoChatboxEllipsesOutline, IoClose } from "react-icons/io5";

const ChatBot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      <button
        className="chatbot-button"
        onClick={toggleChatbot}
      >
        {isChatbotVisible ? <IoClose size={"2rem"}/> : <IoChatboxEllipsesOutline size={"2rem"}/> }
      </button>

      {isChatbotVisible && (
        <div className="chatbot-container">
          <iframe
            src="https://lynk-bot-ui.vercel.app/chatbot"
            className="chatbot-iframe"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

const initChatBot = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<ChatBot />, container);
};

window.initChatBot = initChatBot;
