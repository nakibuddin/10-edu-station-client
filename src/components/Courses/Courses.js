import React from 'react';
import './Courses.css'
import { useLoaderData } from 'react-router-dom';
import Course from './../Course/Course';

const Courses = () => {
    const {data} = useLoaderData();     
    const courses = data;    


    return (        
        <div>            
            <br/><br/>
            <div className="courses">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <br/><br/><br/>

        </div>
    );
};

export default Courses;