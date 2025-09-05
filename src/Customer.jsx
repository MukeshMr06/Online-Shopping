import React from 'react'
import Right from './assets/rightarrow.svg'
import Left from './assets/leftarrow.svg'
import Tick from './assets/tick.svg'

const Customer = () => {
    return (
        <div className='mt-10 flex flex-col gap-5'>
            <div className='flex justify-between mx-20 items-center'>
                <p className='font-bold text-5xl'>OUR HAPPY CUSTOMERS</p>
                <div className='flex gap-1'>
                    <img className='w-6 h-6' src={Left} alt="" />
                    <img className='w-6 h-6' src={Right} alt="" />
                </div>
            </div>

            {/* Review section */}
            <div className='flex overflow-x-auto space-x-4 p-2 scrollbar-hidden'>
                <div className='w-[450px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl'>
                    <h3>5</h3>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Mukesh MR</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className='w-[450px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl'>
                    <h3>5</h3>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>James S</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className='w-[450px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl'>
                    <h3>5</h3>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Alex A</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className='w-[450px] flex-shrink-0 border px-7 py-7 m-2 flex flex-col gap-1 rounded-xl'>
                    <h3>5</h3>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Roshan M</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className='w-[450px] border flex-shrink-0 px-7 py-7 m-2 flex flex-col gap-1 rounded-xl'>
                    <h3>5</h3>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>Mukesh MR</p>
                        <img src={Tick} alt="" />
                    </div>
                    <p className='font-normal text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

            </div>

        </div>
    )
}

export default Customer