const express=require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static(__dirname));

app.use(cors())
const form = require('./routes/formRout')
// import routes 

app.use("/api/v1",form);


// app.use(express.urlencoded({extended:true}))
// EXPRESS SPECIFIC STUFF 

//PUG SPECIFIC STUFF
// app.set('view engin','html');// setting the templete engin as  pug 


// app.set('views',path.join(__dirname,'views')); // set the view directory 



module.exports =app;
