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


            {/*  */}

            <section id="home" className={`flex md:flex-row flex-col`}>
                <div className={`flex-1  flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">

                        <p className={` ml-2`}>
                            <span className="text-white">20%</span> Discount For{" "}
                            <span className="text-white">1 Month</span> Account
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                            The Next <br className="sm:block hidden" />{" "}
                            <span className="text-gradient">Generation</span>{" "}
                        </h1>
                        <div className="ss:flex hidden md:mr-4 mr-0">

                        </div>
                    </div>

                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Payment Method.
                    </h1>
                    <p className={` max-w-[470px] mt-5`}>
                        Our team of experts uses a methodology to identify the credit cards
                        most likely to fit your needs. We examine annual percentage rates,
                        annual fees.
                    </p>
                </div>

                <div className={`flex-1 flex  md:my-0 my-10 relative`}>


                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>

                <div className={`ss:hidden `}>

                </div>
            </section>

        </div>
    );
};

export default Banner;