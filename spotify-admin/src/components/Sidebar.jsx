import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[2vw] pl-[4vw] max-w-[30vw] sm:max-w-[15vw] flex flex-col items-center sm:items-start'>
        <img src={assets.logo} className='mt-5 w-[max(8vw, 80px)] hidden sm:block' alt="Spotify Logo" />
        <img src={assets.logo_small} className='mt-5 w-[max(2vw, 20px)] sm:w-[max(1vw, 10px)] sm:mr-10 block sm:hidden' alt="Spotify Logo Small" />

            <div className='flex flex-col gap-5 mt-10'>
                <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] sm:pr-[max(3vw, 30px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.add_song} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>
                <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] sm:pr-[max(3vw, 30px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.song_icon} className='w-5' alt="" />
                    <p className='hidden sm:block'>List Song</p>
                </NavLink>
                <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] sm:pr-[max(3vw, 30px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.add_album} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>
                <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] sm:pr-[max(3vw, 30px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.album_icon} className='w-5' alt="" />
                    <p className='hidden sm:block'>List-Album</p>
                </NavLink>
            </div>
    </div>



  )
}

export default Sidebar