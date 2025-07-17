import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../Page/AddCoffee";
import Home from "../Page/Home";
import CoffeeDetails from "../Page/CoffeeDetails";
import UpdateCoffee from "../Page/UpdateCoffee";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Page/Profile";
import ErrorPage from "../components/ErrorPage";
import AddedCoffees from "../Page/AddedCoffees";


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
                element: <PrivateRouter>
                    <CoffeeDetails></CoffeeDetails>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRouter>
                    <UpdateCoffee></UpdateCoffee>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRouter>
                    <Profile></Profile>
                </PrivateRouter>
            },
            {
                path: "/userAddedCoffees",
                element: <PrivateRouter>
                    <AddedCoffees></AddedCoffees>
                </PrivateRouter>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;