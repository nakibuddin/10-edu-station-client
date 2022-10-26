import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './layout/Main/Main';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <>This is home</>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
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
