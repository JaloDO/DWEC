
cont=0;
media=0;
edadTotal=0;


function accion(){
 	edad = parseInt(document.getElementById('txtEdad').value);
 	console.log(isNaN(edad));
 	
 	if(isNaN(edad)){
 		alert("Campo incorrecto\nIntroduce un valor numérico");
 	}else{
 		cont++;
 		edadTotal=edadTotal+edad;
 		document.getElementById("num").innerHTML=cont;
 		media=edadTotal/cont;
 		document.getElementById("media").innerHTML=media;
 		document.getElementById("media2").value=media;
 	}
 	document.getElementById('txtEdad').value="";

 	//alert(edadTotal+"sdg  "+media);
 }

 function accion2(){
 	document.getElementById("edad2").value="";

 	age = prompt("Introduce una Edad");
 	console.log(age);

 	if(age==null){
 		return 0;
 	}
 	age = parseInt(age);
 	if(isNaN(age)){
 		alert("Campo incorrecto\nIntroduce un valor numérico");
 	}else{
 		document.getElementById("edad2").value=age;
 	}
 }