import React,{ StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider, useDispatch } from 'react-redux'
import store from './app/store.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AuthLayout from './Components/AuthLayout/Authlayout.jsx'

import LoginPage from './Pages/Login/Login.jsx'
import SignupPage from './Pages/Signup/Signup.jsx'
import Home from './Pages/Home/Home.jsx'
import Favourite from './Pages/Favourites/Favourite.jsx'
import Account from './Pages/Account/Account.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: '/favourite',
        element: (
          <AuthLayout authentication={true}>
            <Favourite />
          </AuthLayout>
        ),
      },
      {
        index: true, // This makes it the default route for "/"
        path:'/',
        element: (
          <AuthLayout authentication={true}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: '/account',
        element: (
          <AuthLayout authentication={true}>
            <Account />
          </AuthLayout>
        ),
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  
    < Provider store={store}>
      <StrictMode>
        <RouterProvider router={router}/>
      </StrictMode>
    </Provider>
)
