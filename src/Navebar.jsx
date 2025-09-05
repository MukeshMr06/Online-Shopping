import React from 'react'
import logo from './assets/SHOP.svg'
import search from './assets/searchbtn.svg'
import login from './assets/login.svg'
import cart from './assets/cart.svg'

const Navebar = () => {
    return (
        <div>
            {/* SignIn */}
            <div className='bg-[#000000] w-full h-9 flex items-center justify-between px-2 sm:px-8'>
                <p className='text-[#FFFFFF] font-normal text-sm sm:text-sm text-center flex-1'>Sign up and get 20% off to your first order. <span className='font-medium underline text-sm'>Sign Up Now</span></p>
                <p className='w-5 h-5 text-white ml-40 flex justify-center items-center'>X</p>
            </div>

            {/* Navebar */}

            <div className='mx-28 flex justify-between items-center mt-6'>
                <img className='font-bold text-3xl' src={logo} alt="" />
                <div className='text-sm flex gap-6'>
                    <p>Shop</p>
                    <p>On Sale</p>
                    <p>New Arrivals</p>
                    <p >Brands</p>
                </div>

                {/* Search Bar */}
                <div className='flex items-center bg-[#F0F0F0] w-xl h-12 rounded-xl gap-2'>
                    <img className='w-5.5 h-5.5 ml-2' src={search} alt="" />
                    <input className='font-normal text-base' type="text" placeholder='Search a products...' />
                </div>

                {/* icons */}
                <div className='flex w-6 h-6 gap-3.5'>
                    <img src={cart} alt="" />
                    <img src={login} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Navebar