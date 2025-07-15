import featureImg1 from "../assets/images/icons/1.png";
import featureImg2 from "../assets/images/icons/2.png";
import featureImg3 from "../assets/images/icons/3.png";
import featureImg4 from "../assets/images/icons/4.png";

const Feature = () => {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-7 lg:py-14 w-3/4 mx-auto">
                <div className="">
                    <img className="w-8 h-8 md:w-16 md:h-16 object-contain" src={featureImg1} alt="" />
                    <h3 className="font-Rancho text-xl md:text-3xl font-semibold mt-2 md:mt-4">Awesome Aroma</h3>
                    <p className="font-Raleway mt-2">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="">
                    <img className="w-8 h-8 md:w-16 md:h-16 object-contain" src={featureImg2} alt="" />
                    <h3 className="font-Rancho text-xl md:text-3xl font-semibold mt-2 md:mt-4">High Quality</h3>
                    <p className="font-Raleway mt-2">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="">
                    <img className="w-8 h-8 md:w-16 md:h-16 object-contain" src={featureImg3} alt="" />
                    <h3 className="font-Rancho text-xl md:text-3xl font-semibold mt-2 md:mt-4">Pure Grades</h3>
                    <p className="font-Raleway mt-2">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="">
                    <img className="w-8 h-8 md:w-16 md:h-16 object-contain" src={featureImg4} alt="" />
                    <h3 className="font-Rancho text-xl md:text-3xl font-semibold mt-2 md:mt-4">Proper Roasting</h3>
                    <p className="font-Raleway mt-2">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;