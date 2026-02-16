import fs from "fs/promises"

let a= await fs.readFile("me2.txt");

let b= await fs.writeFile("me3.txt","this is amazing promises");

let c= await fs.readFile("me3.txt");

console.log(a.toString());

console.log(c.toString());