var modulo = require('./modulo.js');

var texto = process.argv[2];
var puerto = process.argv[3];

var contador_visitas = 0;

modulo(texto,puerto,function callback(request){
	console.log(request);
	contador_visitas = contador_visitas+1;
	console.log(contador_visitas);
})
