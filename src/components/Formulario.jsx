import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { cantidadCaracteres, validarDNI, validarEmail } from './validaciones';
import Form from 'react-bootstrap/Form';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [DNI, setDNI] = useState(0);
    const [email, setEmail] = useState("");

    const validacionCheck = (e) => {
        e.preventDefault();
        
        if (cantidadCaracteres(nombre) && cantidadCaracteres(apellido) && validarDNI(DNI) && validarEmail(email)) {
            alert("Formulario completo")
        }else{
            alert("Campos vacios o incorrectos")
        }
    }

    return (
        <div className='py-4 px-3'>
            <Form onSubmit={validacionCheck}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Nombre</Form.Label>
                    <Form.Control id='nombre' className='form-control' onChange={(e)=> {setNombre(e.target.value)}} type="text" placeholder="Nombre" required minLength={2} maxLength={20}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='apellido'>Apellido</Form.Label>
                    <Form.Control id='apellido' className='form-control' onChange={(e)=> {setApellido(e.target.value)}} type="text" placeholder="Apellido" required  minLength={2} maxLength={15}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='DNI'>DNI</Form.Label>
                    <Form.Control id='DNI' className='form-control' onChange={(e)=> {setDNI(e.target.value)}} type="number" placeholder="DNI" required  minLength={8} maxLength={8}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control id='email' className='form-control' onChange={(e)=> {setEmail(e.target.value)}} type="email" placeholder="Email" required />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Formulario;