import React from 'react'
import arrow from '../../assets/icons/arrow_right.svg'
import { Link } from "react-router-dom"
import "./style.scss";

const index = ({ state: { id, image, title, price, discount, path } }) => {

    return (
        <Link to={`/${path}/${id}`} className='card w-[260px] cursor-pointer border-none'>
            <div className='card_img relative'>
                <img src={image} className='cardImg' alt="Home palnt" />
                <div className='arrow_blue p-3 bg-blue-600 rounded-full absolute bottom-[-24px] right-[16px] z-50'>
                    <img src={arrow} alt="Arrow right" />
                </div>
            </div>
            <div className='pt-5 px-2 pb-10 flex flex-col items-center'>
                <h5 className='text-[18px] mb-2'>{title}</h5>
                <div className='flex items-center gap-4'>
                    <p className='price text-sm'>{price}</p>
                    {discount && (
                        <p className='discount text-sm line-through text-[#82828B]'>{discount}</p>
                    )}
                </div>
                
            </div>
        </Link>
    )
}

export default index