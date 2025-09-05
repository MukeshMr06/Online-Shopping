import React from 'react'
import Homelog from './assets/homepage.jpg'
import Smallimg from './assets/smallvector.svg'
import Bigimg from './assets/bigvector.svg'
import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
import logo3 from './assets/logo3.svg'
import logo4 from './assets/logo4.svg'
import logo5 from './assets/logo5.svg'
import Imagesection from './Imagesection'
import Selling from './Selling'
import Dressstyle from './Dressstyle'
import Customer from './Customer'
import Footer from './Footer'


const Firstpage = () => {
  return (
    <div>
      <div className='bg-[#F2F0F1] mt-4 relative'>
        <div className='flex flex-col gap-3 ml-20'>
          <h2 className='font-bold mt-18 w-[700px] text-6xl'>Find Clothes That Matches Your Style</h2>
          <p className='w-[500px] font-normal text-base'>Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.</p>
          <p className='bg-black font-medium text-base text-white w-fit rounded-xl p-2'>shop Now</p>
          <div className='flex gap-8'>
            <div className=''>
              <p className='font-bold  text-4xl'>200+</p>
              <p className='font-normal text-base'>Interational Brands</p>
            </div>
            <div>
              <p className='font-bold  text-4xl'>2,000+</p>
              <p className='font-normal text-base'>High-Quality Products</p>
            </div> <div>
              <p className='font-bold text-4xl'>30,000+</p>
              <p className='font-normal text-base'>Happy Customers</p>
            </div>
          </div>
        </div>

        <div>
          <img className='absolute top-4 right-40 w-90 h-90' src={Homelog} alt="" />
          <img className='absolute top-80 left-[700px]' src={Smallimg} alt="" />
          <img className='absolute top-10 right-10' src={Bigimg} alt="" />
        </div>

        <div className='bg-black w-full h-24 flex justify-around items-center mt-20'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>

      </div>

      <Imagesection />
      <Selling />
      <Dressstyle />
      <Customer />
      <Footer />
      
    </div>
  )
}

export default Firstpage