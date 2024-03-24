const pool = require('../config/connection')


async function getTaskList(req, res){

    pool.query('select  * from tasklist ' , 
    function(err, rows){
        if (err) console.log(err)
        else return res.json(rows)
    })


}

const  getTaskListv2 = async (req,res)=> {
    const [rows] = await new Promise( (resolve,reject)=>{
        pool.query('select * from tasklist' , 
        (err,rows)=>{
            if(err) reject(err)
            
            else resolve(rows)
        }) })
    return res.json(rows)
}
/*
exports.getTaskListV3 = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM students');
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
    }
  } ; */

  module.exports =  {getTaskList, getTaskListv2} ; 