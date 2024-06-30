import React, { useState } from 'react';
import '../../tailwind.css';
import ReactDOM from 'react-dom/client';
import request from "../../utils/request";
import {useNavigate} from 'react-router-dom'


const Signin = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username:'',
        email: '',
        password:''
    });

    // const [isOpen, setIsOpen] = useState(false);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs);

        const obj = {
            email: inputs.email,
            password: inputs.password,
            username:inputs.username
        }

        request('POST', 'users/register',obj).then(r => {
            console.log(r)
            navigate('/login')
        })


    }


    return (

        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <img
                        className="mx-auto h-10 w-auto"
                    />

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name="username"
                                    type="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name="email"
                                    type="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"


                                    name="password"
                                    type="password"
                                    value={inputs.password || ""}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>




                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Signin;



