import React, {useEffect, useState} from 'react';
import '../../tailwind.css';
import {useNavigate} from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState('');


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let item = sessionStorage.getItem('user');
        setUser(JSON.parse(item))
    }, []);

    const openCart = () => {
        if (user) {
            props.setIsOpen(true)
        } else {
            alert('Please login first')
        }
    }

    return (
       <div>
           <nav className="bg-white border-gray-800 dark:bg-gray-900 py-2">
               <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                   <span href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                       {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />*/}
                       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ZigZag</span>
                   </span>
                   <button
                       data-collapse-toggle="navbar-default"
                       type="button"
                       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                       aria-controls="navbar-default">
                       <span className="sr-only">Open main menu</span>
                       <svg
                           className="w-5 h-5"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 17 14"
                       >
                           <path
                               stroke="currentColor"
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth="2"
                               d="M1 1h15M1 7h15M1 13h15"
                           />
                       </svg>
                   </button>
                   <div id="navbar-default">
                       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                           <li>
                               {/*<a*/}
                               {/*    href="#"*/}
                               {/*    className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"*/}
                               {/*>*/}
                               {/*    Signup*/}
                               {/*</a>*/}

                               {!user? <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                   <button onClick={()=> navigate('/login')} className="text-lg font-medium  text-gray-700 hover:text-gray-800">Login</button>
                                   <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                   {/*<a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-800">Signup</a>*/}
                                   <button onClick={()=> navigate('/signin')} className="text-lg font-medium  text-gray-700 hover:text-gray-800">Signup</button>

                               </div> : null}
                           </li>

                           {/*<div className="hidden lg:ml-8 lg:flex">*/}
                           {/*    <span  className="flex items-center text-gray-700 hover:text-gray-800">*/}
                           {/*        <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="Canada flag" className="block h-auto w-5 flex-shrink-0" />*/}
                           {/*        <span className="ml-3 block text-sm font-medium">CAD</span>*/}
                           {/*        <span className="sr-only">, change currency</span>*/}
                           {/*    </span>*/}
                           {/*</div>*/}

                           <div>
                               <div className="ml-4 flow-root lg:ml-6">
                                   <span className="group -m-2 flex items-center p-2" onClick={openCart}>
                                       <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                       </svg>
                                       <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                       <span className="sr-only">items in cart, view bag</span>
                                   </span>
                               </div>
                           </div>
                       </ul>
                   </div>
               </div>
           </nav>




                   </div>


    );
};

export default Navbar;
