import React from "react";
import Logo from "../../assets/Logo.png";
import LogoMob from "../../assets/LogoMobile.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import NavLink from "./NavLink";
const Navbar = () => {
  const auth = useAuth();
  return (
    <div className="px-6 sm:px-24 h-28 flex items-center justify-between w-screen">
      <Link to="/">
        <img src={Logo} alt="Logo" className=" hidden sm:block w-64" />
        <img src={LogoMob} alt="Logo" className="sm:hidden block w-10" />
        </Link>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLink
                bg="bg-[#00FFFC]"
                to="/home"
                text="Chat"
                textColor="text-black"
              />
              <NavLink
                bg="bg-[#51538f]"
                textColor="text-white"
                to="/"
                text="Log Out"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
            <NavLink
               bg="bg-[#00FFFC]"
                to="/login"
                text="Login"
                textColor="text-black"
              />
              <NavLink
                bg="bg-[#51538f]"
                textColor="text-white"
                to="/signup"
                text="Sign Up"
              />
            </>
          )}
        </div>
      
    </div>
  );
};

export default Navbar;
