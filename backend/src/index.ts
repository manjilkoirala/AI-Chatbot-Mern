import app from "./app.js"
import { connectToDatabase } from "./database/connection.js"
let Port =process.env.PORT;
//Connection and Listeners
connectToDatabase().then(()=>{
  app.listen(Port,()=>console.log("Server Open & connected to Database"))
})
.catch(err=>console.log(err));

