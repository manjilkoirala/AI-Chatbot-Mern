import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { useAuth } from "../../Context/AuthContext";
import ChatItem from "../Chat/ChatItem";
import {IoMdSend} from 'react-icons/io'
import { sendChatRequest } from "../../Helper/api-communicator";

const Hompage = () => {
  const inputRef= useRef(null)
  const auth = useAuth();
  const [chatMessages,setChatMessages]= useState([])
  const handleSubmit= async()=>{
   const content = inputRef.current?.value;
   if(inputRef && inputRef.current){
    inputRef.current.value="";
   }
   
   const newMessage={role:"user", content};
   
   setChatMessages((prev)=>[...prev,newMessage])
   const chatData= await sendChatRequest(content);
   
  setChatMessages([...chatData.chats])
  }
  return (
    <div className="flex flex-1 w-full, h-full mt-3 gap-3">
      <div className="md:flex hidden flex-[0.2] flex-col">
        <div className="flex w-full h-[60vh] bg-chatSection rounded-xl flex-col mx-3">
          <Avatar
            name={auth?.user?.name}
            color="white"
            fgColor="black"
            round
            className="mx-auto my-2 mb-4"
          />
          <h3 className=" ml-2 mr-2 mx-auto font-sans text-white">
            Hey,{" "}
            <span className=" font-semibold text-gray-300">
              {" "}
              {auth?.user?.name}{" "}
            </span>
            . You are talking to a chatbot.
          </h3>
          <h3 className=" mx-auto font-sans text-white my-4 p-3">
            You can ask questions related to business, work, education etc. But
            avoide asking or sharing personal information.
          </h3>
          <button className=" w-48 my-auto text-white font-bold uppercase rounded-md mx-auto  bg-red-300 hover:bg-red-600">
            Clear Conversation
          </button>
        </div>
      </div>
      <div className="flex md:flex-[0.8] flex-1 flex-col px-3">
        <h3 className=" text-center text-4xl text-white mb-2 mx-auto font-semibold">
          AI Voice Chatbot
        </h3>
        <div className=" w-full h-[60vh] rounded-lg mx-auto flex flex-col overflow-scroll overflow-x-hidden overflow-y-auto scroll-smooth">
          {chatMessages.map((chat,index)=>(<ChatItem content={chat.content} role={chat.role} key={index} />))}
        </div>
        <div className="w-full p-4 rounded-lg bg-[rgb(17,27,39)] flex m-auto">{" "}
        <input
        ref={inputRef}
          type="text"
          className="w-full bg-transparent p-2 border-none outline-none text-white text-xl"
        />
        <button onClick={handleSubmit} className=" mx-1 text-white"> <IoMdSend/> </button>
        </div>
        
      </div>
    </div>
  );
};

export default Hompage;
