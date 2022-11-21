const express=require("express");
const cors=require("cors");
require("dotenv").config({path:"./config.env"});
const app=express();

//Use middleware
app.use(cors());
 app.use(express.json());

//using routes
 app.use(require("./routes/route"));
 const con=require("./db/connection");
const port=process.env.PORT||5000;

 con.then(db=>{
    if(!db)return process.exit(1);//If there is any error in connecting the database then simply return the error otherwise after the connection of database then only start the nodejs server
    //Listen to the http server

    app.listen(port,()=>{
        console.log(`server started at port ${port}`);
    })
    app.on("error",err=>console.log(`Failed to connect with HTTP server:${err}`));

 }).catch(error=>{
    console.log(`Connection failed....!${error}`);
 });
 


     
