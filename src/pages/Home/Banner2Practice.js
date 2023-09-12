import React from 'react';
import bg from '../../assets/images/bmw-black-cars-cinematic-autumn-foliage-road-tarmac-3926x5889-3282.jpg'
import Lottie from "lottie-react";
import animationLottie from '../../lottie/drawkit grape-animation-2-LOOP (1).json'
const Banner2Practice = () => {
    return (
        <div>
            <Lottie animationData={animationLottie} style={{ width: '420px', height: '340px' }} />
            <div className='absolute w-[] h-[] left-0 top-0 bg-[#00e6b3]'>
                <div className='flex justify-between'>
                    <div className=''>
                        Cars

                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Shop now</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2Practice;
