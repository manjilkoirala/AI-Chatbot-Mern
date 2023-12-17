import React from 'react'
import Avatar from 'react-avatar'
import { useAuth } from '../../Context/AuthContext'
const ChatItem = ({content,role}) => {
    const auth = useAuth()
  return (
    role=="assistant"?
     <div className='flex items-center p-3 bg-assitColor my-2 gap-2'>
<Avatar
            name='A I'
            color="white"
            fgColor="black"
            round
            size='40px'
            className="ml-0"
          />
          <div><h3 className='text-white text-xl '>{content}</h3></div>
    </div>
    :<div className='flex items-center p-3 my-1 rounded-md bg-[#004653] gap-2'>
    <Avatar
                name={auth?.user?.name }
                color="black"
                fgColor="white"
                size='40px'
                round
                className="ml-0"
              />
              <div><h3 className='text-white text-xl '>{content}</h3></div>
        </div>
  ) 
}

export default ChatItem
