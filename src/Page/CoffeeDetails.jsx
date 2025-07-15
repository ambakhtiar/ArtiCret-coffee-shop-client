import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, price, details, photo } = coffee;

    return (
        <div className='w-3/4 mx-auto '>
            <Link to={'/'}>
                <button className="flex items-center p-3 gap-2 rounded-md hover:bg-[#D2B48C] my-4">
                    <span><BiArrowBack /></span>
                    <span>Back to Home</span>
                </button>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-[#F4F3F0] py-16">
                <div className="flex-1 flex justify-center">
                    <img src={photo} alt="" />
                </div>
                <div className="flex-1 font-sans space-y-2">
                    <h2 className="font-Rancho font-bold space text-2xl text-[#331A15]">{name}</h2>
                    {/* <h3 className="text-gray-600"><span className="font-semibold text-black">Name: </span>{name}</h3> */}
                    <h3 className="text-gray-600"><span className="font-semibold text-black">Taste: </span>{taste}</h3>
                    <h3 className="text-gray-600"><span className="font-semibold text-black">Quantity: </span>{quantity}</h3>
                    <h3 className="text-gray-600"><span className="font-semibold text-black">Supplier: </span>{supplier}</h3>
                    <h3 className="text-gray-600"><span className="font-semibold text-black">Details: </span>{details}</h3>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;