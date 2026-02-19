const express=require ("express");
const app= express();
const port=3000;
const fs= require("fs");

// app.use(express.static('public'))

// app.get('/',(req,res)=>{
//     res.send("Response Sending via app.get");
// });
// app.get('/abhinav',(req,res)=>{
//     res.send("Response Sending via abhinav");
// });
// app.get('/shubham',(req,res)=>{
//     res.send("Response Sending via shubham");
// });
// app.get('/anuj',(req,res)=>{
//     res.send("Response Sending via anuj");
// });


//middleware 1
app.use((req,res,next)=>{
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})


// middleware 2
app.use((req,res,next)=>{
    res.send('m2');
    next()
})

app.listen(port,()=>{
    console.log(`app is running using listen and port code on  ${port}`);
})