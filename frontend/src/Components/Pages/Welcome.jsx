import React from "react";
import robot from "../../assets/robot.png";
import newBot from "../../assets/newRobot.png";

import { Link } from "react-router-dom";


const Welcome = () => (
  <section id="home" className="bg-primary flex items-center md:items-stretch justify-between sm:py-16 py-6 h-[calc(100vh-112px)] w-screen overflow-hidden z-[-3]">
  <div className=" flex items-start flex-col  sm:px-24 px-6">
    <div className="flex flex-row w-full">
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[80px]">
        The Next <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Generation</span>{" "}
      </h1>
    </div>
    <h1 className="font-poppins font-semibold ss:text-[68px]  text-[40px] text-white ss:leading-[80px]  w-full">
      AI Voice Chatbot.
    </h1>
    <p className="font-poppins font-normal text-dimWhite ss:text-[18px] leading-[30.8px] max-w-[470px] ">
      This web application,
      built with ReactJS and OpenAI, will enhance user experience by providing a
      dynamic and interactive conversational interface.{" "}
    </p>
    
    <button className="bg-white my-4 rounded-lg py-2 px-3  ss:text-2xl font-semibold hover:bg-blue-600 hover:text-white">
    <Link to="/login" > Get Started</Link>
    </button>
  </div>
  <div className="hidden md:block ">
    <img
      src={newBot}
      alt="Robot"
      className="relative z-[1] h-[110%]  lg:right-40 "
    />
    <div className="absolute z-[0] w-[22%] h-[35%] top-16 pink__gradient"></div>
    <div className="absolute z-[0] w-[35%] h-[40%] bottom-20 right-20  white__gradient "></div>
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient  "></div>
    
  </div>
</section>
   
    
);

export default Welcome;
