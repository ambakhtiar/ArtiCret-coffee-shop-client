import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/404/404.gif";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 my-4">
            <Link className="btn" to={'/'}><span><BiArrowBack /></span>Back to Home</Link>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;