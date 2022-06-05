import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart';

const Purchase = ({ tool }) => {

    const { id } = useParams()
    const [purchase, setPurchase] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    const handleAddToCart = (tool) => {
        console.log(tool);
        const newCart = [...cart, tool]
        setCart(newCart)
    }


    return (
        <div className='flex'>
            <div
                className="block w-screen max-w-sm p-10 border sm:px-12 bg-stone-100 border-stone-600"
                aria-modal="true"
                aria-label="Item added to your cart"
                role="dialog"
                tabindex="-1"
            >
                <div className="flex items-start justify-between">
                    <h2 className="flex items-center text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>

                        <span className="ml-2 text-sm"> Item added to your cart </span>
                    </h2>

                    <button
                        className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
                        type="button"
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex items-start pt-8 pb-12">
                    <img
                        className="object-cover w-16 h-16 rounded-lg"
                        src={purchase.img}
                        alt="Basic Tee"
                    />

                    <div className="ml-4">
                        <h3 className="text-sm">{purchase.name}</h3>

                        <dl className="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">XXS</dd>
                            </div>

                            <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">White</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="space-y-4 text-center">
                    <a
                        onClick={() => handleAddToCart()}
                        className="block p-3 text-sm border rounded-lg border-stone-600 text-stone-500 hover:ring-1 hover:ring-stone-400 hover:text-stone-600"
                        href="#"
                    >
                        Add to cart
                    </a>

                    <form action="/cart" method="post">
                        <button
                            className="block w-full p-3 text-sm rounded-lg bg-stone-600 text-stone-100 hover:bg-stone-500"
                            type="submit"
                        >
                            Check out
                        </button>
                    </form>

                    <a
                        className="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
                        href="/collections/all"
                    >
                        Continue shopping
                    </a>
                </div>
            </div>
            <div className=''>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Purchase;