import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeatureRoom from "../component/Featureroom";

function Home() {
    return (
        <>
            <Hero hero="defaultHero">

                <Banner title="luxurious rooms" subtitle="delux rooms starting at $ 299">
                    <Link to="rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeatureRoom/>
        </>
    )
}
export default Home;