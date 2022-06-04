import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-stone-800">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-yellow-500">WE ARE EXPERTS IN
                        AUTOMOTIVE PRODUCTS</h1>
                    <p class="py-6 text-yellow-500">We are committed to supplying our customers with robust automotive components and reliable services through our international commercial and production network</p>
                    <button class="btn bg-yellow-500 text-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;