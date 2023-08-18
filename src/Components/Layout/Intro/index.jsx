import React from 'react'
import Carousel from '../../../Ui/Carousel'
import IntroCards from './introCards'

const index = () => {
  return (
    <section>
      <div className="container">
        <Carousel />
        <IntroCards />
      </div>
    </section>
  )
}

export default index