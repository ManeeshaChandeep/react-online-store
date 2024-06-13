import React, { useState }from "react";
import '../../tailwind.css';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../Navbar2/Navbar2";
import Banner from "../../components/Banner/Banner";
import Productrange from "../../components/Productrange/Productrange";
import Productlist from "../../components/Productlist/Productlist";
import Stats from "../../components/Stats/Stats";
import Shoppingcart from "../../components/Shoppingcart/Shoppingcart";


const Homepage = () => {

    return (
                <div>

                    <Navbar/>

                <div>
                     <Banner/>
                </div>

                 <div>
                     <Productrange/>
                 </div>

                 <div>
                     <Productlist/>
                 </div>

                 <div> <Stats/>
                 </div>

                 <div>
                     <Shoppingcart/>
                 </div>


             </div>



    );
};

export default Homepage;
