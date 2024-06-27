let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor:");


if (numeroUsuario==numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`)
}

else {
    //La condicion no se cumplio
    alert("Lo siento,no acertaste el numero");
}
