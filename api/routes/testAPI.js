var express = require('express');
var router = express.Router();
var Task = require("../model/Task");

router.get('/',  function(req, res, next) {
    Task.getTasks()
        .then((result) => {
            res.status(200).json({data:result});
        })
        .catch((error)=>{
            res.status(500).json({data:"error server"})
        })
});
router.post('/',  function(req, res, next) {
    Task.addTask(req.body.newTask)
        .then((result)=>{
            res.status(201).json({id:result.insertId})
        })
})
module.exports = router;