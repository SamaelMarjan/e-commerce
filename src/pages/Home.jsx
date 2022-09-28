import React from 'react';

import Img from '../assets/Rectangle 10342.png';

const Home = () => {
  return (
    <>
        <div className='md:relative w-[100%] md:h-[700px]'>
            <div className='w-[90%] h-[100%] m-auto flex flex-col items-start justify-center gap-8'>
                <div className='flex flex-col gap-8'>
                    <p className='font-bold text-base'>WE’RE STILL</p>
                    <p className='font-medium text-6xl'>Filling up <span className='block'>the spaces.</span></p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-[#413DEE] p-3 rounded-md text-[#fff]'>Explore Marketplace</p>
                    <p>See Top Deals</p>
                </div>
                <img src={Img} alt='img' className='md:absolute md:top-[55px] md:right-0 md:w-[50%]' />
            </div>
        </div>
    </>
  );
}

export default Home;