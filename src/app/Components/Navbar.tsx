"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "@/images/logo.png"
import { HiMiniXMark } from 'react-icons/hi2'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className='fixed w-full'>
                <nav className='bg-white w-full flex justify-between items-center py-5 px-4'>

                    <div className='w-[200px] ml-6'>
                        <Image src={logo} alt='kottonsoft' className='w-full' />
                    </div>

                    <div className='hidden  justify-end items-center gap-4 lg:flex '>
                        <div className='space-x-6'>
                            <Link href={'/'} className='text-xl '>Home</Link>
                            <Link href={'/'} className='text-xl '>Our Services</Link>
                            <Link href={'/'} className='text-xl '>Portfolio</Link>
                            <Link href={'/'} className='text-xl '>About Us</Link>
                            <Link href={'/'} className='text-xl '>Testimonials</Link>
                        </div>
                        <button className='bg-[var(--primary)] text-white py-4 px-4 rounded-md'>Get A Free Quote</button>
                    </div>

                    <GiHamburgerMenu size={40} className='block lg:hidden' onClick={() => setIsOpen(true)} />

                </nav>
            </header>


            <header className={`fixed top-0 left-0 h-full w-1/2 md:w-1/3 bg-[var(--primary)] rounded-md flex flex-col gap-6 justify-center lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                 <HiMiniXMark className="absolute top-10 right-4   text-white cursor-pointer" size={40} onClick={() => setIsOpen(false)} />

                 <Link href={'/'} className="text-xl block text-white hover:bg-white hover:text-[var(--primary)] p-4 transition-all ease-linear">Home</Link>
                <Link href={'/'} className="text-xl block text-white hover:bg-white hover:text-[var(--primary)] p-4 transition-all ease-linear">Our Services</Link>
                <Link href={'/'} className="text-xl block text-white hover:bg-white hover:text-[var(--primary)] p-4 transition-all ease-linear">Portfolio</Link>
                <Link href={'/'} className="text-xl block text-white hover:bg-white hover:text-[var(--primary)] p-4 transition-all ease-linear">About Us</Link>
                <Link href={'/'} className="text-xl block text-white hover:bg-white hover:text-[var(--primary)] p-4 transition-all ease-linear">Testimonials</Link>
            </header>


        </>


    )
}

export default Navbar