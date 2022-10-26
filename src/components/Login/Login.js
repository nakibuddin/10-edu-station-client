import React from 'react';
import './Login.css'
import login_img from './../../images/login.PNG'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


const Login = () => {
    const {user, LogInWithGoogle, LogInWithGithub} = useContext(AuthContext);

    const success = 'success';
    const handleRegister = () => {        
    }
    const passwordError = 'password Error';

    const handleGoogleLogIn = () => {
        LogInWithGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.error('my_error: ', error));
    }
    const handleGithubLogIn = () => {
        LogInWithGithub()
        .then(result => console.log(result.user))
        .catch(error => console.error('my_error: ', error));
    }

    return (
        <div className='display_grid'>
            <div className='w-75 mx-auto'>                
                <img className='img-fluid h-100 hide' src={login_img} alt="" />
            </div>

            <div>
                <div className='mx-auto login'>
                    <h3 className='mb-4 my_color'>Good to see you again!</h3>


                    <Form onSubmit={handleRegister}>                    
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
                                Log in
                            </Button>                
                        </div>
                    </Form>


                    <div className='text-center'>
                        {/* <p className='mt-3'><small>New to this website? Please <Link to='/register'>Register</Link></small></p> */}
                        {/* <p className='mt-3'><small>Don’t have a account? <Link to='/register'>Register now</Link></small></p> */}
                        <p className='mt-3 fw-semibold'><small>Don’t have a account? <Link to='/register'>Create an account</Link></small></p>

                        <button type="button" onClick={handleGoogleLogIn} className="btn btn-outline-primary w-75 mt-3 mb-3">Continue with google</button> <br/>
                        <button type="button" onClick={handleGithubLogIn} className="btn btn-outline-dark w-75">Continue with github</button>
                    </div>
                    
                </div>
                {
                    user?.uid && <div>
                        <p>Name: {user.displayName}</p>
                        <img src={user.photoURL} alt="" /> </div>
                }
            </div>
        </div>
    );
};

export default Login;