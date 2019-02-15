var dataStore = require('nedb')
    , db = new dataStore({
        filename : 'database/data.db',
        autoload : true
    });

var connection = function(dados){
    console.log("Conectou com o NEDB");
    query(db, dados);

}     

function query(db,dados) {
    //var collection = db.collection(dados.collection);
    var operacao = dados.operacao;

    console.log("chamou a query!");
    switch (dados.operacao) {
        case "inserir":
            var collection = {
                usuario : dados.usuario.usuario,
                nome : dados.usuario.nome,
                senha : dados.usuario.senha,
                casa : dados.usuario.casa
            };
            db.insert(collection, function(err, newDoc){});
            console.log("gravou usuario: ",dados.usuario.usuario," com senha: ",dados.usuario.senha);
            break;
        case "listar":
            console.log("entrou no CASE LISTAR");
            var collection = [];
            db.find({});
            console.log(db.find({}, function(err, usuarios){
                usuarios.forEach(function(usuario){
                    collection.push([usuario.nome, usuario.usuario]);
                    console.log("name: ",usuario.nome," usuario: ",usuario.usuario);
                });
                console.log(collection); 
            }));
            break;
        default:
            console.log('entrou aqui mas nao fez nada!');
            break;
    }
}

module.exports = function(){
    return connection;
}