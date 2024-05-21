import express from "express"
import dotenv, { config } from 'dotenv'
import cors from 'cors'
import path from 'path'
const app = express();


//config dotenv
dotenv.config({ path: path.join(path.dirname("src"), 'src','config', '.env') });
//config cors 
const whiteList = ["https://localhost:3000" , "https://localhost:4000"  ,"https://localhost:8080"]

const corsDelegate = (origin ,  cb)=>{
    if(!origin || whiteList.indexOf(origin)!== -1){
        cb(null, true)
    }else{
        cb(new Error("Not allowed by CORS") , false)
    }
}

app.use(cors({origin:corsDelegate}))

//add buildin middlewares 
app.use(express.urlencoded({extended:true , limit:"18kb"}))
app.use(express.json({limit:"18kb"}))
app.use(express.static(path.join(path.dirname("public") , "/temp")))

// add custom middlewares 







export default app