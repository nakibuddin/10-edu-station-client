import React from 'react';
import './CourseDetails.css'
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(course);
    
    return (
        <div>
            <h2>Take a short quiz to test your knowledge level at this moment. Don't worry if you don't score well on this quiz. If you complete this course, you will know much more than that.</h2>

            <Link to={`/course/quiz/${course.name}`}><button>Start Quiz</button></Link>

            <h2>{course?.name} course</h2>
            <img src={course?.logo} alt="" />
            <h3>{course.details}</h3>
        </div>
    );
};

export default CourseDetails;