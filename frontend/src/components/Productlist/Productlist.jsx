import React, {useEffect, useState} from 'react';
import '../../tailwind.css';
import { useNavigate } from 'react-router-dom'
import request from "../../utils/request";
const Productlist = () => {

    const navigate = useNavigate();

    const handleClick = (product) => {

        navigate('/overview', { state: { data: product } });
    };

    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState();

    const loadAllProducts = async () => {
        await request('GET', 'products/all').then(r => {
            console.log(r)
            if (r.success) {
                setData(r.data)
            }

        })
    }

    useEffect(() => {

        loadAllProducts();

    }, []);


    return (

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


                    {data && data.slice(0, 4).map((product, index) => (
                        <div onClick={()=>handleClick(product)} className="group relative" >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.image1}
                                    alt="Front of men's Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a>
                                            {product.title}
                                        </a>
                                    </h3>
                                    {/*<p className="mt-1 text-sm text-gray-500">Black</p>*/}
                                </div>
                                <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
                            </div>
                        </div>
                    ))}

                    {/* More products... */}
                </div>
            </div>
        </div>

    );
};

export default Productlist;
