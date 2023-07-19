
import  app from './app.js';

import mongoose from 'mongoose';

const Port = 4000

// let connected database

(async()=>{
    try {
        // db connection
        await mongoose.connect('dbstring')
        console.log('db connectd successfuly');
        
        app.on("error",()=>{
        console.log("error:",err);
        throw err
        })
  const onlistening = () =>{
    console.log(`listening on port ${Port}`);
  }
        app.listen(Port,onlistening)
    } catch (error) {
        console.error('Error',err);
        throw err
    }
})()


// app.listen(Port,()=>{
//     console.log(`example app is listen on Port ${Port}`);
// })

// todo 1) database connection may fail
        //todo 2) database is an other contents 