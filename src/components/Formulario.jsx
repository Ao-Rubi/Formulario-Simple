import React, { useEffect, useState } from 'react';
import { Form, Button} from 'react-bootstrap';

const Formulario = () => {
    const [validated, setValidated] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [DNI, setDNI] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    }

    // const validacion = (value) => {
    //     const pattern = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;
    //     console.log(value.test(pattern))
    //     return value.test(pattern)
    // }

    return (
        <div className='py-4 px-3'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={(e)=> { setNombre(e.target.value)}} type="text" placeholder="Nombre" required minLength={2}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" required minLength={2}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="DNI" required minLength={8}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Formulario;