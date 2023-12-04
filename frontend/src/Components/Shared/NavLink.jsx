import React from 'react'
import { Link } from 'react-router-dom'
const NavLink = ({to,bg,text,textColor,onClick }) => {
  return (
   <Link to={to} className={`${bg} ${textColor} ${bg} tracking-wide font-semibold uppercase mx-3 px-4 py-2 rounded-xl text-lg hover:bg-white hover:text-black`} onClick={onClick}>{text}</Link>
  )
}

export default NavLink
