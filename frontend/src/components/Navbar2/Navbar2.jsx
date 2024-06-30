import React, {useEffect, useState} from "react";
import '../../tailwind.css';
import {Link} from "react-router-dom";



const Navbar2 = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        let item = sessionStorage.getItem('user');
        sessionStorage.setItem('cart-zigzag',JSON.stringify([]));
        setUser(JSON.parse(item))
    }, []);

    return (

        <div className={""}>

            <div className="bg-white " >
                <nav className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <span className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/*<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />*/}
                        </span>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">

                        <Link to={'/products'} className="text-sm font-semibold leading-6 text-gray-900">Product</Link>
                        <Link to={'/home'} className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
                        <Link to={'/tshirts'} className="text-sm font-semibold leading-6 text-gray-900">Tshirts</Link>
                        {user && user.accountType === 'admin' ?
                            <>
                                {/*<Link to={'/itemform'} className="text-sm font-semibold leading-6 text-gray-900">ItemForm</Link>*/}
                                <Link to={'/itemdetails'} className="text-sm font-semibold leading-6 text-gray-900">ItemDetails</Link>
                                {/*<Link to={'/itemedit'} className="text-sm font-semibold leading-6 text-gray-900">Item Edit</Link>*/}
                            </>
                            : ''}

                        <span  className="text-sm font-semibold leading-6 text-gray-900">Companyll</span>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/*<span  className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></span>*/}
                    </div>
                </nav>
            </div>


        </div>
);
};

export default Navbar2;
