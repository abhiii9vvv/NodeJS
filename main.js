const express = require('express');

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get('/',(req,res)=>{
    console.log("Hey its a get request");
    res.send('Hello world');
});

app.post('/',(req,res)=>{
    console.log("Hey its a Post request");
    res.send('Hello Abhinav');
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
