import React from 'react'
import { Breadcrumb } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import Card from '../Card'
import { useState } from 'react'
import data from '../../db'

const { newFlowers, relevant, plants } = data

const index = () => {
  const [count, setCount] = useState(0)
  const { id } = useParams()
  let arr = [...newFlowers, ...relevant, ...plants]
  const plant = arr.filter(item => item.id == id)

  return (
    <main className='mt-[136px]'>
      <div className="container">
        <Breadcrumb className='py-4 mb-6' items={[
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
                to="/flower"
              >
                flower
              </p>
            ),
          },]}
        />

        <div className='flex items-start gap-[72px] mb-[120px]'>
          <div>
            {
              plant?.map(el => (
                <img key={el.id} src={el.image} className='mb-5 object-cover w-full' alt="Image" />
              ))
            }
            <div className='flex gap-10'>
              <div className='flex items-center gap-[10px] w-[145px]'>
                <img src={icon1} alt="Iocn 1" />
                <p className='text-xs'>Benefits description</p>
              </div>

              <div className='flex items-center gap-[10px] w-[145px]'>
                <img src={icon2} alt="Iocn 2" />
                <p className='text-xs'>Always fresh flowers</p>
              </div>

              <div className='flex items-center gap-[10px] w-[145px]'>
                <img src={icon3} alt="Iocn 3" />
                <p className='text-xs'>Take photo of bouquet</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-10 w-[520px]'>
            {
              plant.map(el => (
                <div key={el.id} className='flex flex-col gap-5 pb-[15px] border-b'>
                  <h3 className='text-2xl'>{el.title}</h3>
                  <div className='flex items-end gap-5'>
                    <h4 className='text-2xl'>{el.price}</h4>
                    {el.discount && (
                      <span className='text-[#82828B] line-through'>{el.discount}</span>
                    )}
                  </div>
                </div>
              ))
            }

            <div className='flex flex-col gap-5'>
              <p className='text-base'>Count:</p>
              <div className='flex items-center gap-6'>
                <img onClick={() => { setCount((count) => count + 1) }} src={plus} alt="Plus icon" />
                <span>{count}</span>
                <img onClick={() => { setCount(count > 0 ? count - 1 : count) }} src={minus} alt="Minus icon" />
              </div>
            </div>


            <div className='flex flex-col gap-5'>
              <p>Color:</p>

              <div className='flex items-center gap-5'>
                <span className='w-9 h-9 bg-[#F0F0F5] rounded-full m-[3px] border-2 cursor-pointer focus:border-blue-700'></span>
                <span className='w-9 h-9 bg-[#EE7764] rounded-full m-[3px] border-2 cursor-pointer focus:border-blue-700'></span>
                <span className='w-9 h-9 bg-[#FFBC2C] rounded-full m-[3px] border-2 cursor-pointer focus:border-blue-700'></span>
              </div>
            </div>

            <div className='flex gap-5'>
              <button className='w-[310px] h-[56px] grid place-content-center bg-[#595CFF] text-white rounded-md'>Button</button>
              <span className='rounded-md border w-[56px] h-[56px] grid place-content-center'><i className='bx bx-cart text-2xl'></i></span>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex items-center justify-between mb-11'>
            <h2 className='text-2xl'>Similar flowers</h2>
          </div>
          <div className='flex items-center justify-between'>
            {
              newFlowers.map((item, index) => {
                return <Card state={item} key={index} />
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
 