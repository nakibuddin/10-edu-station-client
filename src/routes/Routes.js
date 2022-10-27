import { createBrowserRouter } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import Main from './../layout/Main/Main';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';
import Courses from './../components/Courses/Courses/Courses';
import Blog from './../components/Blog/Blog';
import FAQ from './../components/FAQ/FAQ';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import CourseDetails from './../components/Courses/CourseDetails/CourseDetails';
import Quiz from '../components/Courses/Quiz/Quiz';


export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <>This is home</>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},

        {path: '/courses',        
        loader: async () => fetch('http://localhost:5000/courses'),
        element: <Courses></Courses>
        },

        {path: '/course/:id',        
        loader: async ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>
        },

        {path: '/course/quiz/:variable',        
        loader: async ({params}) => fetch(`http://localhost:5000/course/quiz/${params.variable}`),
        element: <PrivateRoutes><Quiz></Quiz></PrivateRoutes>
        },

        {path: '/blog', element: <Blog></Blog>},   
        {path: '/faq', element: <FAQ></FAQ>},     

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])


// loader: async () => fetch('http://localhost:5000'),
// loader: async () => fetch('https://10-edu-station-server.vercel.app/'),