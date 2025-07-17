import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { userLogin, setUser, user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        setError([]);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(data => {
                // console.log(data.user);
                setUser(data.user);

                const singInInfo = {
                    email,
                    lastSignInTime: data?.user?.metadata?.lastSignInTime
                }

                fetch('https://coffee-store-server-one-kappa.vercel.app/users/signin', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(singInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                    })

                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                // console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error);
            });
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#331A15] my-4">Login Now!</h1>
            <form onSubmit={handleLogin} className="space-y-4 mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-14">Email</span>
                    <input type="text" name="email" placeholder="email" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-14">password</span>
                    <input type="password" name="password" placeholder="password" className="h-10 w-40 md:w-64 border p-2" required />
                </div>
                <input className="btn w-full bg-[#372727] text-white tracking-widest" type="submit" value="Log in" />
            </form>
            <button className="btn btn-outline"><FcGoogle /> Login with Google</button>

            {error && <p className="text-red-600 text-left my-2">{error.code}</p>}
            <p className="text-center my-4">If you haven't acoount, <Link to={'/auth/register'} className="text-blue-700">Register now</Link></p>
        </div>
    );
};

export default Login;