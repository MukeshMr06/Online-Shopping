import React from 'react'
import tshirt1 from './assets/tshirt1.svg'
import tshirt2 from './assets/tshirt2.svg'
import tshirt3 from './assets/tshirt3.svg'
import tshirt4 from './assets/tshirt4.svg'
import star from './assets/star.svg'


const Imagesection = () => {
    return (
        <div>
            <div className='flex flex-col gap-7 mt-10'>
                <h2 className='font-bold text-5xl flex justify-center'>NEW ARRIVALS</h2>
                <div className='flex justify-between mx-10'>
                    <div>
                        <img className='w-2xs h-72' src={tshirt1} alt="" />
                        <p className='font-bold text-xl'>T-SHIRT WITH TAPE DETAILS</p>
                        <p className='font-normal text-sm'>4.5/5</p>
                        <p className='text-2xl'>$120</p>
                    </div>
                    <div className='relative'>
                        <img className='w-2xs h-72' src={tshirt2} alt="" />
                        <p className='font-bold text-xl'>SKINNY FIT JEANS</p>
                        <p className='font-normal text-sm'>3.5/5</p>
                        <p className='text-2xl'>$240</p>
                        <div className='flex items-center gap-3 absolute bottom-0 right-28'>
                            <p className='text-[#00000066] text-2xl'>$260</p>
                            <p className=' bg-[#FF33331A] rounded-xl px-1 py-1.5 text-red-600'>20%</p>
                        </div>
                    </div>
                    <div>
                        <img className='w-2xs h-72' src={tshirt3} alt="" />
                        <p className='font-bold text-xl'>CHECKERED SHIRT</p>
                        <p className='font-normal text-sm'>4.5/5</p>
                        <p className='text-2xl'>$180</p>
                    </div>
                    <div className='relative'>
                        <img className='w-2xs h-72' src={tshirt4} alt="" />
                        <p className='font-bold text-xl'>SLEEVE STRIPED T-SHIRT</p>
                        <p className='font-normal text-sm'>4.5/5</p>
                        <p className='text-2xl'>$130</p>
                        <div className='flex items-center gap-3 absolute bottom-0 right-28'>
                            <p className='text-[#00000066] text-2xl'>$260</p>
                            <p className=' bg-[#FF33331A] rounded-xl px-1 py-1.5 text-red-600'>20%</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <h3 className='flex justify-center bg-[#0000001A] w-40 p-2 rounded-2xl'>View All</h3>
                </div>

                <div className='border-b border-bg-[#0000001A] w-full'></div>
            </div>
        </div>
    )
}

export default Imagesection