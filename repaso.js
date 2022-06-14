function crearCampos(){
var padre=document.getElementById("cam_nombres");
var num=document.getElementsByTagName("select")[0].value;
padre.innerHTML="";
for(i=0;i<num;i++){
var objeto_input=document.createElement("input");	
objeto_input.placeholder="adulto "+(i+1);
objeto_input.type="text";
objeto_input.id="nombre "+i;//aqui estamos diciendo que el id de objeto_input es "nombre "+i y 
//se nesesita en la linea 31 pero no la llama
padre.appendChild(objeto_input);
}
}

function crearCamposdos(){
var edad=document.getElementById("cam_edades");
var ninios=document.getElementsByTagName("select")[1].value;
edad.innerHTML="";
for(i=0;i<ninios;i++){
var edad_input=document.createElement("input");
edad_input.placeholder="Mete la edad del niño "+(i+1);
edad_input.type="number";
edad_input.id="edad" +i;
edad.appendChild(edad_input);
}
}
function validar(){
var cubo="";
var num=document.getElementsByTagName("select")[0].value;//aqui vemos que nesesitamos poner otra vez
//el select.value para que funcione pero no el objeto_input.id me puedes decir el porque
for(i=0;i<num;i++){
var nombres_id="nombre "+i;
var nombres=document.getElementById(nombres_id).value;
cubo=cubo+","+nombres;
}
alert(cubo);
}
 