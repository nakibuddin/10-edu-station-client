import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    // let height = screen.height;

    const my_navigate = useNavigate();    

    const goToHome = () => {                
        my_navigate('/home');
    }

    return (        
        <div className='page-not-found'>
            <h2>Page not found: 404</h2>
            <button onClick={goToHome}>Go to Home Page</button>            
        </div>
    );
};

export default PageNotFound;