const path = require('path')
const express = require('express');
const app = express();


const port = 1234
const publicPath = path.join(__dirname,'..' ,'Public');

app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.send("Hey!")
});
app.listen(port,()=> {
    console.log('Server is running')
})

module.exports = app;