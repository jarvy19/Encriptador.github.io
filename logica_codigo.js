var munheco=document.querySelector(".munheco");
var datossalida=document.querySelector(".texto_salida");
var entrada=document.querySelector(".texto_entrada");

function data(){

    let texto=entrada.value.split("");
    const palabra=[];
    for(let data=0 ; data<texto.length;data++){

        if(texto[data]=="a"){
            palabra.push("ai");                                   
        }
        else if(texto[data]=="e"){
            palabra.push("enter");                                    
        }
        else if(texto[data]=="i"){
            palabra.push("imes");                                    
        }
        else if(texto[data]=="o"){
            palabra.push("ober");  
        }
        else if(texto[data]=="u"){
            palabra.push("ufat");                                    
        }
        else{
            palabra.push(texto[data]);                                   
        }                                
    }
    datossalida.style.background= 'white';
    const cambioVariable= palabra.join(""); 
    datossalida.value=cambioVariable;
    
}
var boton=document.querySelector(".boton-encriptador");
boton.onclick=data;

function desdata(){
    texto=entrada.value;

    combinacion=texto
    .replace(/ufat/g,"u")
    .replace(/ober/g,"o")
    .replace(/imes/g,"i")
    .replace(/enter/g,"e")
    .replace(/ai/g,"a");                                   
    
    datossalida.style.background= 'white';
    datossalida.value= combinacion;
    
}
var botonDos=document.querySelector(".boton-desencriptador");
console.log(botonDos.onclick=desdata);

var copia=document.querySelector(".copia");

copia.addEventListener("click",() => {
    var text=datossalida;
    navigator.clipboard.writeText(text.value);
    text.value="";
    text.style.background= 'transparent';
})




