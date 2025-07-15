import { ClockLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <ClockLoader
                color="#372727"
                cssOverride={{}}
                size={100}
                speedMultiplier={2}
            />
        </div>
    );
};

export default Loading;