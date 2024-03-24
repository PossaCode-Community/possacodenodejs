const express = require('express') ; 
const router = express.Router() ;
const taskcontroller = require('../controllers/task.controller')


router.get('/' , function(req,res){

    //Ici on va mettre notre implementation
    res.send('Homme route')

})

router.get('/v1', taskcontroller.getTaskList) ;
router.get('/v2', taskcontroller.getTaskListv2) ; 
//router.get('/v3' , taskcontroller.getTaskListV3) ; 

module.exports = router ; 