var dataStore = require('nedb')
    , db = new dataStore({
        filename : 'database/data.db',
        autoload : true
    });

var crytpo = require('crypto');

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
            //criptografando a SENHA
            var senhaEncrypted = crytpo.createHash("md5").update(dados.usuario.senha).digest("hex");
            collection.senha = senhaEncrypted;

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
        case "autenticar":
            var collection = {
                usuario : dados.usuario,
                senha : dados.senha
            }
            //criptografando a SENHA
            var senhaEncrypted = crytpo.createHash("md5").update(collection.senha).digest("hex");
            collection.senha = senhaEncrypted;
            console.log('entrou no CASE autenticar! com usuario', collection.usuario,' e senha ',collection.senha);
            //pode ser assim: db.find({usuario :{$eq:dados.usuario}, senha: {$eq:dados.senha}})
            db.find({usuario: collection.usuario, senha : collection.senha},function(err, result){
                    console.log(result[0]);
                        if ((result[0] != undefined) && (result[0] != [])){
                            var autentica1 = true;
                            //req.session.autorizado = true;
                        } else {
                            var autentica1 = false;       
                        }
            });
            break;
        default:
            console.log('entrou aqui mas nao fez nada!');
            break;
    }
}

module.exports = function(){
    return connection;
}