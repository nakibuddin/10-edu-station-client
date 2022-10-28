import React, { createContext } from 'react';
import './Courses.css'
import { useLoaderData } from 'react-router-dom';
import Course from './../Course/Course';
import SideBar from '../SideBar/SideBar';

export const CoursesContext = createContext();

const Courses = () => {
    const {data} = useLoaderData();     
    const courses = data;    


    return ( 
        <CoursesContext.Provider value={courses}>

        <div className='main_container'>            
            
        
            <div className='courses_container'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            
            <div className='side_bar_container'>
                <SideBar courses={courses}></SideBar>                                
            </div>            
            
        </div>

        </CoursesContext.Provider>       
    );
};

export default Courses;