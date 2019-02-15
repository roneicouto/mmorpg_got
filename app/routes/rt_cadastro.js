module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.ct_cadastro.cadastro(application, req, res);
	});
	application.post('/cadastrar', function(req, res){
		application.app.controllers.ct_cadastro.cadastrar(application, req, res);
	});

	application.get('/listarUsuarios', function(req, res){
		console.log("entrou na rota!");
		application.app.controllers.ct_cadastro.listarUsuarios(application, req, res);
	});
};