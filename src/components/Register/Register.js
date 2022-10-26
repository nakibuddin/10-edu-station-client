import React from 'react';
import './Register.css';
import Registration_img from './../../images/registration.PNG'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = () => {

    }
    return (
        <div className='display_grid'>
            <div className='w-75 mx-auto'>                
                <img className='img-fluid h-100' src={Registration_img} alt="" />
            </div>

            <div>
                <div className='w-75 mx-auto login'>
                    <h3 className='my_color mb-4'>Register now to explore more</h3>


                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" name="my_name" placeholder="Enter name" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="my_email" placeholder="Enter email" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="my_password" placeholder="Password" required/>
                        </Form.Group>
                        
                        <div className='text-center mt-4'>
                            <Button variant="primary w-75" type="submit">
                                Register
                            </Button>                
                        </div>
                    </Form>


                    <div className='text-center'>
                        {/* <p className='mt-3'><small>New to this website? Please <Link to='/register'>Register</Link></small></p> */}
                        {/* <p className='mt-3'><small>Don’t have a account? <Link to='/register'>Register now</Link></small></p> */}
                        <p className='mt-3 fw-semibold'><small>Already have an account? <Link to='/login'>Log in</Link></small></p>

                        <button type="button" className="btn btn-outline-primary w-75 mt-3 mb-3">Continue with google</button> <br/>
                        <button type="button" className="btn btn-outline-dark w-75">Continue with github</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;