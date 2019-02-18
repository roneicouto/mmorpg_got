module.exports.index = function (application, req, res) {
    res.render('vs_index', {validacao : {}, dadosForm : {}});
}

module.exports.autenticar = function (application, req, res) {
    
    var dadosForm = req.body;

    req.assert('usuario', 'Preencher usuário').notEmpty();
    req.assert('senha', 'Preencher a senha').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("vs_index",{validacao : erros, dadosForm : dadosForm});
        return;
    }

    var connection = application.config.dbConnection;

    var UsuariosDao = new application.app.models.UsuariosDAO(connection);
    UsuariosDao.autenticar(dadosForm, req, res);
}