const express = require('express')
const app = express()

const PORT = 3001

app.get('/' , (req , res)=>{
    res.send("hello from gateway231312")
})

try {
    app.listen(PORT , ()=>{
        console.log("app connected2dawdwa")
    })
} catch (error) {
    console.log(error)    
}
