import React from 'react';

import {HiOutlineShoppingBag} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
        <div className='bg-[#fff] w-[100%] lg:w-[100%] h-[80px] '>
            <div className='w-[90%] h-[100%] m-auto flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-[#000] tracking-widest'>Logo</p>
              </div>
              <div className='hidden w-[50%] h-[50%] md:flex items-center justify-between font-medium text-base tracking-widest'>
                <a href='a'>MarketPlace</a>
                <a href='b'>Blog</a>
                <a href='c'>Pricing</a>
                <a href='d'>About</a>
                <a href='e'>Contact</a>
              </div>
              <div className='flex gap-2 text-[#fff]'>
                <div className='bg-[#413DEE] w-[100%] h-[100%] p-2 rounded-full'>
                  <HiOutlineShoppingBag />
                </div>
                <div className='bg-[#F7A000] w-[100%] h-[100%] p-2 rounded-full'>
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default Navbar;