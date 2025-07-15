import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer, Zoom } from "react-toastify";

const Register = () => {
    const { createNewUser, setUser, userUpdateInfo } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        setError([]);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then(data => {
                setUser(data.user);
                navigate('/');
                userUpdateInfo({ displayName: name, photoURL: photo })
                    .then(() => {
                        console.log(data.user);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error);
            });
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#331A15] my-4">Register !</h1>
            <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="w-14">Name</span>
                    <input type="text" name="name" placeholder="name" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-14">Email</span>
                    <input type="text" name="email" placeholder="email" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-14">Photo URL</span>
                    <input type="text" name="photo" placeholder="photo url" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-14">password</span>
                    <input type="password" name="password" placeholder="password" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <input className="btn w-full bg-[#372727] text-white tracking-widest" type="submit" value="Register" />
            </form>
            {error && <p className="text-red-600 text-left my-2">{error.code}</p>}
            <p className=" my-4">If you have acoount, <Link to={'/auth/login'} className="text-blue-700">Register</Link></p>
        </div>
    );
};

export default Register;