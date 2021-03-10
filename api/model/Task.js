
const connection = require('../config/database');

const Task = {
    getTasks: function(){

       return new Promise((resolve, reject)=>{
           connection.query("SELECT * FROM tasks",(err,res)=>{
               if(err) {
                   reject(err) ;
               }else{
                   resolve(res)
               }
           })
       })
    },
    addTask : function(newTask){
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO tasks SET ?",{title:newTask},(err,res)=>{
                if(err) {
                    reject(err) ;
                }else{
                    resolve(res)
                }
            })
        })
    }
}
module.exports= Task;