import { useContext, useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import bgImg from '../assets/images/more/4.png';
import { AuthContext } from "../Provider/AuthProvider";

const Coffees = () => {
    const navigate = useNavigate();
    const [coffees, setCoffees] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://articret-coffee-shop.vercel.app/coffees')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCoffees(data);
            })
    }, [])


    return (
        <div className="relative font-Raleway flex flex-col items-center md:my-16 my-8 gap-4">
            <h3>--- Sip & Savor ---</h3>
            <h2 className="text-2xl font-Rancho text-[#331A15]">Our Popular Products</h2>
            <div className="space-x-4">
                <Link to={'/AddCoffee'} className="btn bg-[#E3B577] border-[#331A15]">Add Coffee <GiCoffeeCup /></Link>
                {user && <Link to={'/userAddedCoffees'} className="btn bg-[#E3B577] border-[#331A15]">You Added Coffees <GiCoffeeCup /></Link>}
            </div>
            <img className="hidden lg:block absolute top-0 left-0" src={bgImg} alt="" />
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id} coffee={coffee}
                        coffees={coffees} setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;