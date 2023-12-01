import React from "react";
import robot from "../../assets/robot.png";

import { Link } from "react-router-dom";


const Welcome = () => (
  <section id="home" className=" w-full bg-primary flex md:flex-row flex-col sm:py-16 py-6 xlg:h-screen overflow-hidden z-[-3]">
  <div className="flex-1 flex items-start flex-col xl:px-2 sm:px-24 px-6">
    <div className="flex flex-row w-full">
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px]">
        The Next <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Generation</span>{" "}
      </h1>
    </div>
    <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
      AI Voice Chatbot.
    </h1>
    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      AI-powered Voice Chat Bot using the OpenAI API. This web application,
      built with ReactJS, will enhance user experience by providing a
      dynamic and interactive conversational interface.{" "}
    </p>
    
    <button className="bg-white my-4 rounded-lg py-2 px-3  text-2xl font-semibold hover:bg-blue-600 hover:text-white">
    <Link to="/login" > Get Started</Link>
    </button>
  </div>
  <div>
    <img
      src={robot}
      alt="Robot"
      className="w-[100%] h-[100%] relative z-[1]"
    />
    <div className="absolute z-[0] w-[35%] h-[35%] top-16 pink__gradient"></div>
    <div className="absolute z-[0] w-[35%] h-[60%] bottom-28 white__gradient "></div>
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient  "></div>
  </div>
</section>
   
    
);

export default Welcome;
