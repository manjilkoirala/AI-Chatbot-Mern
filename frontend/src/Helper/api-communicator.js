import axios from "axios";
export const loginUser = async (email, password) => {
 
  const response = await axios.post('/user/login', {
    email,
    password,
  });
  if (response.status === 200) {
console.log(response.data)
    return response.data;
    
   
  }else{
throw new Error("Invalid Credentials")
  }
  
}