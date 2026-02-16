const { error } = require("console");
const fs=require("fs");
console.log("statrting");
// fs.writeFileSync("aboutME.txt","My name is abhinav");

fs.writeFile("me2.txt","av9 is ?? ",()=>{
    console.log("done")
    fs.readFile("me2.txt",(error,data)=>{
        console.log(error,data.toString());
    });
});

console.log("ending");

