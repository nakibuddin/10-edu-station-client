import React, { useEffect, useState } from 'react';
import './CourseDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(course);

    const [obj, setObj] = useState({});
    useEffect( () => {
        fetch('https://10-edu-station-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setObj(data))
        .catch(error => console.log('my_fetch_error: ', error));    
    } , [])

    const courses = obj?.data;
    // console.log(obj);
//align-items-center

    return (
        <div className='c_details_main_container'>     

            <div className='courseDetails'>
                <div className='d-flex  gap-5 mb-5 course-description'>  
                    <img className='course_img' src={course?.logo} alt="" />
                    <div>
                        <h5> <b>Course Name:</b> {course?.name}</h5>
                        <h5><b>Description:</b> </h5>
                        <h6>{course.details}</h6>
                        <h5> <b>Price:</b> {course?.price}</h5>

                        
                        <h5 className='mt-4'> <b>Instructor details</b> </h5>
                        <img className='instructor_img' src={course?.instructor_img} alt="" />
                        <h6><b>Name:</b> {course?.instructor_name} </h6>
                        <h6 className='mb-3'><b>Experience:</b> {course?.instructor_experience} year practical experience on this field.</h6>
                        {/* <br /><br /><br /> <br /><br /><br /> <br /><br /><br /><br /><br /><br /> */}
                        {/* <button type="button" className="btn btn-outline-primary">Proceed to checkout</button> */}
                        {/* <Link to={`/course/${course.id}`}> <button type="button" className="btn btn-outline-primary">Proceed to checkout</button> </Link> */}                        
                        <Link to={`/course/checkout/${course.id}`}> <button type="button" className="btn btn-outline-primary">Proceed to checkout</button> </Link>                        
                        
                    </div>
                </div>

                <h5 className='fw-semibold mb-3'>You can take a short quiz to test your knowledge level at this moment. Don't worry if you don't score well on this quiz, you will learn much more than that If you complete this course.</h5>

                <Link to={`/course/quiz/${course.name}`}><button type="button" className="btn btn-outline-primary px-5">Start quiz</button></Link>
            </div>

            <div className='side_bar_container'>
                <SideBar courses={courses}></SideBar>                                
            </div>
                                
        </div>
    );
};

export default CourseDetails;