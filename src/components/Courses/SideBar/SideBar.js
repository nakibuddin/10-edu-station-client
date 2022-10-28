import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({courses}) => {
    // const [obj, setObj] = useState();
    // useEffect( () => {
    //     const my_function = () => console.log('');

    //     fetch('https://10-edu-station-server.vercel.app/courses')
    //     .then(res => res.json())
    //     .then(data => setObj(data))
    //     .catch(error => console.log('my_fetch_error: ', error));    
    // } , [])

    // let [courses, setCourses] = useState();

    // useEffect( () => {
    //     const {data} = obj;
    //     setCourses(data);
    // } , [courses])
    
    // const my_function = async () => {
    //     const {data} = await obj;
    //     const courses = data;
    //     // console.log(data.length);    
    // };
    // setTimeout(my_function, 1000);
    

    return (
        <div>
            <h3 className='mb-4 text-center'>Available courses</h3>
                {
                    courses?.map(course => <Link to={`/course/${course?.id}`} key={course?.id} ><button type="button" className="btn btn-outline-primary mb-3 px-5 w-100">{course.name}</button>  <br/> </Link> )
                }
        </div>
    );
};

export default SideBar; 