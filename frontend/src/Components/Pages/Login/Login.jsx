// Login.js
import Robot from "../../../assets/robot.png";
import { Link } from "react-router-dom";
import CustomTextField from "../../shared/CustomTextField";
import { useAuth } from "../../../Context/AuthContext";
import { toast } from "react-hot-toast";
import { useState } from "react";

function Login() {
  const auth= useAuth();
  const[email,setEmail]= useState(null)
  const[password,setPassword]= useState()
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      toast.loading("Logging in...",{id:"login"});
      
      await auth.login(email,password);
      
      toast.success("Logged in successfully",{id:"login"});

    }catch(err){
      
    }
  };

  return (
   
    <div className="lg:flex lg:items-center lg:justify-center h-[calc(100vh-112px)] overflow-hidden w-full">
      <div className="flex flex-wrap  w-full  lg:justify-normal justify-center">
        <div className="hidden lg:flex items-center lg:justify-end">
          <img
            className="w-max h-max object-cover sm:h-4/6"
            src={Robot}
            alt="robot"
          />
        </div>

        
          <div className="lg:py-0 py-4 bg-grey-900 ss:w-[500px] px-8  bg-gray-800  flex flex-col my-24  rounded-xl justify-center">
            <h2 className="text-4xl dark:text-white font-bold text-center">
            Login
            </h2>
            <form onSubmit={handleSubmit}>
              <CustomTextField text="Email" type="email" name="email"  onChange={e=>setEmail(e.target.value)}/>
              <CustomTextField text="Password" type="password" name="password" onChange={e=>setPassword(e.target.value)}/>
              <div className="flex justify-between text-gray-300 py-2">
                <p className="flex items-center ">
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p><button className=" underline">Forget Password</button></p>
              </div>
              <div className="flex justify-between text-gray-300 py-2">
              </div>
              <button type="submit" className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                Login
              </button>
            </form>
            <div className="flex items-center justify-between text-gray-300 py-2">
              <label>
                Don't have an Account?{" "}
                <Link to="/signup">
                  <span className="bg-white px-2 py-1 text-gray-600 rounded-md font-poppins font-semibold ml-1 hover:bg-teal-500 hover:text-white">
                    <button>Sign Up</button>
                  </span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
   
  
  );
}


export default Login;
