import React from "react";
import {Routes,Route}from "react-router";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Contact from "./component/Contact";

const App=()=>{
    return(
        <section>
            <Navigation/>
             <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/About" element ={<About/>}/>
                <Route path="/Product" element ={<Product/>}/>
                <Route path="/Contact" element ={<Contact/>}/>
            </Routes>
        </section>
    )

}
export default App;
