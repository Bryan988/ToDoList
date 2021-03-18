const pg = require('../config/pg');

//Bryan
const Iris = {
    getIrisDispo : async function(code_insee,annee){
//return rows;
        const query =`SELECT communes.libelle, iris.numero 
            FROM communes JOIN iris ON communes.id=iris.commune_id
            WHERE iris.annee= ${annee} AND communes.insee_id_commune='${code_insee}';`;
        const{rows} = await pg.query(query,[])
        return(rows)
    }
}//34172 2017

module.exports= Iris;
