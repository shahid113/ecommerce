const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase = require('./config/database');


dotenv.config({path:"config/config.env"});

const PORT=process.env.PORT || 3000;


connectDatabase();

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})


// changes 