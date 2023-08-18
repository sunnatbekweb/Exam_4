import React from 'react'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <main className='mt-[136px] h-[470px] w-full grid place-content-center'>
      <h1 className='text-[120px] font-bold text-center'>404</h1>
      <p className='text-center text-2xl mb-5'>This Page is not Found!</p>
      <div className='flex justify-center'>
        <NavLink to='/' className='py-2 px-4 bg-black text-white rounded-md w-40 grid place-content-center hover:text-black hover:bg-white border-2 border-black active:bg-black duration-200 active:text-white'>Back home</NavLink>
      </div>
    </main>
  )
}

export default index