var express = require('express');
var router = express.Router();
var Iris = require("../model/Iris");

//Bryan
router.get("/:code_insee/iris_disponibles/annee/:annee",function(req,res){

    let code_insee = req.params.code_insee.toString()
    let annee = parseInt(req.params.annee)
    Iris.getIrisDispo(code_insee,annee).then((result)=>{
        if(result.length==0){
            res.status(500).json({
                status: 500,
                    error: "No data was found for INSERT_CODE_INSEE",
                    response: null,
            })
        }else{
            res.status(200).json({data:result})
        }

    }).catch((error)=>{
        res.status(500).json({status: 500,
            error: error,
            response:
                "An error has occured while fetching IRIS data for INSERT_CODE_INSEE from DB"
        })
    })
})
//Clarence
router.get("/:code_insee/iris_disponibles/commune/:commune", function(req, res){

    let code_insee = req.params.code_insee.toString()
    //let poplegale =
}
module.exports = router;
