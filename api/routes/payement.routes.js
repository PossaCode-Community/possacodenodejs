const express = require('express').Router()

const router = express


router.post('/payer', function(req,res){
    res.json({ 'message' : 'vous venez de commander'}) ; 
})

router.put('/payer', function(req, res){
    res.json({ 'message' : 'vous avez modifier le moyen de payement '}) ;
})

router.delete('/payer', function(req, res){
    res.json({ 'message' : 'vous avez supprimer'}) ;
}) 

module.exports = router