export function campoRequerido(input) {
    if (input.trim().length > 0) {
        return true;
    }else {
        return false;
    }
}

//Trim corta los espacios de adelante y de atras de un texto
export function cantidadCaracteres(input) {
    if (input.length >= 3 && input.length <= 20) {
        return true;
    }else{
        return false;
    }
}

export function validarDNI(input) {
    let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/;
    if(patron.test(input)) {
        return true;
    }else{
        return false;
    }
}

export function validarEmail(input) {
    let patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(patron.test(input)) {
        return true;
    }else{
        return false;
    }
}
