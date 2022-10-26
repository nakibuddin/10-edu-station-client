import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './layout/Main/Main';


const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/home', element: <>This is home</>},

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
