import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Coffees from "./Coffees";
import { useRef } from "react";

const Home = () => {
    const coffeesRef = useRef();

    const scrollToCoffees = () => {
        if (coffeesRef.current) {
            coffeesRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div>
            <section>
                <Banner scrollToCoffees={scrollToCoffees}></Banner>
                <Feature></Feature>
            </section>
            <section ref={coffeesRef}>
                <Coffees></Coffees>
            </section>
        </div>
    );
};

export default Home;