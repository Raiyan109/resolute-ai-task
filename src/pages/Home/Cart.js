import React from 'react';

const Cart = ({ cart }) => {

    console.log(cart);
    return (
        <section class="shadow-2xl rounded-3xl">
            <div class="p-8 text-center sm:p-12">

                <h5 class=" text-3xl font-bold">Thanks for your purchase, We're getting it ready!</h5>
                <p class="mt-6 text-sm font-semibold tracking-widest text-pink-500 uppercase">Selected Items :{cart.length}</p>

                <a class="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl" href="">
                    Track Order
                </a>
            </div>
        </section>
    );
};

export default Cart;