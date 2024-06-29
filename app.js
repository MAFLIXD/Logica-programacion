//Variables:

let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while(numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor:");

        
    console.log(numeroUsuario);
        if (numeroUsuario==numeroSecreto) {
            //Acertamos, fue verdadera la condicion
            alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces} `)
        }

        else {
        
            if (numeroUsuario>numeroSecreto){
            alert("El numero secreto es menor");
        }
            else {
                alert("El numero secreto es mayor");
            }

            intentos = intentos + 1;
            palabraVeces = "veces";
            //La condicion no se cumplio
            //alert("Lo siento,no acertaste el numero");
        }

    }
