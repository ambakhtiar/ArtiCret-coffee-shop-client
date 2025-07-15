import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsEye, BsViewList } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, price, details, photo } = coffee;

    function handleCoffeeDelete(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete from DB
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            // Delete from UI
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    }

    return (
        <div className="flex items-center p-6 gap-4 bg-[#F5F4F1]" >
            <div className="flex-1">
                <img className="h-60 object-cover" src={photo} alt="" />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-gray-600"><span className="font-semibold text-black">Name: </span>{name}</h3>
                <h3 className="text-gray-600"><span className="font-semibold text-black">Taste: </span>{taste}</h3>
                <h3 className="text-gray-600"><span className="font-semibold text-black">Price: </span>{price}</h3>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={`/coffeeDetails/${_id}`}
                    className="bg-[#d28c8c] p-3 btn rounded-md text-xl text-white"><BsEye /></Link>
                <Link to={`/updateCoffee/${_id}`}
                    className="bg-[#3C393B] p-3 btn rounded-md text-xl text-white"><BiEditAlt /></Link>
                <p onClick={() => handleCoffeeDelete(_id)}
                    className="bg-[#EA4744] p-3 btn rounded-md text-xl text-white"><MdDelete /></p>
            </div>
        </div >
    );
};

export default CoffeeCard;