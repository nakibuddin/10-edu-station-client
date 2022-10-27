import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Course.css'

const Course = ({course}) => {
    const my_navigate = useNavigate();  

    const showCourseDetails = () => {            
        my_navigate(`/course/${course.id}`);        
    }

    return (
        <div className='course'>
            <img src={course.logo} alt="imaage not found" />
            <h3>{course.name}</h3>
            <h5>Price: {course?.price}</h5>
            {/* <button onClick={showCourseDetails}>Show Details</button> */}
            <Link to={`/course/${course.id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Course;
