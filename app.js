/*

  Ejercicio Numero 1

*/

function censurar(){
  var comentarioUsuario = document.getElementById("val1")
  .value
  var palabras = ["primo","hijo","papa","enojo"]

  //Aca calculamos el reemplazo
  var resultado = comentarioUsuario;
  for(var i=0;i<palabras.length;i++){
    resultado = resultado
    .replace(new RegExp(palabras[i],"gi"),"****");
  }

  document.getElementById("resultado").value = resultado;
}

function alertar(){

  for(var i=0;i<4;i=i+1){
      alert("Mi alerta");
  }







}
