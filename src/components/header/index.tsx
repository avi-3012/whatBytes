import React from 'react'
import { BsMenuButtonFill as MenuIcon } from 'react-icons/bs'
import { FaMap } from "react-icons/fa";

const Header = ({isOpen, toggleMenu}:{isOpen:boolean, toggleMenu:any}) => {
  return (
    <div className='h-20 border-b-[1px] flex justify-between px-6'>
        <div className='text-lg md:text-3xl font-medium my-auto flex flex-row gap-2 items-center'>
            <FaMap className='h-10 w-10 my-auto' />
          WhatBytes</div>
        <div className='md:flex hidden flex-row my-auto p-2 md:border-[1px] rounded-lg'>
            <div className='h-6 w-6 rounded-full drop-shadow my-auto bg-black'></div>
            <div className='my-auto pl-2 pr-1'>Rahil Siddique</div>
        </div>
        <button className='md:hidden block my-auto' onClick={()=>toggleMenu(!isOpen)}>
          <MenuIcon className='h-6 w-6 my-auto' />
        </button>
    </div>
  )
}

export default Header