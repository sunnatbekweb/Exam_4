import React from 'react'
import { Carousel } from 'antd';
import arrowRight from '../../assets/icons/arrow_right.svg'
import './flowers.scss'

const Fl_Carousel = () => {
    return (
        <Carousel autoplay>
            <div className='carousel_flower w-full h-[485px] px-[100px] pt-[216px]'>
                <h3 className='text-[32px]'>
                    Title
                </h3>
                <p className='text-[18px] mt-5 mb-10'>
                    Description
                </p>
                <button className='p-3 flex items-center gap-3 text-white text-sm bg-[#595CFF] hover:bg-blue-400 rounded-md duration-200 active:bg-blue-500'>
                    Button
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_flower w-full h-[485px] px-[80px] pt-[216px]'>
                <h3 className='text-[32px]'>
                    Title
                </h3>
                <p className='text-[18px] mt-5 mb-10'>
                    Description
                </p>
                <button className='p-3 flex items-center gap-3 text-white text-sm bg-[#595CFF] hover:bg-blue-400 rounded-md duration-200 active:bg-blue-500'>
                    Button <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_flower w-full h-[485px] px-[80px] pt-[216px]'>
                <h3 className='text-[32px]'>
                    Title
                </h3>
                <p className='text-[18px] mt-5 mb-10'>
                    Description
                </p>
                <button className='p-3 flex items-center gap-3 text-white text-sm bg-[#595CFF] hover:bg-blue-400 rounded-md duration-200 active:bg-blue-500'>
                    Button
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel_flower w-full h-[485px] px-[80px] pt-[216px]'>
                <h3 className='text-[32px]'>
                    Title
                </h3>
                <p className='text-[18px] mt-5 mb-10'>
                    Description
                </p>
                <button className='p-3 flex items-center gap-3 text-white text-sm bg-[#595CFF] hover:bg-blue-400 rounded-md duration-200 active:bg-blue-500'>
                    Button
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
        </Carousel>
    )
}

export default Fl_Carousel