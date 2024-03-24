const express = require('express')
const app = express()
const routeCommande = require('./routes/commande.routes')
const routePayement = require('./routes/payement.routes')
const routeTask = require('./routes/task.route')

app.use(routeCommande); 
app.use(routePayement) ;
app.use('/task', routeTask ) ; 


app.get('/', (req, res)=>{
   
    res.send('Hello word'); 
})

 


module.exports = app ;  



