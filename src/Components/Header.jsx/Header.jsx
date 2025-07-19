import React from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {

    const navigate=useNavigate()
    

    return (
        <div className='w-full  bg-white  shadow-lg  py-4 h-screen '>
            <header className='flex flex-col relative'>
                <div className='w-[90%] px-3 mb-10' >
                    <img src="src\Assets\logo.svg"  alt="Receipe Finder Logo" />
                </div>
                <div className='flex  justify-items-start items-center flex-col px-2'>
                    <button className='text-xl flex py-2  justify-items-start items-center w-full hover:bg-gray-300'
                    onClick={() => navigate("/")}
                    > <i className="ri-home-2-line px-3 "></i> Home</button>

                    <button className='text-xl flex py-2  justify-items-start items-center w-full hover:bg-gray-300'
                    onClick={() => navigate("/favourite")}
                    > <i className="ri-heart-line px-3 " ></i> Favourites</button>
                </div>
            </header>
        </div>
    )
}

export default Header
