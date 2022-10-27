import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './layout/Main/Main';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import PrivateRoutes from './routes/PrivateRoutes';
import Blog from './components/Blog/Blog';
import FAQ from './components/FAQ/FAQ';


const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <>This is home</>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},

        {path: '/courses',        
        loader: async () => fetch('http://localhost:5000/courses'),
        element: <PrivateRoutes><Courses></Courses></PrivateRoutes>},

        {path: '/blog', element: <Blog></Blog>},   
        {path: '/faq', element: <FAQ></FAQ>},     

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])

function App() {
    return (
        <div>
            <RouterProvider router={my_router}></RouterProvider>
        </div>
    );
}

export default App;


// loader: async () => fetch('https://jsonplaceholder.typicode.com/users'),
// loader: async () => fetch('http://localhost:5000'),
// loader: async () => fetch('https://10-edu-station-server.vercel.app/'),