import React from 'react'
import Avatar from 'react-avatar'
import { useAuth } from '../../Context/AuthContext'


const Hompage = () => {
  const auth= useAuth()
  return (
    <div className='flex flex-1 w-full, h-full mt-3 gap-3'>

    <div className='md:flex none '>
      <div className='flex w-full h-[60vh], bg.chatSection border-4 flex-col mx-3'>
    <Avatar name={auth?.user?.name} color='white'  fgColor='black' round size='50px'/>
      </div>
    </div>
    </div>

  )
}

export default Hompage
