import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({children,authentication=true}) {

    const navigate=useNavigate()
    const [loader,setLoader]=useState()
    const status=useSelector(state=> state.status)

    useEffect(() => {

            // true                true     true
        if(authentication && status !== authentication){
            navigate("/login")
        } else if(!authentication && status !== authentication){
            navigate("/")  // true && true
        }
        setLoader(false)
    }, [status, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}