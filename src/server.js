import app from "./app.js";
import EnvironmentVariables from "./constants/constants.js";

const {PORT} = EnvironmentVariables
app.listen(PORT ,  (err)=>{
    if(err){
        console.log("Server Error" , err);
    }else{
        console.log(`App is running on port https://localhost:${PORT}`);
    }
})