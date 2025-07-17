import { useContext, useEffect, useState } from "react";
import bgImg from "../assets/images/more/17.jpg"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, setUser, userUpdateInfo } = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);

    const handleUpdateInfo = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = user.email;

        if (user.displayName !== name || user.photoURL !== photo) {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    userUpdateInfo({ displayName: name, photoURL: photo })
                        .then(() => {
                            // console.log(user);
                            setUser({
                                ...user,
                                displayName: name,
                                photoURL: photo,
                            });

                            const userInfo = { email, name, photo };
                            // console.log(userInfo);
                            fetch('http://localhost:5000/users/profile', {
                                method: 'PATCH',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    // console.log(data);
                                    if (data.modifiedCount > 0) {
                                        Swal.fire("Saved!", "", "success");
                                    }
                                })
                        })
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`h-14 w-full flex justify-center items-center`}
                style={{ backgroundImage: `url(${bgImg})` }}>
                <h2 className="text-center text-white tracking-widest font-bold text-2xl">Profile</h2>
            </div>
            <div className="mt-4 space-y-2">
                <div className="flex justify-center">
                    <img className="w-36 h-36 object-cover rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="flex">
                    <span className="text-gray-600 w-28 text-left">Name: </span>
                    <h2 className="font-bold">{user?.displayName}</h2>
                </div>
                <div className="flex">
                    <span className="text-gray-600 w-28 text-left">Account Create: </span>
                    <h2>{user?.metadata?.creationTime}</h2>
                </div>
                <div className="flex">
                    <span className="text-gray-600 w-28 text-left">Last Sign In: </span>
                    <h2>{user?.metadata?.lastSignInTime}</h2>
                </div>

                <form onSubmit={handleUpdateInfo} className={`space-y-4 mb-4 ${showForm ? "block" : "hidden"}`}>
                    <div className="flex items-center gap-2">
                        <span className="w-28">Name:</span>
                        <input type="text" name="name" placeholder="name" className="h-10 border p-2" defaultValue={user.displayName} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-28">Photo URL</span>
                        <input type="text" name="photo" placeholder="photo url" className="h-10 border p-2" defaultValue={user.photoURL} />
                    </div>
                    <input onClick={() => setShowForm(!showForm)} className="w-full btn bg-[#372727] text-white tracking-widest" type="submit" value="Save" />
                </form>
                <button onClick={() => setShowForm(!showForm)} className={`${showForm ? "hidden" : "block"} w-full btn bg-[#372727] text-white tracking-widest`}>
                    {showForm ? <span>Save Update Info</span> : <span>Change Profile Info</span>}
                </button>
            </div>
        </div >
    );
};

export default Profile;