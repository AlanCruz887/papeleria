const express = require('express');
const morgan = require('morgan');
const app = express()
//settings
app.set('port',process.env.PORT||3600);


//middlewares
app.use(morgan('dev'))


//rutas
app.get('/:v',(req,res)=>{
  const valor = req.params.v
  let t='';
  for (let index = 0; index < 11; index++) {
   t+=(valor + " x " + index + " = " + index*valor)
  }
  res.send(t)
  
 
})

app.listen(app.get('port'),()=>{
    console.log("Servidor en el puerto " + app.get('port'))
})