import React from 'react';

const Footer = () => {
  return (
    <>
        <div className='w-[100%] h-[200px] md:h-[400px] flex items-center'>
            <div className='w-[90%] h-[90%] m-auto flex md:justify-between'>
                <div className='w-[50%] md:w-[30%] h-[40%] flex flex-col gap-4'>
                    <p className='text-[#141414] text-xl font-medium '>Your Company</p>
                    <p className='text-[#2b2a2a] text-base font-normal'>Our mission is to make gadjet <span>purchase, accessible and affordable.</span></p>
                </div>
                <div className='hidden w-[20%] h-[100%] md:flex flex-col'>
                    <p className='text-[#141414] text-xl font-medium w-[100%] h-[15%]'>Helpful Links</p>
                    <a href='a' className='text-[#2b2a2a] text-base font-normal w-[25%] h-[10%]'>Home</a>
                    <a href='b' className='text-[#2b2a2a] text-base font-normal w-[35%] h-[10%]'>About Us</a>
                    <a href='c' className='text-[#2b2a2a] text-base font-normal w-[50%] h-[10%]'>Marketplace</a>
                    <a href='d' className='text-[#2b2a2a] text-base font-normal w-[25%] h-[10%]'>Blog</a>
                    <a href='e' className='text-[#2b2a2a] text-base font-normal w-[45%] h-[10%]'>Contact Us</a>
                </div>
                <div className='hidden w-[20%] h-[100%] md:flex flex-col'>
                    <p className='text-[#141414] text-xl font-medium w-[100%] h-[15%]'>Site Map</p>
                    <a href='a' className='text-[#2b2a2a] text-base font-normal w-[60%] h-[10%]'>Our Mobile App</a>
                    <a href='b' className='text-[#2b2a2a] text-base font-normal w-[100%] h-[10%]'>Frequently Asked Questions</a>
                    <a href='c' className='text-[#2b2a2a] text-base font-normal w-[40%] h-[10%]'>Help Desk</a>
                    <a href='d' className='text-[#2b2a2a] text-base font-normal w-[55%] h-[10%]'>Privacy Policy</a>
                    <a href='e' className='text-[#2b2a2a] text-base font-normal w-[80%] h-[10%]'>Terms and Conditions</a>
                </div>
                <div className='w-[50%] md:w-[25%] h-[100%] flex flex-col items-end md:items-start'>
                    <div className='w-[100%] h-[15%]'>
                        <p className='text-[#141414] text-xl font-medium w-[100%] h-[100%] flex justify-end md:justify-start'>Contact Us</p>
                    </div>
                    <div>social</div>
                    <div>email</div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;