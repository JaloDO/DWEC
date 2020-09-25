result = "";

function accion(){
	flag = confirm("Eres un putero?");
	/*result = "";
	
	if(alert(flag)==true){
		result = result + "\nEres un putero";
		document.getElementById("resultado").innerHTML = result;
	}else{
		result = result + "\nAparte de putero, falso";
		document.getElementById("resultado").innerHTML = result;
	}*/
}

var array1 = ["valor1", "valor2", "valor3", true, 5.5, 6, 7];
document.getElementById("salidaArray").innerHTML = array1;

console.log("Longitud array1: "+array1.length);

//creamos la lista para el primer array
codHTML="<ul>";

for(i=0; i<array1.length; i++){
	console.log("POS "+i+": "+array1[i]);
	codHTML+="<li>"+array1[i]+"</li>";
}
codHTML+="</ul>";


var array2 = ["valor1", "valor2", "valor3", true, 5.5, 6, 7];
valor = true;
codHTML2="<ul>";
array2.forEach(crearElementos);

function crearElementos(valor){
	codHTML2+="<li>"+valor+"</li>";
}
codHTML2+="</ul>";

document.write(codHTML2);
document.getElementById("id_p").innerHTML = codHTML;