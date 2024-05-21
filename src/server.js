import app from "./app.js";
import connectDB from "./config/db.js";
import EnvironmentVariables from "./constants/constants.js";

const {PORT} = EnvironmentVariables
console.log(PORT);
connectDB().then(()=>{
    app.listen(PORT ,  (err)=>{
        if(err){
            console.log("Server Error" , err);
        }else{
            console.log(`App is running on port https://localhost:${PORT}`);
        }
    })
}).catch((err) => {
    console.log('Database connection failed due to --> ' , err);
})
