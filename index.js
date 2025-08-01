const express=require("express")
const app=express();
const student=require("./routes/sturoutes");
const mongoose=require("mongoose")
const bodyparser=require("body-parser");
app.set("view engine","ejs");
mongoose.connect("mongodb://127.0.0.1:27017/himanshidb").then(()=>{
    console.log("Database connected successfuly");
})

//Bodyparser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/",student)

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})