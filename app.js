// install package.json -------> npm init -y 
// install package-lock.json -------> npm install 

const express = require("express");

const app = express(); 
const path = require("path");

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));

app.use(express.static('public'));


app.listen(3001, ()=>{
    console.log("el servidor esta funcionando");
})

app.get('/',(req,res)=>{
   res.sendFile(path.resolve(__dirname, './views/index.html'));
})