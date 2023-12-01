import React from 'react'

const CustomTextField = ({text,type,name,onChange}) => {
  return (
    <>
    <div className="flex flex-col text-gray-300 py-2">
                <label>{text}</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-none"
                  type={type} name={name}
                  onChange={onChange}
                  
                />
                </div>
                </>
  )
}

export default CustomTextField
