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
import Checkout from '../components/Courses/Checkout/Checkout';
import ProceedNext from '../components/Courses/ProceedNext/ProceedNext';


export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <>This is home</>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},

        {path: '/courses',        
        loader: async () => fetch('https://10-edu-station-server.vercel.app/courses'),
        element: <Courses></Courses>
        },

        {path: '/course/:id',        
        loader: async ({params}) => fetch(`https://10-edu-station-server.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>
        },

        {path: '/course/checkout/:id',        
        loader: async ({params}) => fetch(`https://10-edu-station-server.vercel.app/course/checkout/${params.id}`),
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
        },


        {path: '/course/quiz/:variable',        
        loader: async ({params}) => fetch(`https://10-edu-station-server.vercel.app/course/quiz/${params.variable}`),
        element: <Quiz></Quiz>
        },

        {path: '/blog', element: <Blog></Blog>},   
        {path: '/faq', element: <FAQ></FAQ>},     
        {path: '/course/checkout/proceed-next', element: <ProceedNext></ProceedNext>},

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])


// loader: async () => fetch('http://localhost:5000'),
// loader: async () => fetch('https://10-edu-station-server.vercel.app/'),