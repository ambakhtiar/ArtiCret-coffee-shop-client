import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../Page/AddCoffee";
import Home from "../Page/Home";
import CoffeeDetails from "../Page/CoffeeDetails";
import UpdateCoffee from "../Page/UpdateCoffee";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <PrivateRouter>
                    <AddCoffee></AddCoffee>
                </PrivateRouter>
            },
            {
                path: '/coffeeDetails/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;