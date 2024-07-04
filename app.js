//Variables:
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} porfavor:`));

        
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
            
            if(intentos > maximosIntentos){
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                break; 
            }
            //La condicion no se cumplio
            //alert("Lo siento,no acertaste el numero");
        }

    }
