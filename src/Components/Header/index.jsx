import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import location from '../../assets/icons/location.svg'

const index = () => {
    return (
        <header className='w-full fixed top-0 z-50 bg-white'>
            <div className="container">
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center gap-2'>
                        <img src={location} alt="Location icon" />
                        <p>Tashkent</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <i className='bx bx-search-alt-2 text-2xl hover:scale-105 active:scale-95 cursor-pointer'></i>
                        <i className='bx bx-cart text-2xl hover:scale-105 active:scale-95 cursor-pointer'></i>
                    </div>
                </div>
            </div>

            <nav className='py-6'>
                <ul className='flex justify-center gap-[60px]'>
                    <li>
                        <NavLink to="/flowers" className='text-base hover:text-[#82828B] duration-200 border-b-2 border-transparent hover:border-[#82828B] active:text-black focus:border-black'>Flowers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/plants" className='text-base hover:text-[#82828B] duration-200 border-b-2 border-transparent hover:border-[#82828B] active:text-black focus:border-black'>Plants</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts" className='text-base hover:text-[#82828B] duration-200 border-b-2 border-transparent hover:border-[#82828B] active:text-black focus:border-black'>Gifts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discount" className='text-base hover:text-[#82828B] duration-200 border-b-2 border-transparent hover:border-[#82828B] active:text-black focus:border-black'>Discounts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='text-base hover:text-[#82828B] duration-200 border-b-2 border-transparent hover:border-[#82828B] active:text-black focus:border-black'>About us</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default index