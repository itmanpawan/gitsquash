const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('', (req,res)=>{
    try {
        res.send('app working sucessfully.')
    } catch (error) {
        console.log(error);
    }
})

app.post('app/add', (req,res)=>{
    const body = {"name":"pawan kumar","address":"M1479"}
    try {
        res.json(body)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Applicaiton is running on PORT ${PORT}`);
})