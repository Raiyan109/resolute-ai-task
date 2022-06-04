import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, price, img, description, minimumQuantity, availableQuantity, _id } = tool
    const navigate = useNavigate()

    const goToPurchase = () => {
        navigate(`/tools/${_id}`)
    }


    return (
        <div>
            <div class="relative block bg-black group" >
                <img
                    class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                    src={img}
                    alt=""
                />
                <div class="relative p-8">
                    <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                        {price}
                    </p>

                    <p class="text-2xl font-bold text-white">{name}</p>

                    <div class="mt-64">
                        <div
                            class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                        >
                            <p class="text-sm text-white">
                                {description}
                            </p>
                            <button onClick={() => goToPurchase(tool)} class="btn glass">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;