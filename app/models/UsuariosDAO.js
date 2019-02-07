function UsuariosDAO(connection) {
    //recebendo o objeto DB da conexão!
    this._connection = connection;
    console.log('Entrou na connection: %');
}

UsuariosDAO.prototype.inserirUsuario = function(usuario,res){
    console.log(usuario);
    var dados = {
        operacao : "inserir",
        usuario : usuario,
        collection : "usuarios",
        callback : function (err, res) {
            res.send("Deu certo, Ronei")
        }
    }
    this._connection(dados);
};

module.exports = function() {
    return UsuariosDAO;
}