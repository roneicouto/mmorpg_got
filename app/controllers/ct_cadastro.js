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
    res.send('Lets cadastro!')

}