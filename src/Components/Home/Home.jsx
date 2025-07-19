import React, { use, useEffect, useState } from 'react'
import Input from '../Input/Input'
import ReceipeCard from '../ReceipeCard/ReceipeCard'
import Heading from '../Heading/Heading'
import Para from '../Paragraph/Para'
import { useForm } from 'react-hook-form'
import recipeService from '../../RecipeServive/RecipeService'

function Home() {

    const [Search,SetSearch] = useState("")   
    const [debouncesSearch, setDebouncedSearch] = useState("")
    const [Recipies, setRecipies] = useState(null)


    

    const gettingData = async ()=>{
        const data=await recipeService.getRecepies(Search)
        setRecipies(data.meals)
        
    }

    useEffect(() => {
        if (Search) {
         gettingData()
         SetSearch("")
        }
        
    }),[Search]

    useEffect(() => {
        const handler = setTimeout(() => {
            SetSearch(debouncesSearch)
        }, 1000)

        return () => {
            clearTimeout(handler)
        }
    }, [debouncesSearch])


    return (
        <div className='w-[100%] h-screen py-2 flex flex-col overflow-y-scroll hide-scrollbar'>
            <div className='p-2 w-[50%] mx-auto'>
                <Input 
                placeholder='Enter Receipe Name Here'
                onInput={(e) => setDebouncedSearch(e.target.value)}
                />
            </div>
            <Heading children={"Recomended Recipes"}/>
            <Para children={"Popular Choices"}/>
            <div className='w-full flex mt-5 flex-wrap  gap-3'>
               {
                
            
                Recipies && Recipies.map((rec)=>(

                    <ReceipeCard
                    className='w-[30%] gap-4'
                        key={rec.idMeal}
                        id={rec.idMeal}
                        strMeal={rec.strMeal}
                        strCategory={rec.strCategory}
                        strArea={rec.strArea}
                        strMealThumb={rec.strMealThumb}
                        strTags={rec.strTags}
                        strYoutube={rec.strYoutube}
                        strIngredient1={rec.strIngredient1}
                        strIngredient2={rec.strIngredient2}
                        fav={true}
                    />
                ))
               }
            </div>
        </div>
    )
}

export default Home
