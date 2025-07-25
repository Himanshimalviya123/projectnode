const homepage=(req,res)=>{
    res.render("home")
}
const inserpage=(req,res)=>{
    res.render("insert")
}
const displaypage=(req,res)=>{
    res.render("display")

}
const updatepage=(req,res)=>{
    res.render("update")
}
const searchpage=(req,res)=>{
    res.render("search")
}
module.exports={
    homepage,
    inserpage,
    displaypage,
    updatepage,
    searchpage
}