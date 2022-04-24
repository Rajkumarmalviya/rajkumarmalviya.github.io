const mongoose = require("mongoose");
// mongoose.connect('mongo://localhost:27017/prestige',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndexa:true}).then((data)=>{
//     console.log(`mongodb connected wtih server : ${data.connection.host}`);
// }).catch((err)=>{
//     console.log(err)
// })




const connectDatabase =( )=>{


    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }).then((data)=>{
        console.log(`mongo connected with server ${data.connection.host}`);
    })
}

module.exports = connectDatabase