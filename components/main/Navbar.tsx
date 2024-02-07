"use client"
import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'


const Navbar = () => {
    return (
        <div
            className='w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-bluer-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/GandaraNavLogo.svg"
                        alt='logo'
                        width={300}
                        height={100}
                        className='cursor-pointer hover:animate-slowspi glow'
                    />
                    <style jsx global>{`
                        .glow {
                        filter: drop-shadow(0 0 15px #d400ff);}
                        `}</style>
                    {/* <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Gandara Developer
                    </span> */}
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer'>Sobre</a>
                        <a href="#skills" className='cursor-pointer'>Skills</a>
                        <a href="#projects" className='cursor-pointer'>Projetos</a>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={30}
                                height={30}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Navbar