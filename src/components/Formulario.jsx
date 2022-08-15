import React from 'react';
import { Button} from 'react-bootstrap';
import { cantidadCaracteres, validarDNI, validarEmail } from './validaciones';

const Formulario = () => {

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const DNI = document.getElementById("DNI");
    const email = document.getElementById("email");

    const validacionCheck = () => {

        if (cantidadCaracteres(2,15, nombre) && cantidadCaracteres(2,15, apellido) && validarDNI(DNI) && validarEmail(email)) {
            alert("Formulario completo")
        }else{
            alert("Campos vacios o incorrectos")
        }
    }

    return (
        <div className='py-4 px-3'>
            <form onSubmit={validacionCheck}>
                <div className="mb-3">
                    <label htmlFor='nombre'>Nombre</label>
                    <input id='nombre' className='form-control' onChange={()=> {cantidadCaracteres(2,15, nombre)}} type="text" placeholder="Nombre" required minLength={2} maxLength={15}/>
                </div>

                <div className="mb-3">
                    <label htmlFor='apellido'>Apellido</label>
                    <input id='apellido' className='form-control' onChange={()=> {cantidadCaracteres(2,15, apellido)}} type="text" placeholder="Apellido" required  minLength={2} maxLength={15}/>
                </div>

                <div className="mb-3">
                    <label htmlFor='DNI'>DNI</label>
                    <input id='DNI' className='form-control' onChange={()=> {validarDNI(DNI)}} type="number" placeholder="DNI" required  minLength={8} maxLength={8}/>
                </div>

                <div className="mb-3">
                    <label htmlFor='email'>Email</label>
                    <input id='email' className='form-control' onChange={()=> {validarEmail(email)}} type="email" placeholder="Email" required />
                </div>

                <Button variant="primary" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Formulario;