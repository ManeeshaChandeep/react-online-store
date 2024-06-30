import React, {useEffect, useState} from 'react';
import '../../tailwind.css';
import ReactDOM from 'react-dom/client';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";
import request from "../../utils/request";
import {useNavigate} from 'react-router-dom'


const Itemdetails = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const loadAllProducts = async () => {
        await request('GET', 'products/all').then(r => {
            console.log(r)
            if (r.success) {
                setData(r.data)
            }

        })
    }

    const updateProduct = (product) => {
        console.log(product)
        navigate('/itemedit' ,{ state: { data: product } })
    }

    const deleteProduct = async (product) => {
        console.log(product)

        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this item?");
        if (result === true) {

            await request('DELETE', `products/remove/${product.sku}`).then(r => {
                console.log(r)
                if (r.success) {
                    loadAllProducts();
                }
            })

        } else {
            console.log("Deletion cancelled");
        }
    }

    useEffect(() => {

        loadAllProducts();

    }, []);

    return (

       <div>
        <Navbar/>
        <Navbar2/>

           {/*<fieldset>
               <legend className="text-sm font-semibold leading-6 text-gray-900">Select Catogery</legend>
               <div className="mt-6 space-y-6">
                   <div className="relative flex gap-x-3">
                       <div className="flex h-6 items-center">
                           <input
                               id="comments"
                               name="comments"
                               type="checkbox"
                               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                       </div>
                       <div className="text-sm leading-6">
                           <label htmlFor="comments" className="font-medium text-gray-900">
                               Comments
                           </label>

                       </div>
                   </div>
                   <div className="relative flex gap-x-3">
                       <div className="flex h-6 items-center">
                           <input
                               id="candidates"
                               name="candidates"
                               type="checkbox"
                               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                       </div>
                       <div className="text-sm leading-6">
                           <label htmlFor="candidates" className="font-medium text-gray-900">
                               Candidates
                           </label>

                       </div>
                   </div>
                   <div className="relative flex gap-x-3">
                       <div className="flex h-6 items-center">
                           <input
                               id="offers"
                               name="offers"
                               type="checkbox"
                               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                       </div>
                       <div className="text-sm leading-6">
                           <label htmlFor="offers" className="font-medium text-gray-900">
                               Offers
                           </label>

                       </div>
                   </div>
               </div>
           </fieldset>*/}

           <div className={'flex justify-content-end pl-2'}>
               <button className={'ms-5 px-2 py-1 bg-blue-500 rounded-2 text-white'} onClick={()=>navigate('/itemform')}>+ Add Product</button>
           </div>

           <div className="flex flex-col">
               <div className="overflow-x-auto">
                   <div className="inline-block min-w-full py-2 align-middle">
                       <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                           <table className="min-w-full divide-y divide-gray-300">
                               <thead className="bg-gray-50">
                               <tr className={'d-flex'}>
                                   <th
                                       scope="col"
                                       className="w-[25%] text-center py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                                   >
                                       SKU
                                   </th>
                                   <th
                                       scope="col"
                                       className="w-[25%] text-center py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                                   >
                                       Title
                                   </th>{/*
                                   <th
                                       scope="col"
                                       className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                                   >
                                       QTY
                                   </th>*/}
                                   <th
                                       scope="col"
                                       className="w-[25%] text-center py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                                   >
                                       Email
                                   </th>
                                   <th
                                       scope="col"
                                       className="w-[25%] text-center py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                                   >
                                       Actions
                                   </th>
                               </tr>
                               </thead>
                               <tbody className="divide-y divide-gray-200 bg-white">
                               {data && data.map((product) => (
                                   <tr key={product.sku}>
                                       <td className="w-[25%] text-center whitespace-nowrap py-4 px-4 text-sm text-gray-500">{product.sku}</td>
                                       <td className="w-[25%] text-center whitespace-nowrap py-4 px-4 text-sm text-gray-500">{product.title}</td>
                                       {/*<td className="whitespace-nowrap py-4 px-4 text-sm text-gray-500">{person.count}</td>*/}
                                       <td className="w-[25%] text-center whitespace-nowrap py-4 px-4 text-sm text-gray-500">{product.price}</td>
                                       <td className="w-[25%] text-center whitespace-nowrap py-4 px-4 text-sm text-gray-500">
                                           <button onClick={()=> updateProduct(product)} className="mr-2 rounded bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600">
                                               Update
                                           </button>
                                           <button onClick={()=> deleteProduct(product)}  className="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600">
                                               Delete
                                           </button>
                                       </td>
                                   </tr>
                               ))}
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
           </div>


       </div>
    );
};

export default Itemdetails;

