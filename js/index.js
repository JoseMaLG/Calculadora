'use strict'
do{
    let operacionerronea = true;
    alert('Bienvenido a mi primera calculadora')
    let operacion;
    do{
        operacion = prompt ('¿Que operación quieres hacer?');
        switch (operacion.trim()){
            case "+":
                
                operacionerronea = false;
                break;
            case "-":
                operacionerronea = false;
                break;
            case "/":
                operacionerronea = false;
                break;
            case "*":
                operacionerronea = false;
                break;
            default:
                alert("Valor introducido erroneo");
        }
    }while(operacionerronea);
    let numerosmal = false;
    do{
        let numeros = prompt("Ahora incluye los números que quieras operar. (Solo pon dos numeros separados por espacio)")
        let numero1 = numeros.trim().substring(0,numeros.search(' '));
        let numero2 = numeros.trim().substring(numeros.search(' '), numeros.length);
        if(isNaN(parseInt(numero1)) || isNaN(parseInt(numero2))){
            numerosmal = true;
            alert('Debes introducir numeros');
        }
    }while(numerosmal)
    switch (operacion){
        case "+":
            alert(parseInt(numero1)+parseInt(numero2));
            break;
        case "-":
            alert(parseInt(numero1)-parseInt(numero2));
            break;
        case "/":
            alert(parseInt(numero1)/parseInt(numero2));
            break;
        default:
            alert(parseInt(numero1)*parseInt(numero2));
    }
    let repetir = confirm('¿Deseas continuar?');
}while(repetir);
