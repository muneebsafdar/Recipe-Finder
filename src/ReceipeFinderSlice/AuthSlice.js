import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    status:false,
    userInfo:[],
    favouritesRecipies: []
}


const AuthSlice=createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        LogIn:(state,action)=>{
            
            state.status=true
            state.userInfo=action.payload
            console.log("Login action payload:", action.payload);
        
        },
        logOut:(state)=>{
            state.userInfo=null,
            state.status=false
        },
        Addingfavourites:(state, action)=>{
            console.log(action.payload.strMeal);
        
            state.favouritesRecipies=JSON.parse(localStorage.getItem("favourites")) || []
            state.favouritesRecipies=state.favouritesRecipies.filter(rec=> rec.strMeal !== action.payload.strMeal)
            state.favouritesRecipies=[...state.favouritesRecipies,action.payload]
            localStorage.setItem("favourites", JSON.stringify(state.favouritesRecipies));
        },
        loadingFavourites:(state)=>{
            const existingFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

            state.favouritesRecipies = existingFavourites;
        }
    }
})

export const {LogIn,logOut,Addingfavourites,loadingFavourites}=AuthSlice.actions
export const AuthReducers= AuthSlice.reducer