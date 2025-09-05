import React from 'react'
import Causal from './assets/causal.svg'
import formal from './assets/Formal.svg'
import party from './assets/party.svg'
import gym from './assets/Gym.svg'


const Dressstyle = () => {
    return ( 
        <div className='bg-[#F0F0F0] mx-20 rounded-xl mt-4'>

            <div className='grid grid-cols-2 mx-10 p-4'>
                <img src={Causal} alt="" />
                <img src={formal} alt="" />
                <img src={party} alt="" />
                <img src={gym} alt="" />
            </div>

        </div>
    )
}

export default Dressstyle