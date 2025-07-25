const express=require("express")
const route=express.Router()
const stucont=require("../controller/stucontroller")
route.get("/",stucont.homepage)
route.get("/insert",stucont.inserpage)
route.get("/display",stucont.displaypage)
route.get("/update",stucont.updatepage)
route.get("/search",stucont.searchpage)

module.exports=route;