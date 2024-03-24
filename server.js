var http = require('http');
const app =require('./api/app')
const port = 3000 ; 

const serveur = http.createServer(app); 
 serveur.listen(port, ()=>{console.log(`le serveur tourne sur http://localhost:${port}`)})