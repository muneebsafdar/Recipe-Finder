import React from 'react'
import Heading from '../Heading/Heading'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import appwriteAuthService from '../../Appwrite/AppwriteAuth'
import { LogIn } from '../../ReceipeFinderSlice/AuthSlice'
import { useDispatch } from 'react-redux'


function Login() {


    const {register, handleSubmit}=useForm()

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const submit=async (data)=>{
        try {
            const session=appwriteAuthService.loginUser(data)
            if (session) {
                const UserData= await appwriteAuthService.getCurrentUser()
                if (UserData) dispatch(LogIn(UserData))
                    
                navigate("/")
            }
        } catch (error) {
            console.log("Error logging in:", error);
            
        }
    }
    return (
        <div className='w-[40%] bg-white mx-auto mt-5 p-5  shadow-gray-800 shadow-2xl rounded-lg flex flex-col mb-10'>
            <div className='flex flex-col items-center mb-6'>
               <div className='size-20 rounded-full shadow-lg mb-2 bg-gray-800 p-4'>
                 <img src="src\Assets\mobile-logo.svg" alt="Mobile logo" />
               </div>
                <Heading children={"Login To Your Account"} className='text-3xl text-center' />
                <p className="mt-1 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>

            <div className='flex flex-col'>

                <form onSubmit={handleSubmit(submit)}>

                    <Input 
                    placeholder='Enter Your Email Here'
                    type='email'
                    label='Email'
                    className='mb-2'
                    {...register('email', { required: true })}
                    />
                    <Input 
                    placeholder='Enter Your Password Here'
                    type='password'
                    label='Password'
                    className='mb-2'
                    {...register('password', { required: true })}
                    />

                    <div className=' w-full flex justify-center items-center mt-5'>
                    <Button
                    type='submit'
                    className='w-[50%] mb-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    children={"Login"}
                    />

                    </div>
                </form>
                

                <div className='flex'>
                    <p className="text-sm text-gray-600">
                        By signing up, you agree to our{" "}
                        <Link to="/login" className="text-blue-500 underline">Terms of Service</Link>
                        {" "}and{" "}
                        <Link to="/login" className="text-blue-500 underline">Privacy Policy</Link>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Login
