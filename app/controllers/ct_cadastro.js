module.exports.cadastro = function (application, req, res) {
    res.render('vs_cadastro', {validacao : {}, dadosForm : {}});
}

module.exports.cadastrar = function (application, req, res) {
    
    var dadosForm = req.body;

    //express-validator - validações
    req.assert('nome','Nome não pode ser vazio').notEmpty();
    req.assert('usuario','Usuario não pode ser vazio').notEmpty();
    req.assert('senha','Digite uma senha').notEmpty();
    req.assert('casa','Ao menos uma casa deve ser selecionada!').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('vs_cadastro', {validacao : erros, dadosForm : dadosForm});
        return;
    }
    //conecta com o banco
    var connection = application.config.dbConnection;
    //só pra testar
    console.log(connection);
    //Agora chama a 'classe' de usuarioDAO
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    console.log(UsuariosDAO);
    UsuariosDAO.inserirUsuario(dadosForm); //aqui está passando os dados do formulário p/ classe

    res.send('Lets cadastro!');

}