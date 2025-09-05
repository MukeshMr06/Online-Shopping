import React from 'react'
import tshirt5 from './assets/tshirt5.svg'
import tshirt6 from './assets/tshirt6.svg'
import tshirt7 from './assets/tshirt7.svg'
import tshirt8 from './assets/tshirt8.svg'


const Selling = () => {
  return (
     <div>
                <div className='flex flex-col gap-7 mt-10'>
                    <h2 className='font-bold text-5xl flex justify-center'>TOP SELLING</h2>
                    <div className='flex justify-between mx-10'>
                        <div className='relative'>
                            <img className='w-2xs h-72' src={tshirt5} alt="" />
                            <p className='font-bold text-xl'>Vertical Striped Shirt</p>
                            <p className='font-normal text-sm'>5.0/5</p>
                            <p className='text-2xl'>$212</p>
                             <div className='flex items-center gap-3 absolute bottom-0 right-28'>
                                <p className='text-[#00000066] text-2xl'>$232</p>
                                <p className=' bg-[#FF33331A] rounded-xl px-1 py-1.5 text-red-600'>20%</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-2xs h-72' src={tshirt6} alt="" />
                            <p className='font-bold text-xl'>Courage-Graphic T-Shirt</p>
                            <p className='font-normal text-sm'>3.0/5</p>
                            <p className='text-2xl'>$145</p>
                        </div>
                        <div>
                            <img className='w-2xs h-72' src={tshirt7} alt="" />
                            <p className='font-bold text-xl'>Loose Fit Bermuda Shorts</p>
                            <p className='font-normal text-sm'>4.0/5</p>
                            <p className='text-2xl'>$80</p>
                        </div>
                        <div>
                            <img className='w-2xs h-72' src={tshirt8} alt="" />
                            <p className='font-bold text-xl'>Faded Skinny Jeans</p>
                            <p className='font-normal text-sm'>4.5/5</p>
                            <p className='text-2xl'>$130</p>
                           
                        </div>
                    </div>
    
                    <div className='flex justify-center'>
                        <h3 className='flex justify-center bg-[#0000001A] w-40 p-2 rounded-2xl'>View All</h3>
                    </div>
                </div>
            </div>
  )
}

export default Selling