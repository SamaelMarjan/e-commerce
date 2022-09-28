import React from 'react'

const Newsletter = () => {
  return (
    <>
        <div className='w-[100%] h-[350px] md:h-[700px] flex items-center justify-center'>
            <div className='text-[#fff] bg-[#413DEE] w-[90%] h-[80%] flex flex-col text-center justify-center rounded-xl gap-4'>
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-5xl'>Subscribe to Our Newsletter</p>
                    <p className='font-noemal text-xl'>Don't miss out on our top deals! Dont worry we will not spam you.</p>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <input type='text' className='border rounded-full' />
                    <button className='font-medium text-sm bg-orange-500 p-1 rounded-full'>Subscribe</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newsletter