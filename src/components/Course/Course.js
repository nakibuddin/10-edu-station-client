import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <h5>Total question: {course.total}</h5>
            <button onClick={showCourseDetails}>Start Practice</button>            
        </div>
    );
};

export default Course;
