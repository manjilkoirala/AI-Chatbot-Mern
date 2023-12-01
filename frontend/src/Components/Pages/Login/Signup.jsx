// SignUp.js
import Robot from "../../../assets/robot.png";
import { Link } from "react-router-dom";
import CustomTextField from "../../shared/CustomTextField";
function SignUp() {
  return (
    
    <div className=" lg:flex lg:items-center lg:justify-center h-full bg-primary w-full">
      <div className="flex flex-wrap h-screen w-full  lg:justify-normal justify-center">
        <div className="hidden lg:flex items-center sm:justify-end">
          <img
            className="w-max h-max object-cover sm:h-4/6"
            src={Robot}
            alt="robot"
          />
        </div>

        <div className="bg-gray-800 flex flex-col my-24  rounded-xl justify-center">
          <div className=" bg-grey-900 ss:w-[500px] px-8 rounded-lg ">
            <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
            </h2>
            <form>
            <CustomTextField text="Name" type="text" />
              <CustomTextField text="Email" type="email" />
              <CustomTextField text="Password" type="password" />
              <div className="flex justify-between text-gray-300 py-2">
              </div>
              <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                Sign Up
              </button>
            </form>
            <div className="flex items-center justify-between text-gray-300 py-2">
              <label>
                Don't have an Account?{" "}
                <Link to="/login">
                  <span className="bg-white px-2 py-1 text-gray-600 rounded-md font-poppins font-semibold ml-1 hover:bg-teal-500 hover:text-white">
                    <button>Login</button>
                  </span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}


export default SignUp;
