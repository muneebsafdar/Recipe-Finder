import React, { useState, useEffect, useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadingFavourites } from '../../ReceipeFinderSlice/AuthSlice'
import ReceipeCard from '../ReceipeCard/ReceipeCard'
import Heading from '../Heading/Heading'




function Favourites() {

    const favourites=useSelector(state=>state.favouritesRecipies)
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(loadingFavourites())
    },[])
    

    return (
         <>
         <div className='w-[100%] h-screen py-2 overflow-y-scroll hide-scrollbar'>
            <Heading children={"Favourite Recipes"} className='text-4xl'/>
            <div className='w-full flex mt-5 flex-wrap  gap-3'>
               {
                favourites && favourites.map((rec,index)=>(

                    <ReceipeCard
                        className='w-[30%] gap-4'
                        key={index}
                        strMeal={rec.strMeal}
                        strCategory={rec.strCategory}
                        strArea={rec.strArea}
                        strMealThumb={rec.strMealThumb}
                        strTags={rec.strTags}
                        strYoutube={rec.strYoutube}
                        strIngredient1={rec.strIngredient1}
                        strIngredient2={rec.strIngredient2}
                        fav={false}
                    />
                ))
               }
            </div>
         </div>
         </>
         
    )
}

export default Favourites
