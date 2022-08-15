export function campoRequerido(input) {
    if (input.value.trim().length > 0) {
        input.className = "is-valid";
        return true;
    }else {
        input.className = "is-invalid";
        return false;
    }
}

//Trim corta los espacios de adelante y de atras de un texto
export function cantidadCaracteres(min, max, input) {
    if (input.value.trim().length >= min && input.value.trim().length <= max) {
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarDNI(input) {
    let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/;
    if(patron.test(input.value.trim())) {
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarEmail(input) {
    let patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(patron.test(input.value.trim())) {
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}
