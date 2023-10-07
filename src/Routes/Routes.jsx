import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    }
])

export default router;