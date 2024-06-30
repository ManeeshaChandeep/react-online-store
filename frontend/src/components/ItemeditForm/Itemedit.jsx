import React, {useEffect, useState} from 'react';
import '../../tailwind.css';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";
import {useNavigate} from 'react-router-dom'
import request from "../../utils/request";
import { useLocation } from 'react-router-dom';

const Itemeditform = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const { data } = location.state;

    const [inputs, setInputs] = useState({
        title: data.title,
        price: data.price,
        description: data.description
    });


    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

    }

    useEffect(() => {
        setInputs({
            title: data.title,
            price: data.price,
            description: data.description
        })
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (inputs.title.trim() === '') {
            //title cannot be empty

        } else if (inputs.price.trim() === '') {

        } else if (inputs.description.trim() === ''){

        } else {
            const obj = {
                sku: data.sku,
                title: inputs.title,
                price: inputs.price,
                description: inputs.description
            }


            await request('POST', 'products/update', obj).then(r => {
                console.log(r)
                if (r.success) {
                    navigate('/itemdetails')
                }

            })
        }

    }


    return (

        <div>
            <Navbar/>
            <Navbar2/>


            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    title
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                        <input
                                            type="text"
                                            name="title"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="title"
                                            value={inputs.title || ""}
                                            onChange={handleChange}
                                        />

                                    </div>
                                </div>
                            </div>




                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                        <input
                                            type="text"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="price"
                                            name="price"
                                            value={inputs.price || ""}
                                            onChange={handleChange}
                                        />

                                    </div>
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="description"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="3"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={inputs.description || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>


        </div>

    );
};

export default Itemeditform;
