const express=require('express');
const app=express();
const cookieParser=require('cookie-parser')
const cors=require('cors');
const fileUpload=require('express-fileupload');



app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:4200',
    credentials: true,
  }));

app.use(fileUpload({
  useTempFiles:true,
}))


const user=require('./Routes/UserRoute');
const product=require('./Routes/ProductRoute')
const order=require('./Routes/OrderRoute')


app.use("/api",user)
app.use("/api", product)
app.use("/api", order)







module.exports=app