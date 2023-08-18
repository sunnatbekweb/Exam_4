import Fl_Carousel from './Fl_Carousel'
import React from 'react'
import New from '../../Components/Layout/New'
import Relevant from '../../Components/Layout/Relevant'

const index = () => {
  return (
    <main className='pt-10 mt-[136px]'>
      <div className="container">
        <Fl_Carousel />
        <New />
        <Relevant />
      </div>
    </main>
  )
}

export default index