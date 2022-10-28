import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css'

import { useLoaderData, Link } from 'react-router-dom';

const Checkout = () => {
    // const courses = useContext(CoursesContext);
    const course = useLoaderData();
    const [obj, setObj] = useState({});
    useEffect( () => {
        fetch('https://10-edu-station-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setObj(data))
        .catch(error => console.log('my_fetch_error: ', error));    
    } , [])

    const courses = obj?.data;
    // console.log(obj);
    
    return (
        <div className='checkout_main_container'>
            <div className='checkout_details text-center'>                
                <div>
                    <h5 className='mb-4'> <b>Select a payment method</b></h5>
                    <img src="https://www.xeonbd.com/wp-content/uploads/bkash-696x372-1.png" alt="" />                                                                        
                    <img src="https://www.dutchbanglabank.com/img/mlogo.png" alt="" />
                    <img src="https://en.shampratikdeshkal.com/uploads/2021/07/online/photos/nagad-60e4802c0f0ad.jpg" alt="" />

                </div>

                <br/><br/><br/>
                <Link to='/course/checkout/proceed-next'> <button type="button" className="btn btn-outline-primary">Proceed to next</button> </Link>
                                                
            </div>
            
            <div className='side_bar_container'>
                <img className='course_img' src={course?.logo} alt="" />
                <h5 className='mt-4 text-center'> <b>Course Name:</b> {course?.name}</h5>
                <h5 className='text-center'> <b>Price:</b> {course?.price}</h5>                                        
            </div>
        </div>
    );
};

export default Checkout;