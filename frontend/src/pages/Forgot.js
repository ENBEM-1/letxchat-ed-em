import React, { useState } from 'react';
import { Container, Row, Form, Col, Button  } from 'react-bootstrap';
import { socket } from '../context/appContext';
// import { useResetUserMutation } from '../services/appApi';
// import { useParams } from "react-router";



function Forgot() {

    const [email, setEmail] = useState("");

    function handleForgot(e) {
        e.preventDefault();

            socket.emit('send email-link');
       alert('Email sent : check your mail');
    }

    function handleResend(e) {
        alert('check email:spam for reset link');
    }

    return (
        <Container>
            <Row>
                <Col md={15} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 400 }} onSubmit={handleForgot}>
                        <div id="login-header"><h1 className="text-center">Forgot password</h1></div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter employee email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </Form.Group>
                        <div className='button-space'>
                            <Button id='button-me' variant="primary" type="submit" onChange={handleResend}>
                                Request reset link 
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Forgot