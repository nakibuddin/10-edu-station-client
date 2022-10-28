import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProceedNext = () => {
    const my_navigate = useNavigate();    

    const goToHome = () => {                
        my_navigate('/home');
    }
    
    
    return (
        <div className='page-not-found'>
            <h4>Thank you for being with us.</h4>        
            <h4>We will send you a mail for further instructions.</h4>
            <button onClick={goToHome}>Go to Home Page</button>            
        </div>
    );
};

export default ProceedNext;