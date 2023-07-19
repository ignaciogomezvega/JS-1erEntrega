
/*    ENTREGA UNO DEL PROYECTO FINAL JAVASCRIPT   */

alert("----BIENVENIDO A ´ARMA TU PC´----");


let nombre = prompt("Ingrese su nombre: ");

alert("*********LISTA DE PRECIOS*********")
alert("AMD $60.000 / Intel $80.000  | | Memoria Ram: 8gb $5000 / 4gb $2500 | | Disco Solido $2500 / Duro $1500");

let procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
while (procesador != "f"){
    if (procesador == "Intel"){
        procesador = 80000;
        alert("Procesador Intel 5 3400gHz");
    }else if (procesador == "AMD"){
        procesador = 60000;
        alert("Procesador AMD Ryzen 5 3400g")
    }else{
        alert("No se ha encontrado el procesador")
        procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
    }

    memoria = parseInt(prompt("Ingrese la cantidad de memoria (solo numero)"));
    if(memoria == 8){
        memoria = 5000;
        alert("8gb");
    }else if (memoria == 4){
        memoria = 2500;
        alert("4gb");
    }else{
        alert("Memoria no disponible");
        parseInt(prompt("Ingrese la cantidad de memoria (solo numero)"));
    }
  


    disco = prompt("Ingrese que tipo de disco desea tener (Solido o Duro)");
    if(disco == "Solido"){
        disco = 2500;
        alert("Disco Solido 240gb");
    }else if (disco == "Duro"){
        disco = 1500;
        alert("Disco Duro 1t");
    }else{
        alert("Disco no encontrado");
        prompt("Ingrese que tipo de disco desea tener (Solido o Duro)");
    }

    resultado = procesador + memoria + disco;
    alert(`${nombre}, este es su presupuesto final: $${resultado}`);
    resultado = 0;
    procesador = 0;
    memoria = 0;
    disco = 0;

    alert("Muchas gracias!!")
    alert("----BIENVENIDO A ´ARMA TU PC´");
    nombre = prompt("Ingrese su nombre: ");
    procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
}
