import React from 'react'
import menu from '../assets/menu.svg'
import Image from '../assets/Image.svg'

const Header = () => {
  return (
    <div className='flex justify-between  '>
        <div className='flex gap-3'>
            <img src={menu} alt="menu" />
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
        </div>
        <div className='flex gap-3'>
            <img src={Image} alt="perfil" />
            <div>
                <p className='font-bold '>Oscar E.</p>
                <p className='text-sm'>Admin</p>
            </div>
        </div>
    </div>
  )
}

export default Header