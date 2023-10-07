import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Category from "../Components/Category/Category";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:category_name',
                element: <Category></Category>,
            }
        ]
    }
])

export default router;