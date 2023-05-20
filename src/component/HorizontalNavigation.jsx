import React from 'react'
import { RiNotification2Line } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HorizontalNavigation = () => {
    return (
        <nav className='container h-20  mx-auto flex justify-between items-center relative'>
            {/* logo and search */}
            <div className='flex gap-6'>
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-400">postbook</span>
                </a>
                <span>
                    <input type="text" placeholder="Search" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
                </span>
            </div>
            {/* links icon */}
            <div className='flex justify-end items-center gap-6'>

                <div className='flex gap-6'>
                    <Link to='/'>
                        <button
                            className="mt-2">
                            <AiFillHome className="text-3xl text-blue-400" />
                        </button>
                    </Link>

                    <Link to='/notifications'>
                        <button
                            className="mt-2">
                            <RiNotification2Line className="text-3xl text-blue-400" />
                        </button>
                    </Link>

                </div>
                {/* profile */}
                <div>
                    <div
                        className="border-4 border-blue-400 backdrop-blur-md rounded-full cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH"
                            alt=""
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default HorizontalNavigation