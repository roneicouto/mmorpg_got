module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.ct_cadastro.cadastro(application, req, res);
	});
	application.post('/cadastrar', function(req, res){
		application.app.controllers.ct_cadastro.cadastrar(application, req, res);
	});
};