import React, { useEffect, useState } from 'react';
import { FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';
import image from './logo.png';
import white from './white_logo.png';
import {sendMessage, getChatHistory} from '../services/apiService';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Append user message
    const userMessage = { text: input, sender: 'user' };
    const botProcess = { text: "Processing....", sender: 'bot' };
    setMessages([...messages, userMessage, botProcess]);
    
     // Clear input field
     setInput('');

    const response = await sendMessage(input);
    const botResponse = { text: response, sender: 'bot' };

    setMessages((prevMessages) => [...prevMessages.slice(0, prevMessages.length - 1), botResponse]);
    
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleSend();
    }
  }

  useEffect(() => {
    const fetchChatHistory = async () => {
      const history = await getChatHistory();
      console.log(history);
      setMessages(history);
    };

    fetchChatHistory();
    
  },[])

  return (
    <div className='w-screen h-screen flex flex-col back-screen'>
      {/* Header */}
      <div className='p-4 text-blue-500 text-3xl font-bold text-center'>
        {/* <img src={fullLogo} alt="" /> */}
        Udora Gen
      </div>

      {/* Chat Window */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && <img src={white} alt="Logo" style={{width:"42px"}}/>}
            <div
              className={`p-3 rounded-lg text-white ${msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-500'}`} style={{maxWidth:'80%'}}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && <FaUser className='text-blue-500' />}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className='chat-input'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a message...'
          className='flex-1 p-2 border rounded-lg outline-none '
        />
        <button
          onClick={handleSend}
          className='ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
