
//const connection = require('../config/mysql');
const pg = require('../config/pg');

const Task = {
    getTasks: async function(){
        //MySQL
       /*return new Promise((resolve, reject)=>{
           connection.query("SELECT * FROM tasks",(err,res)=>{
               if(err) {
                   reject(err) ;
               }else{
                   resolve(res)
               }
           })
       })*/
        const {rows} = await pg.query("SELECT * FROM tasks",[])
        return rows;

    },
    addTask : async function(newTask){
        //MySQL
        /*return new Promise((resolve, reject) => {
            connection.query("INSERT INTO tasks SET ?",{title:newTask},(err,res)=>{
                if(err) {
                    reject(err) ;
                }else{
                    resolve(res)
                }
            })
        })*/
        const res = await pg.query("INSERT INTO tasks(title) VALUES($1)",[newTask])
        console.log(res.rows[0])
    }
}
module.exports= Task;