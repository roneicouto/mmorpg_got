function UsuariosDAO(connection) {
    //recebendo o objeto DB da conexão!
    this._connection = connection;
    console.log('Entrou na connection: %');
}

UsuariosDAO.prototype.inserirUsuario = function(usuario,res){
    console.log("Cadastrando o usuario: ", usuario);
    var dados = {
        operacao : "inserir",
        usuario : usuario,
        collection : "usuarios",
        callback : function (err, res) {
            res.send("Deu certo, Ronei")
        }
    }
    console.log('pegou usuario certinho e saiu');
    this._connection(dados);
};

UsuariosDAO.prototype.listarUsuarios = function(req, res){
    console.log("entrou no metodo de listagem!");

    var dados = {
        operacao : "listar",
        collection : "usuarios",
        callback : function(err, res){
            res.console.log('listou?');
        }

    }
    console.log("entrou no model, funcao de listagem");
    this._connection(dados);
};

UsuariosDAO.prototype.autenticar = function (usuario, res) {
    console.log("entrou no prototype de autenticar!");
    var dados = {
        operacao : "autenticar",
        usuario : usuario.usuario,
        senha : usuario.senha,
        collection: "usuarios",
        callback : function(err, res){
            res.console.log('autenticou?');
        }
    }
    this._connection(dados);
}

module.exports = function() {
    return UsuariosDAO;
}