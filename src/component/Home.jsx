import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import Our from "./Our";
import House from "./House";
import Customers from "./Customers";
import Brand from "./Brand";
import Footer from "./Footer";

const Home=()=>{
    return(
        <section>
            <Hero/>
            <Featured/>
            <Our/>
            <House/>
            <Customers/>
            <Brand/>
            <Footer/>
        </section>
    )
}

export default Home;