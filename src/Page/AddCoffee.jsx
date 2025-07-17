import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddCoffee = () => {
    const { user } = useContext(AuthContext);

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        newCoffee.email = user.email;
        // console.log(newCoffee);

        // send coffee data to the db
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Succesfully",
                        text: "Add Coffee !",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className='w-3/4 mx-auto '>
            <Link to={'/'}>
                <button className="flex items-center p-3 gap-2 rounded-md hover:bg-[#D2B48C] my-4">
                    <span><BiArrowBack /></span>
                    <span>Back to Home</span>
                </button>
            </Link>
            <div className="bg-[#F4F3F0] rounded-lg pb-16">
                <div className='py-6 text-center space-y-4'>
                    <h1 className="text-4xl md:text-6xl">Add Coffee</h1>
                    <p className="md:text-xl w-3/4 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee} className="font-mono md:w-3/4 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Coffee Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Taste</label>
                            <input type="text" name='taste' className="input w-full" placeholder="Taste Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Price</label>
                            <input type="text" name='price' className="input w-full" placeholder="Price per Cup" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Details</label>
                            <input type="text" name='details' className="input w-full" placeholder="Details Name" required />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" required />
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Add Coffee" />
                </form>
            </div>
        </div >
    );
};

export default AddCoffee;