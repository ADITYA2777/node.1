
import  express from "express";
const  app = express()


app.get('/',(req,res)=>{
    res.send('hello world!!')
})

app.get('/instagram',(req,res)=>{
    res.send('your sucessfuly enterd in instragram')
})
export default app;
