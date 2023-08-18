import React from 'react'
import { Carousel } from 'antd'
import arrowRight from '../../assets/icons/arrow_right.svg'
import './style.scss'

const index = () => {
    return (
        <Carousel autoplay>
            <div className='carousel_item w-full h-[220px] px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm hover:bg-[#595CFF] rounded-md duration-200 active:bg-[#82828B]'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_item w-full h-[220px] px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm hover:bg-[#595CFF] rounded-md duration-200 active:bg-[#82828B]'>
                    Shop now <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_item w-full h-[220px] px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm hover:bg-[#595CFF] rounded-md duration-200 active:bg-[#82828B]'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_item w-full h-[220px] px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm hover:bg-[#595CFF] rounded-md duration-200 active:bg-[#82828B]'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
        </Carousel>
    )
}

export default index