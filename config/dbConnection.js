var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na conexão com o Mongo');

    //criando a conexão com o DB
    var db = new mongo.DB(
        'got', //nomedo banco de dados
        new mongo.Server(
            'localhost', //str de conexão com o banco
            27017, //porta
            {}
        ),
        {}
    );
    return db;
}

module.exports = function(){
    return connMongoDB;
}