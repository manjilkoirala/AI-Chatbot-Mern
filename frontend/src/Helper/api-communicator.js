import axios from "axios";
export const loginUser = async (email, password) => {
 
  const response = await axios.post('/user/login', {
    email,
    password,
  });
  if (response.status === 200) {

    return response.data;
    
   
  }else{
throw new Error("Invalid Credentials")
  }
  
}

export const checkAuthStatus = async () => {
  
  const response = await axios.get('/user/auth-status');

  
  
  if (response.status === 200) {
    
   

    return response.data;
    
   
  }else{
    
throw new Error("Unable to authenticate")
  }
  
}