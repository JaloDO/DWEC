result = "";

function accion(){
	flag = confirm("Eres un putero?");
	result = "";
	
	if(alert(flag)==true){
		result = result + "\nEres un putero";
		document.getElementById("resultado").innerHTML = result;
	}else{
		result = result + "\nAparte de putero, falso";
		document.getElementById("resultado").innerHTML = result;
	}
}

var array1 = ["valor1", "valor2", "valor3", true, 5, 6, 7];
document.getElementById("salidaArray").innerHTML=array1;

console.log("Longitud array1: "+array1.length);
codHTML="<ul>";
for(i=0; i<array1; i++){
	console.log("POS "+i+": "+array1[i]);
	codHTML+="<li>"+array[i]+"</li>";
}
codHTML+="</ul>";
document.write(codHTML);