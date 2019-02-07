var mongo = require('mongodb').MongoClient;
var assert = require("assert");

const dbName = "got";
const url = "mongodb://mavmint:27017";


var connMongoDB = function(data){
    console.log('Entrou na conexão com o Mongo');

    //criando a conexão com o DB
    mongo.connect(
        url, function(err, client){
            assert.equal(null,err);
            console.log('Conectado com sucesso no servidor!');
            const db = client.db(dbName);
            query(db,data);
            client.close();
        }
    )
}

function query(db,data) {
    var collection = db.collection(data.collection);
    switch (dados.operacao) {
        case "inserir":
            collection.insertOne(dados.usuario, dados.callback);
            break; 
        default:
            break;
    }
}

module.exports = function(){
    return connMongoDB;
}