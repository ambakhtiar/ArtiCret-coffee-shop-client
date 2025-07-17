import { Link, useLocation } from "react-router-dom";
import navbarImage from "../assets/images/more/15.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { ClipLoader } from "react-spinners";

const NavBar = () => {
    const location = useLocation();
    const { user, loading, userLogOut } = useContext(AuthContext);

    const handleLogout = () => {
        userLogOut();
    }

    return (
        <div className="font-Bilbo w-full h-10 md:h-16 bg-cover flex items-center"
            style={{ backgroundImage: `url(${navbarImage})` }}>
            <div className="flex items-center justify-between w-3/4 mx-auto">
                <Link to={'/'} className="text-white text-2xl md:text-4xl text-center ">ArtiCret Coffee Shop</Link>
                {
                    user ?
                        <div className="dropdown dropdown-end font-sans tracking-tighter">
                            <div tabIndex={0} role="button" className="">
                                {user.photoURL ? <img className="w-8 h-8 md:w-10 md:h-10 rounded-full" src={user.photoURL} alt="profile photo" /> :
                                    <CgProfile className="w-8 h-8 md:w-10 md:h-10 text-white" />}
                            </div>
                            <ul tabIndex={0} className="dropdown-content top-8 md:top-12 menu bg-base-100 rounded-box z-[1]  w-24">
                                <Link to={'/profile'} className="btn flex justify-end">Profile</Link>
                                <button onClick={handleLogout} className="btn flex justify-end">Log Out</button>
                            </ul>
                        </div> :
                        < Link to={'/auth/login'}
                            className={`${location?.pathname ===
                                "/auth/login" ? "hidden" :
                                "text-left font-sans text-white btn shadow-none bg-transparent"}`}
                        >Login</Link>
                }
            </div>
        </div >
    );
};

export default NavBar;
