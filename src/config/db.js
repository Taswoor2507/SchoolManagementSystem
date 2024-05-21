import mongoose from "mongoose";
import EnvironmentVariables from "../constants/constants.js";
const { DB_NAME , MONOG_DB_URI} =EnvironmentVariables
console.log();
const connectDB =async()=>{
    
    try {
        const connectionInstance = await mongoose.connect(`${MONOG_DB_URI}/${DB_NAME}`)
        console.log(`Database connect on ${connectionInstance.connection.port}`);
        
    } catch (error) {
        console.log('Database connection failed due to -->' , error);        
    }
}


export default connectDB;
