import React,{ useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx/Header'
import Container from './Components/Container/Container'
import Footer from './Components/Footer.jsx/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { LogIn } from './ReceipeFinderSlice/AuthSlice'
import appwriteAuthService from './Appwrite/AppwriteAuth'

function App() {


  const status=useSelector(state=>state.status)
  const dispatch=useDispatch()

  const getUser = async ()=>{
    const userData = await appwriteAuthService.getCurrentUser()
    if(userData){
      dispatch(LogIn(userData))
    }
    else{
      console.log("No user data found");
    }
  }

  useEffect(()=>{
    getUser()
  },[])


  

  return (
    <>
      <div className='bg-gray-100 min-h-screen w-full flex '>
        
       {
       status &&  <div className='w-[20%]'>
          <Header/>
        </div>
        }

        <div className={`w-full ${status ? 'w-[80%]' : 'w-full'}`}>

          <main>
           <Container>
            <Outlet/>
           </Container>
          </main>
          
        </div>

     
      </div>

     {status && <Footer/>}
    </>
  )
}

export default App
