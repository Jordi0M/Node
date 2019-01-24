var http = require('http');

module.exports = function pagina(texto,puerto,callback){
http.createServer(function(req,res){
		res.write(texto);
		res.end();
		callback(req);
	}).listen(puerto);
}
