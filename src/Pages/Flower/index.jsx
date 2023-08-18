import React from 'react'
import Intro from '../../Components/Layout/Intro'
import New from '../../Components/Layout/New'
import Relevant from '../../Components/Layout/Relevant'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const index = () => {
    return (
        <main className='pt-10 pb-[100px] mt-[136px]'>
            <div className="container">
                <Breadcrumb className='py-4' items={[
                    {
                        title: (
                            <NavLink
                                to="/"
                            >
                                Home
                            </NavLink>
                        ),
                    },
                    {
                        title: (
                            <p
                                to="/flowers"
                            >
                                Flowers
                            </p>
                        ),
                    },]}
                />
            </div>
            <Intro />
            <New />
            <Relevant />
        </main>
    )
}

export default index