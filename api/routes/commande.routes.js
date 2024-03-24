const express = require('express')
const router = express.Router()


router.post('/commander', function(req,res){
res.json({ 'message' : 'vous venez de commander'}) ; 
 })

router.put('/commander', function(req, res){
    res.json({ 'message' : 'vous avez modifier la commande'}) ;
})

router.delete('/commander', function(req, res){
    res.json({ 'message' : 'vous avez supprimer la commande'}) ;
}) 

module.exports = router