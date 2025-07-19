import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Addingfavourites } from '../../ReceipeFinderSlice/AuthSlice';

function ReceipeCard({fav,strMeal,strCategory,strArea,strMealThumb,strYoutube,strIngredient1,strIngredient2}) {
        
    const dispatch=useDispatch()

    const adding=()=>{
        const data={strMeal,strCategory,strArea,strMealThumb,strYoutube,strIngredient1,strIngredient2}
        dispatch(Addingfavourites(data))
    }
   
    return (
       
            <div className='flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 '>
            <div className='w-full  mt-1 rounded relative'>

            <Link to={strYoutube} >
            <img src={strMealThumb} className='w-64 h-40 rounded' alt="" />
            </Link>
                
            {fav &&  <div 
            className='absolute top-2 right-2 size-8 flex justify-center items-center bg-white rounded-full p-2 shadow-md '>
                <i className="ri-heart-line text-2xl hover:text-red-600"
                    onClick={()=>adding()}
                ></i>
            </div>}

            {!fav &&  <div 
            className='absolute top-2 right-2 size-8 flex justify-center items-center bg-white rounded-full p-2 shadow-md '>
                <i className="ri-heart-fill text-2xl text-red-600"
                    onClick={()=>adding()}
                ></i>
            </div>

            }



                <div className='absolute bottom-2 left-2 bg-gray-200 rounded-3xl p-2 shadow-md'>
                    <p className='text-sm'>2 Servings</p>
                </div>
            </div>

            <div className='mt-2 w-full flex flex-col justify-items-start '>
                <h2 className='text-xl font-bold text-gray-800 mt-2'>{strMeal}</h2>
                <p className='text-gray-600 mt-1'>{strCategory}</p>
                <p className='text-gray-600 mt-1'>{strArea}</p>
            </div>

            <div className='flex flex-wrap gap-2 mt-2 w-full justify-items-start px-3'>              
                 <span className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm'>{strIngredient1}</span>
                 <span className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm'>{strIngredient2}</span>
            </div>

        </div>

    )
}

export default ReceipeCard
