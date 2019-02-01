module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.ct_jogo.jogo(application, req, res)	;
	})};