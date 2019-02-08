module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.ct_index.index(application, req, res);
	});

	application.post('/autenticar', function(req, res){
		application.app.controllers.ct_index.autenticar(application, req, res);
	});
}