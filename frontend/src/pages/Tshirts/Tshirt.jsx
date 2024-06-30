import React, { useState } from 'react';
import '../../tailwind.css';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Productlist from "../../components/Productlist/Productlist";
import Productlist2 from "../../components/Productlist2/Productlist2";
const TshirtPage = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (


<div>

    <Navbar/>
    <Navbar2/>
    <Productlist2/>
</div>




    );
};

export default TshirtPage;
