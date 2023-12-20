const app= require("express")()

app.get("/",(req,res)=>{
    res.send("Success!")
})

app.listen(7000,()=>{
    console.log('Server is running on port 7000')
})