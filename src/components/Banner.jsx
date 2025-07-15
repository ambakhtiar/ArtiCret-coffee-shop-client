import bannerImage from "../assets/images/more/3.png";

const Banner = ({ scrollToCoffees }) => {
    return (
        <div className="w-full relative">
            <img className="object-cover w-full" src={bannerImage} alt="" />
            <div className="absolute text-white top-2 md:top-1/4 lg:top-1/3 left-1/2 space-y-1 md:space-y-4 lg:space-y-8 pr-2 md:pr-8">
                <h2 className="font-Rancho text-xl md:text-3xl lg:text-4xl">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-Raleway text-sm md:text-xl">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button onClick={scrollToCoffees}
                    className="font-Rancho py-0.5 md:py-3 px-2 md:px-3 text-black text-sm md:text-xl bg-[#E3B577] hover:bg-white">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;