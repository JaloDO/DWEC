listaCaracteres = "TRWAGMYFPDXBNJZSQVHLCKET";

function comprobarDNI(dni){
	var posicion= dni % 23;
	var letra = listaCaracteres.charAt(posicion);
	document.getElementById("letra").value=letra; 
}

var numero = document.getElementById("numero");
var btnEnviar = document.getElementById("")
function verificar(valor){

}