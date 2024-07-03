//Variables:

let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor:");

        
    console.log(numeroUsuario);
        if (numeroUsuario==numeroSecreto) {
            //Acertamos, fue verdadera la condicion
            alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"} `);
        }

        else {
        
            if (numeroUsuario>numeroSecreto){
            alert("El numero secreto es menor");
        }
            else {
                alert("El numero secreto es mayor");
            }
            //Incrementamos el comtador cuando no acierta 
            intentos++;
            palabraVeces = "veces";
            if(intentos > maximosIntentos){
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                break; 
            }
            //La condicion no se cumplio
            //alert("Lo siento,no acertaste el numero");
        }

    }
