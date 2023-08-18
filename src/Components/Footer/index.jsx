import React from 'react'
import Instagram from '../../assets/icons/instagram.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import Facebook from '../../assets/icons/facebook.svg'
import './footer.scss'

const index = () => {
    return (
        <footer className=''>
            <div className="container">
                <div className='py-[60px] flex justify-between items-start border-b'>
                    <ul className='flex flex-col gap-[18px]'>
                        <li>
                            <h5>Title</h5>
                        </li>
                        <li>
                            <a href='' className='tel'>+998991234567</a>
                        </li>
                        <li className='flex items-center gap-5'>
                            <a href='#' className='social'>
                                <img src={Instagram} alt="Instagram icon" />
                            </a>
                            <a href='#' className='social'>
                                <img src={Whatsapp} alt="Whatsapp icon" />
                            </a>
                            <a href='#' className='social'>
                                <img src={Facebook} alt="Facebook icon" />
                            </a>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h5>Help</h5>
                        </li>
                        <li>
                            <a href=''>Contact us</a>
                        </li>
                        <li>
                            <a href=''>Delivery information</a>
                        </li>
                        <li>
                            <a href=''>Payment information</a>
                        </li>
                        <li>
                            <a href=''>Customer service</a>
                        </li>
                        <li>
                            <a href=''>FAQ</a>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h5>About us</h5>
                        </li>
                        <li>
                            <a href=''>Our Stores</a>
                        </li>
                        <li>
                            <a href=''>Flower care</a>
                        </li>
                        <li>
                            <a href=''>Site map</a>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h5>Legal</h5>
                        </li>
                        <li>
                            <a href=''>Privacy policy</a>
                        </li>
                        <li>
                            <a href=''>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href=''>Cookie policy</a>
                        </li>
                        <li>
                            <a href=''>Item 4</a>
                        </li>
                        <li>
                            <a href=''>Item 5</a>
                        </li>
                    </ul>
                </div>

                <div className='pt-5 pb-8'>
                    <p className='text-xs text-[#AFB1BD]'>© Copyright,  SERIUS </p>
                </div>
            </div>
        </footer>
    )
}

export default index