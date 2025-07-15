import { BsReddit, BsWechat } from "react-icons/bs";
import footerImg1 from "../assets/images/more/13.jpg";
import footerImg2 from "../assets/images/more/24.jpg";
import logo from "../assets/images/more/logo1.png";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="font-Raleway">
            <section style={{ backgroundImage: `url(${footerImg1})` }}>
                <div className="w-3/4 mx-auto pt-32 pb-10">
                    <img className="w-24 h-24 object-contain mb-6" src={logo} alt="" />
                    <div className="footer text-base-content flex flex-col md:flex-row justify-between">
                        <nav>
                            <h3 className="text-[#331A15] font-Rancho text-3xl">ArtiCret Coffee Shop</h3>
                            <p className="w-3/4">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="flex gap-4">
                                <a href="https://www.wechat.com/" target="_blank" className="link link-hover text-2xl text-[#331A15]"><BsWechat /> </a>
                                <a href="https://web.telegram.org/" target="_blank" className="link link-hover text-2xl text-[#331A15]"><FaTelegram /></a>
                                <a href="https://www.reddit.com/" target="_blank" className="link link-hover text-2xl text-[#331A15]"><BsReddit /> </a>
                                <a href="https://discord.com/" target="_blank" className="link link-hover text-2xl text-[#331A15]"><FaDiscord /></a>
                            </div>
                            <div className="mt-8 space-y-2">
                                <h3 className="text-[#331A15] font-Rancho text-3xl">Get in Touch</h3>
                                <div className="flex items-start">
                                    <span className="w-6"><IoCall /></span>
                                    <span>+8801511223344</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-6"><MdEmail /></span>
                                    <span>info@articret.com</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-6"><FaLocationDot /></span>
                                    <span>Bangla Bazar, Matarbari, Moheshkhali</span>
                                </div>
                            </div>
                        </nav>

                        <form>
                            <h6 className="font-Rancho text-[#331A15] text-3xl">Connect with Us</h6>
                            <fieldset className="form-control w-80">
                                <div className="space-y-4 font-mono">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="input input-bordered rounded-md" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered rounded-md" />
                                    <textarea
                                        placeholder="Enter your message..."
                                        className="rounded-md h-32 p-4 text-left align-top resize-none overflow-y-auto placeholder:text-left placeholder:align-top"
                                    ></textarea>
                                    <button className="btn border border-black rounded-md">Send Message</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>

            <section className="footer footer-center text-base-content p-4"
                style={{ backgroundImage: `url(${footerImg2})` }}>
                <aside>
                    <p className="font-Rancho text-lg md:text-xl text-white ">Copyright © {new Date().getFullYear()} - Espresso Emporium ! All Rights Reserved</p>
                </aside>
            </section>
        </footer>
    );
};

export default Footer;