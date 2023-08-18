import React from 'react'
import arrow from '../../../assets/icons/arrowBlack.svg'
import arrowLeft from '../../../assets/icons/arrow_left.svg'
import Card from '../../../Ui/Card'
import data from '../../../db'
import './style.scss'

const { newFlowers } = data;

const index = () => {
    return (
        <section className='mt-12 mb-[92px]'>
            <div className="container">
                <div>
                    <div className='flex items-center justify-between'>
                        <h2 className='mb-[44px] text-2xl'>New</h2>
                        <div className='flex items-center gap-5'>
                            <img src={arrowLeft} className='cursor-pointer hover:scale-105 active:scale-95' alt="Arrow left" />
                            <img src={arrow} className='cursor-pointer hover:scale-105 active:scale-95' alt="Arrow right" />
                        </div>
                    </div>

                    <div className='wrapper flex justify-between'>
                        {newFlowers.map((item, index) => {
                            return <Card state={item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index