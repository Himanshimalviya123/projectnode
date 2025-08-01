const express=require("express");
const route=express.Router();
const stuController=require("../controller/stucontroller")
route.get("/",stuController.homepage)
route.get("/insert",stuController.insertpage)
route.post("/save",stuController.stuSave);
route.get("/display",stuController.stuDisplay);
route.get("/update",stuController.updatepage);
route.get("/datadelete",stuController.dataDelete);
route.get("/editdata",stuController.editPage);
route.get("/search",stuController.searchPage);
route.post("/editsave",stuController.editsave);
route.post("/searchdata",stuController.searchData);
module.exports=route;