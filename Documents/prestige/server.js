 const app = require('./app');
 const dotenv = require('dotenv');

const PORT = process.env.PORT
 const connectDatabase = require("./config/database");

 // config
dotenv.config({path:"./config/config.env"});

//connecting to database 
connectDatabase();

// connect to frontend  
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http/localhost:${process.env.PORT}`);
})



// unhandleld promise rejection 
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server due to unhandled pormise rejection `)

server.close(()=>{
    process.exit(1);
})
}

)