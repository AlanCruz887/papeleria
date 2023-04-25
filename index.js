const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const proveedor = require('./proveedor');
const app = express()
//settings
app.set('port',process.env.PORT||3600);

mongoose.connect("mongodb+srv://Alan:HailedSquare881@alan.rbrdfgi.mongodb.net/papeleriadb?retryWrites=true&w=majority")
.then(
    db=>console.log("Mongo db connect")
)
.catch(
    err=>console.error(err)
)



//middlewares
app.use(morgan('dev'))
app.use(express.json())


//rutas
app.get('/',(req,res)=>{
  res.send(req.body)
  
})

app.listen(app.get('port'),()=>{
    console.log("Servidor en el puerto " + app.get('port'))
})