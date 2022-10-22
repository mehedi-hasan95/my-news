import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home";
import Category from "../pages/Category";
import News from "../pages/News";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch(`https://my-news-server-gray.vercel.app/news`)
            },
            {
                path: '/category/:id', element: <Category></Category>,
                loader: ({ params }) => fetch(`https://my-news-server-gray.vercel.app/categories/${params.id}`),
            },
            {
                path: '/news/:id', element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://my-news-server-gray.vercel.app/news/${params.id}`),
            },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
        ]
    },
])