import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home";
import Category from "../pages/Category";
import News from "../pages/News";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`)
    },
        {path: '/category/:id', element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
    },
        {path: '/news/:id', element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
    },
    ]
},
])