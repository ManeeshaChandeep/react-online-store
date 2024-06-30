import React, { useState } from 'react';
import '../../tailwind.css';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useLocation } from 'react-router-dom';
import Shoppingcart from "../Shoppingcart/Shoppingcart";

const Productoverview = () => {

    const location = useLocation();

    const { data } = location.state;

    const [isOpen, setIsOpen] = useState(false);


    const addToCart = () => {
        let item = localStorage.getItem('cart-zigzag');
        if (item) {
            localStorage.removeItem('cart-zigzag');
            let cartArr = JSON.parse(item);

            const itemExists = cartArr.some(item => item.sku === data.sku);
            console.log(itemExists)
            if (!itemExists) {
                cartArr.push({sku:data.sku,});
            } else {
                console.log(`Item with sku already exists in the cart.`);
            }

            localStorage.setItem('cart-zigzag',JSON.stringify(cartArr))
        } else {
            let cartArr = [];

            const itemExists = cartArr.some(item => item.sku === data.sku);
            console.log(itemExists)
            if (!itemExists) {
                cartArr.push({sku:data.sku,});
            } else {
                console.log(`Item with sku already exists in the cart.`);
            }

            localStorage.setItem('cart-zigzag',JSON.stringify(cartArr))
        }
    }

    return (

        <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Navbar2/>

            <div>
                <Shoppingcart isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <span  className="mr-2 text-sm font-medium text-gray-900">Men</span>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className="mr-2 text-sm font-medium text-gray-900">Clothing</span>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <span aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</span>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src={data.image1} alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img  src={data.image2} alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src={data.image3} alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src={data.image4} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">RS. {data.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {/* Active: "text-gray-900", Default: "text-gray-200" */}
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="sr-only">4 out of 5 stars</p>
                                <span  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</span>
                            </div>
                        </div>

                        <form className="mt-10" >
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <div className="flex items-center space-x-3">
                                        {['White', 'Gray', 'Black'].map((color) => (
                                            <label key={color} aria-label={color} className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none `}>
                                                <input type="radio" name="color-choice" value={color} className="sr-only"  />
                                                <span aria-hidden="true" className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${color.toLowerCase()}`}></span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <span  className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</span>
                                </div>

                                <fieldset className="mt-4">
                                    <legend className="sr-only">Choose a size</legend>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                                            <label key={size} className={`group relative flex cursor-pointer items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 `}>
                                                <input type="radio" name="size-choice" value={size} className="sr-only" disabled={size === 'XS' || size === 'XXS'} />
                                                <span>{size}</span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            <button onClick={addToCart} type="button" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a classic? White. Need a touch of sophistication? Black.</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Pre-washed & pre-shrunk</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray t-shirts. Each shirt is crafted with care and attention to detail, ensuring you always look your best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>



    // <div className="bg-white">
    //     <div className="pt-6">
    //         <nav aria-label="Breadcrumb">
    //             <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    //                 <li>
    //                     <div className="flex items-center">
    //                         <a href="#" className="mr-2 text-sm font-medium text-gray-900">Men</a>
    //                         <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
    //                             <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
    //                         </svg>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div className="flex items-center">
    //                         <a href="#" className="mr-2 text-sm font-medium text-gray-900">Clothing</a>
    //                         <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
    //                             <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
    //                         </svg>
    //                     </div>
    //                 </li>
    //                 <li className="text-sm">
    //                     <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
    //                 </li>
    //             </ol>
    //         </nav>
    //
    //         {/* Image gallery */}
    //         <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    //             <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
    //                 <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
    //             </div>
    //             <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    //                 <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //                     <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
    //                 </div>
    //                 <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //                     <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
    //                 </div>
    //             </div>
    //             <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
    //                 <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
    //             </div>
    //         </div>
    //
    //         {/* Product info */}
    //         <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    //             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //                 <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
    //             </div>
    //
    //             {/* Options */}
    //             <div className="mt-4 lg:row-span-3 lg:mt-0">
    //                 <h2 className="sr-only">Product information</h2>
    //                 <p className="text-3xl tracking-tight text-gray-900">$192</p>
    //
    //                 {/* Reviews */}
    //                 <div className="mt-6">
    //                     <h3 className="sr-only">Reviews</h3>
    //                     <div className="flex items-center">
    //                         <div className="flex items-center">
    //                             {/* Active: "text-gray-900", Default: "text-gray-200" */}
    //                             {[...Array(4)].map((_, i) => (
    //                                 <svg key={i} className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                                     <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    //                                 </svg>
    //                             ))}
    //                             <svg className="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                                 <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <p className="sr-only">4 out of 5 stars</p>
    //                         <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
    //                     </div>
    //                 </div>
    //
    //                 <form className="mt-10" onSubmit={handleSubmit}>
    //                     {/* Colors */}
    //                     <div>
    //                         <h3 className="text-sm font-medium text-gray-900">Color</h3>
    //
    //                         <fieldset aria-label="Choose a color" className="mt-4">
    //                             <div className="flex items-center space-x-3">
    //                                 {['White', 'Gray', 'Black'].map((color) => (
    //                                     <label key={color} aria-label={color} className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none ${selectedColor === color ? 'ring ring-offset-1' : 'ring-2'}`}>
    //                                         <input type="radio" name="color-choice" value={color} className="sr-only" checked={selectedColor === color} onChange={handleColorChange} />
    //                                         <span aria-hidden="true" className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${color.toLowerCase()}`}></span>
    //                                     </label>
    //                                 ))}
    //                             </div>
    //                         </fieldset>
    //                     </div>
    //
    //                     {/* Sizes */}
    //                     <div className="mt-10">
    //                         <div className="flex items-center justify-between">
    //                             <h3 className="text-sm font-medium text-gray-900">Size</h3>
    //                             <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
    //                         </div>
    //
    //                         <fieldset className="mt-4">
    //                             <legend className="sr-only">Choose a size</legend>
    //                             <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
    //                                 {['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
    //                                     <label key={size} className={`group relative flex cursor-pointer items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 ${selectedSize === size ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'} ${size === 'XS' || size === 'XXS' ? 'cursor-not-allowed bg-gray-50 text-gray-200' : ''}`}>
    //                                         <input type="radio" name="size-choice" value={size} className="sr-only" checked={selectedSize === size} onChange={handleSizeChange} disabled={size === 'XS' || size === 'XXS'} />
    //                                         <span>{size}</span>
    //                                     </label>
    //                                 ))}
    //                             </div>
    //                         </fieldset>
    //                     </div>
    //
    //                     <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
    //                 </form>
    //             </div>
    //
    //             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
    //                 {/* Description and details */}
    //                 <div>
    //                     <h3 className="sr-only">Description</h3>
    //                     <div className="space-y-6">
    //                         <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a classic? White. Need a touch of sophistication? Black.</p>
    //                     </div>
    //                 </div>
    //
    //                 <div className="mt-10">
    //                     <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
    //
    //                     <div className="mt-4">
    //                         <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
    //                             <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
    //                             <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
    //                             <li className="text-gray-400"><span className="text-gray-600">Pre-washed & pre-shrunk</span></li>
    //                             <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //
    //                 <div className="mt-10">
    //                     <h2 className="text-sm font-medium text-gray-900">Details</h2>
    //
    //                     <div className="mt-4 space-y-6">
    //                         <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray t-shirts. Each shirt is crafted with care and attention to detail, ensuring you always look your best.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>




);
};

export default Productoverview;




















