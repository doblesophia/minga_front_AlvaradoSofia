import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/Index.jsx'
import Layout from '../layouts/Layout.jsx'
import Author from '../pages/Author.jsx'



    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
             children: [
                 {
                     path: "/",
                     element: <Index/>
                 },
                 {
                    path:"/authors/me",
                    element: <Author/>
                 }
             ]
        }
       

    ])

export default router