import React from 'react'
import Card from '../../../Ui/Card'
import data from '../../../db.js'
import arrow from '../../../assets/icons/arrowBlack.svg'
import arrowLeft from '../../../assets/icons/arrow_left.svg'
import './style.scss'

const { relevant } = data;

const index = () => {
    return (
        <section>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl mb-[44px]'>Relevant</h2>
                    <div className='flex items-center gap-5'>
                        <img src={arrowLeft} className='cursor-pointer hover:scale-105 active:scale-95' alt="Arrow left" />
                        <img src={arrow} className='cursor-pointer hover:scale-105 active:scale-95' alt="Arrow right" />
                    </div>
                </div>

                <div className='wrapper flex justify-between'>
                    {relevant.map((item, index) => {
                        return <Card state={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default index