const express=require("express")
const app=express()
const student=require("./routes/sturoutes")
app.set("view engine","ejs")
app.use("/",student)

app.listen(3000,()=>{
    console.log("server run on the port of 3000");
})