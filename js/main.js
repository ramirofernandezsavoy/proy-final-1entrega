// Game 
// Piedra, Papel o Tijera

// Numero Aleatorio de 1 a 3
function randomN(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

// Bucle que use para probar la funcion.
// for (let i = 1; i <= 10; i++){
//     console.log(randomN(1, 3));
// }

// Definicion de variables.
let ppt = randomN(1, 3);
let choice = prompt("Elegí: Piedra, Papel o Tijera");
let choiceValue 

// Asignacion de Numero a cada Respuesta.
if (choice == "Piedra") {
    choiceValue = 1;
} else if (choice == "Papel") {
    choiceValue = 2;
} else if (choice == "Tijera") {
    choiceValue = 3;
} else {
    alert("Eleccion no valida. Intenta de nuevo!")
}

// Comparacion de valores.
if(choiceValue === ppt){
    alert("Empate! Intenta de nuevo.");
} else if(choiceValue === 1) {
    if (ppt === 2){
        alert("Perdiste! Tu rival eligió papel!");
    }
    if (ppt === 3){
        alert("Ganaste! Tu rival eligió tijeras!");
    }
} else if(choiceValue === 2) {
    if (ppt === 1){
        alert("Ganaste! Tu rival eligió piedra!");
    }
    if (ppt === 3){
        alert("Perdiste! Tu rival eligió tijeras!");
    }
} else if(choiceValue === 3) {
    if (ppt === 1){
        alert("Perdiste! Tu rival eligió piedra!");
    }
    if (ppt === 2){
        alert("Ganaste! Tu rival eligió papel!");
    }
}