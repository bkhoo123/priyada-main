"use client";

import { useState, useEffect, useRef } from "react";
import Chat from '../public/chatbot.jpg';
import Image from "next/image";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import AnimatedText from "./AnimatedText";

//TODO Loading
//TODO Different chat bubble

const ChatBot = () => {
  const [messages, setMessages] = useState([{ type: 'chatbot', content: 'Hi there! How can I help you today? ' }]);
  const [input, setInput] = useState("");
  const [toggleChat, setToggleChat] = useState(false);
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#7FFFD4");

  const [showWhiteCloudMessage, setShowWhiteCloudMessage] = useState(true);


  const messagesEndRef = useRef(null);  // Create a ref


  // Function to hide the white cloud message after 5 seconds
  const hideWhiteCloudMessage = () => {
    setTimeout(() => {
      setShowWhiteCloudMessage(false);
    }, 5000);
  };


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom() 
    hideWhiteCloudMessage(); 
    
    
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input || input.trim() === "") {
      console.log("Input is empty or undefined.");
      return;
    }

    setLoading(true);  // Set loading to true before sending the request

    try {
      const response = await axios.post(
        `/api/chatbot`,
        { input: JSON.stringify(input) }
      );

      if (response) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", content: input },
          { type: "chatbot", content: response.data.message }
        ]);
        setInput("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);  // Set loading to false after receiving the response or if an error occurs
    }
  }


  return (
    <div className="bottom-10 right-10 z-5 fixed flex flex-col items-end">

      {/* Chat Screen */}
      {toggleChat && (
        <div className="relative left-20 bottom-20 z-2 bg-lightcream p-4 px-8 rounded-md shadow-lg border w-[600px] h-[700px] mx-2 overflow-y-auto">

          {/* Chat Header */}
          <div className="my-2 text-xl font-semibold">Chat with PriyadaGPT</div>

          <hr className="border-gray-300 mx-[-16px]" />

          {/* ChatSubHeader Tips & Tricks */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="text-lg font-semibold underline">Things I can do for you</div>
            <div className="">Ask me about the studio or the teachers</div>
            <div>Ask me about my current dance class bookings</div>
            <div>Ask me any questions you might have about the dance studio</div>
          </div>

          <hr className="border-gray-300 mx-[-16px] my-4" />

          {/* Chat messages will go here */}
          <div className="my-4 flex flex-col">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`
                  my-2 p-2 rounded
                  ${message.type === 'user'
                    ? 'bg-cyan-600 text-white self-end font-semibold'
                    : 'bg-stone-200 self-start font-semibold'}
                  max-w-2/3
                `}
              >
                {message.content}
              </div>
            ))}
            {loading && (
              <div className="self-center">
                <PulseLoader color={color} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>



         {/* Input area */}
         <div className="z-5 mt-2">
            <form onSubmit={sendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Type your message..."
              />
              <button type="submit" className="hidden">Send</button>
            </form>
          </div>
        </div>
      )}

      {/* White Cloud Message */}

      {!toggleChat && showWhiteCloudMessage  && (  
        <div className="relative p-4 m-2 tracking-wider bg-white font-semibold text-black rounded-3xl shadow-md w-[240px] h-auto">
          <AnimatedText timer={15} message="Hi! PriyadaGPT here. Click me if you need help or have any questions." />
        </div>
      )}

      {/* Chat Icon */}
      <div className="cursor-pointer" onClick={() => setToggleChat(!toggleChat)}>
        <Image
          src={Chat}
          height={70}
          width={70}
          className="rounded-full"

        />
      </div>

    </div>
  );
}

export default ChatBot;
