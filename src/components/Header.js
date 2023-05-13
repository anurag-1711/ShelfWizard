import React from 'react'
import logo from '../assets/logo-bookshelf.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className='flex mx-2 justify-between items-center'>
            {/* left part */}
            <Link to={'/'}>
                <img
                    className='w-20'
                    src={logo}
                    alt='logo'
                />
            </Link>

            {/* Search Bar */}
            <SearchBar />

            {/* middle part */}
            <ul className='flex space-x-10  items-center'>
                <Link to={'/'}><li className='text-xl'>Home</li></Link>
                {/* <Link to={'#search'}><li className='text-xl'>Search</li></Link> */}
                {/* <Link to={'/subjects'}><li className='text-xl'>Subjects</li></Link> */}
                <Link to={'/bookshelf'}><li className='text-xl'>BookShelf</li></Link>
            </ul>

            <div className='flex  space-x-4'>
                {/* notification */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>


                {/* user-icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

            </div>
        </div>
    )
}

export default Header