// import React , {useState} from 'react'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import data from '../../db'
import Card from '../../Ui/Card'
import { useState } from 'react'


const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Item1
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Item2
      </a>
    ),
  },
];

const index = () => {
  const { plants } = data;
  const [render, setrender] = useState(false)

  return (
    <main className='mt-[136px] '>
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
                to="/plants"
              >
                Plants
              </p>
            ),
          },]}
        />
        <h2 className='mb-10 text-[32px]'>All Plants</h2>
        <div className='flex items-center gap-20 pb-5 border-b'>
          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className='cursor-pointer border-b-2 border-transparent hover:border-black'>
              Sort by
              <DownOutlined />
            </Space>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className='cursor-pointer border-b-2 border-transparent hover:border-black'>
              Color
              <DownOutlined />
            </Space>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className='cursor-pointer border-b-2 border-transparent hover:border-black'>
              Price
              <DownOutlined />
            </Space>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className='cursor-pointer border-b-2 border-transparent hover:border-black'>
              Flower type
              <DownOutlined />
            </Space>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
          >
            <Space className='cursor-pointer border-b-2 border-transparent hover:border-black'>
              Occasion
              <DownOutlined />
            </Space>
          </Dropdown>

        </div>

        <div className='flex flex-wrap py-10 justify-between gap-10'>
          {
            render ? plants.length && plants.map((item, index) => {
              return <Card state={item} key={index} />
            }) : plants.length && plants.slice(0, 8).map((item, index) => {
               return <Card state={item} key={index} />
            })
          }
        </div>

        <div className='flex justify-center mb-10'>
          <button onClick={() => setrender(!render)} className='py-[14px] w-[220px] bg-black rounded-md text-white hover:bg-transparent border-2 hover:border-black hover:text-black active:bg-black active:text-white duration-200'>
            See more
          </button>
        </div>
      </div>
    </main>
  )
}

export default index