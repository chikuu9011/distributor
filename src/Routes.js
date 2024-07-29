import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Pages/Login";
import App from "./components/Pages/App";
import Home from "./components/Pages/Home";
import ProductPage from "./components/Pages/Product";
import ContactPage from "./components/Pages/Contact";
import AboutPage from "./components/Pages/About";



const routes = createBrowserRouter([{
    path: "/",
    element: <Login />,

},
{
    path: "/home",
    element: <App />,
    children: [
        {
            path: "/home/",
            element:<Home/>
        },
        {
            path: "/home/products",
            element:<ProductPage/>
        },
        {
            path: "/home/contact",
            element:<ContactPage/>
        }
        ,{
            path: "/home/about",
            element:<AboutPage/>
        }
    ]
}
])

export default routes