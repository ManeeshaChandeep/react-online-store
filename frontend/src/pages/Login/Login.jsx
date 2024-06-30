import React, {useState} from 'react';
import '../../tailwind.css';
import request from "../../utils/request";
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({

        email: '',
        password: ''
    });

    // const [isOpen, setIsOpen] = useState(false);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        const obj = {
            mail: inputs.email,
            password: inputs.password
        }


        await request('POST', 'users/login', obj).then(r => {
            console.log(r)
            if (r.success) {
                sessionStorage.setItem('user',JSON.stringify(r.data));
                navigate('/home')
            }

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
                        {/*Sign in to your account*/}
                        Log In
                    </h2>

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


                    <div className="space-y-6">
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
                                    <span  className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                                Log In
                            </button>
                        </div>
                    </div>


                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <span  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;



