import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer, Zoom } from "react-toastify";

const Register = () => {
    const [error, setError] = useState([]);
    const { createNewUser, setUser, userUpdateInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [validationList, setValidationList] = useState(false);

    const check = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        special: /[!@#$%^&*(),.?":{}|<>]/,
    };

    const validationStatus = {
        uppercase: check.uppercase.test(password),
        lowercase: check.lowercase.test(password),
        number: check.number.test(password),
        special: check.special.test(password),
        sixDigit: password.length >= 6
    }

    const getClass = (condition) =>
        `flex items-center gap-2 text-sm ${condition ? "text-green-600" : "text-red-600"
        }`;

    const handleRegister = e => {
        e.preventDefault();
        setError([]);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        // const password = form.password.value;

        if (!validationStatus.uppercase || !validationStatus.lowercase || !validationStatus.number || !validationStatus.special || !validationStatus.sixDigit) {
            setError({ code: "Password does not meet all criteria" });
            return;
        }

        createNewUser(email, password)
            .then(data => {
                userUpdateInfo({ displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log(data.user);
                        setUser(data.user);
                        navigate('/');

                        const userProfile = {
                            name, email, photo,
                            creationTime: data?.user?.metadata?.creationTime,
                            lastSignInTime: data?.user?.metadata?.lastSignInTime
                        }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userProfile)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);
                            })
                    })
                    .catch(error => {
                        // console.log(error);
                    })
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

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="w-14">password</span>
                        <input onChange={(e) => { setPassword(e.target.value); setValidationList(true) }}
                            type="password" name="password" placeholder="password" className="h-10 w-40 md:w-64 border p-2" required />
                    </div>
                    <div className={`${validationList ? "block" : "hidden"} space-y-1 mt-2 ml-16`}>
                        <p className={getClass(validationStatus.uppercase)}>
                            {validationStatus.uppercase ? "✔" : "✖"} At least one Uppercase letter</p>
                        <p className={getClass(validationStatus.lowercase)}>
                            {validationStatus.lowercase ? "✔" : "✖"} At least one Lowercase letter</p>
                        <p className={getClass(validationStatus.number)}>
                            {validationStatus.number ? "✔" : "✖"} At least one Number</p>
                        <p className={getClass(validationStatus.special)}>
                            {validationStatus.special ? "✔" : "✖"} At least one Special character: [!@#$%^&*(),.?":{ }|<></>]</p>
                        <p className={getClass(validationStatus.sixDigit)}>
                            {validationStatus.sixDigit ? "✔" : "✖"} At least Six Digit</p>
                    </div>
                </div>

                <input className="btn w-full bg-[#372727] text-white tracking-widest" type="submit" value="Register" />
            </form>
            {error && <p className="text-red-600 text-left my-2">{error.code}</p>}
            <p className=" my-4">If you have acoount, <Link to={'/auth/login'} className="text-blue-700">Register</Link></p>
        </div>
    );
};

export default Register;