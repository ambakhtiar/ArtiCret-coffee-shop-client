import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "../components/CoffeeCard";
import ErrorPage from "../components/ErrorPage";

const AddedCoffees = () => {
    const { user } = useContext(AuthContext);
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/coffees?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCoffees(data);
            })
    }, [])

    return (
        <div>
            <div className="w-full h-10 object-cover bg-[#66362c] flex flex-col items-center justify-center">
                <h2 className="text-white text-center text-xl">Added Coffees by {user.displayName}</h2>
            </div>
            <div className="relative font-Raleway flex flex-col items-center my-8 gap-4">
                <Link to={'/AddCoffee'} className="btn bg-[#E3B577] border-[#331A15]">Add Coffee <GiCoffeeCup /></Link>
                {coffees.length > 0 ?
                    <h2 className="text-bold text-xl">You Added Coffees: {coffees.length}</h2> : <ErrorPage></ErrorPage>
                }
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id} coffee={coffee}
                            coffees={coffees} setCoffees={setCoffees}
                        ></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddedCoffees;