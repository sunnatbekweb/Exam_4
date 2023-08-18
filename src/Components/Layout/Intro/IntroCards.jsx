import React from 'react'
import arrowBlack from '../../../assets/icons/arrowBlack.svg'
import './style.scss'

const IntroCards = () => {
    return (
        <div className='flex justify-between mt-10'>
            <div className='card1 pt-[46px] pl-[80px] w-[560px] h-[220px]'>
                <h3 className='text-[28px]'>Nice little gifts</h3>
                <p className='text-[18px] mt-[10px] mb-6'>for loved ones</p>
                <button className='text-sm flex items-center gap-3 hover:text-[#82828B]'>View now <img src={arrowBlack} alt="Arrow black" /></button>
            </div>

            <div className='card2 pt-[46px] pl-[80px] w-[560px] h-[220px]'>
                <h3 className='text-[28px]'>Nice little gifts</h3>
                <p className='text-[18px] mt-[10px] mb-6'>for loved ones</p>
                <button className='text-sm flex items-center gap-3 hover:text-[#82828B]'>View now <img src={arrowBlack} alt="Arrow black" /></button>
            </div>
        </div>
    )
}

export default IntroCards