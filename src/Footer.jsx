import React from 'react'
import shop from './assets/SHOP.svg'
import twitter from './assets/footerimg/twitter.svg'
import facebook from './assets/footerimg/facebook.svg'
import chatgpt from './assets/footerimg/chatgpt.svg'
import github from './assets/footerimg/github.svg'


const Footer = () => {
  return (
    <div className='bg-[#F0F0F0] mt-10'>

      <div className=' flex justify-around mx-10 my-10 p-5'>

        <div className='w-3xs h-28 flex flex-col gap-2'>
          <img src={shop} alt="" />
          <p className='font-normal text-sm'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>

          <div className='flex gap-2'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={chatgpt} alt="" />
            <img src={github} alt="" />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-medium text-base'>COMPANY</h2>
          <p className='text-sm'>About</p>
          <p className='text-sm'>Features</p>
          <p className='text-sm'>Works</p>
          <p className='text-sm'>Career</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-medium text-base'>HELP</h2>
          <p className='text-sm'>Customer Support</p>
          <p className='text-sm'>Delivery Details</p>
          <p className='text-sm'>Terms & Conditions</p>
          <p className='text-sm'>Privacy Policy</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-medium text-base'>FAQ</h2>
          <p className='text-sm'>Account</p>
          <p className='text-sm'>Manage Deliveries</p>
          <p className='text-sm'>Orders</p>
          <p className='text-sm'>Payments</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-medium text-base'>RESOURCES</h2>
          <p className='text-sm'>Free eBooks</p>
          <p className='text-sm'>Development Tutorial</p>
          <p className='text-sm'>How to - Blog</p>
          <p className='text-sm'>Youtube Playlist</p>
        </div>

      </div>

      <div className='mx-10'>
        <div className='border-b border-bg-[#0000001A]'></div>
        <h3 className='font-normal text-sm'>Shop.co © 2000-2023, All Rights Reserved</h3>
      </div>

    </div>
  )
}

export default Footer