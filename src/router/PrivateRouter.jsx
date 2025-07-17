import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
        </div>
    );
};

export default PrivateRouter;