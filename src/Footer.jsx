import React from 'react'
import shop from './assets/SHOP.svg'
import twitter from './assets/footerimg/twitter.svg'
import facebook from './assets/footerimg/facebook.svg'
import chatgpt from './assets/footerimg/chatgpt.svg'
import github from './assets/footerimg/github.svg'
import visa from './assets/footerimg/visa.svg'
import card from './assets/footerimg/card.svg'
import paypal from './assets/footerimg/paypal.svg'
import applepay from './assets/footerimg/applepay.svg'
import gpay from './assets/footerimg/gpay.svg'
import email from './assets/footerimg/email.svg'




const Footer = () => {
  return (
  <div className='bg-[#F0F0F0] mt-32 relative'>

  {/* Black floating box */}
  <div className='absolute -top-20 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl w-[90%] max-w-6xl p-10'>
    <div className='flex justify-between items-center mt-10 gap-10'>

      <h3 className='w-full font-bold text-4xl leading-snug md:w-1/2'>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h3>

      <div className='flex flex-col gap-4 w-1/2'>
        {/* Email input with icon */}
        <div className='relative'>
          <input
            className='bg-white text-gray-400 rounded-xl py-3 pl-4 pr-10 w-full'
            type="email"
            placeholder='Enter your Email address'
          />
          <img className='w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2' src={email} alt="" />
        </div>

        {/* Subscribe button */}
        <button className='bg-white text-black font-bold rounded-xl py-3 w-full'>
          Subscribe to Newsletter
        </button>
      </div>

    </div>
  </div>

  {/* Footer content */}
  <div className='p-10 pt-44 flex flex-col gap-4'>
    
    <div className='flex justify-between mx-10'>

      <div className='w-3xs flex flex-col gap-4 p-4'>
        <img src={shop} alt="" />
        <p className='font-normal text-sm'>
          We have clothes that suits your style and which you're proud to wear. From women to men.
        </p>
        <div className='flex gap-2'>
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={chatgpt} alt="" />
          <img src={github} alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <h2 className='font-medium text-base'>COMPANY</h2>
        <p className='text-sm'>About</p>
        <p className='text-sm'>Features</p>
        <p className='text-sm'>Works</p>
        <p className='text-sm'>Career</p>
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <h2 className='font-medium text-base'>HELP</h2>
        <p className='text-sm'>Customer Support</p>
        <p className='text-sm'>Delivery Details</p>
        <p className='text-sm'>Terms & Conditions</p>
        <p className='text-sm'>Privacy Policy</p>
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <h2 className='font-medium text-base'>FAQ</h2>
        <p className='text-sm'>Account</p>
        <p className='text-sm'>Manage Deliveries</p>
        <p className='text-sm'>Orders</p>
        <p className='text-sm'>Payments</p>
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <h2 className='font-medium text-base'>RESOURCES</h2>
        <p className='text-sm'>Free eBooks</p>
        <p className='text-sm'>Development Tutorial</p>
        <p className='text-sm'>How to - Blog</p>
        <p className='text-sm'>Youtube Playlist</p>
      </div>

    </div>

    <div className='border-b border-[#0000001A] mx-10'></div>

    <div className='mx-10 flex justify-between items-center'>
      <h3 className='font-normal text-sm'>Shop.co © 2000-2023, All Rights Reserved</h3>
      <div className='flex gap-3'>
        <img src={visa} alt="" />
        <img src={card} alt="" />
        <img src={paypal} alt="" />
        <img src={applepay} alt="" />
        <img src={gpay} alt="" />
      </div>
    </div>

  </div>
</div>

  )
}

export default Footer