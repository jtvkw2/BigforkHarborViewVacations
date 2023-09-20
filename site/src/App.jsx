import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ResponsiveAppBar from './components/Navbar';
import Home from './pages/home';
import Rental1 from './pages/rental1';
import Rental2 from './pages/rental2';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import ErrorPage from './pages/error_page'

const pages = [
  {
    name : "Home",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    name : "Rental 1",
    path: "/rental1",
    element: <Rental1 />
  },
  {
    name : "Rental 2",
    path : "/rental2",
    element : <Rental2 />
  },
  {
    name : "Contact",
    path : "/contact",
    element : <Contact />
  },
  {
    name : "FAQ",
    path : "/faq",
    element : <FAQ />
  }
]



const router = createBrowserRouter(pages);

function App() {
  return (
    <>
      <ResponsiveAppBar pages = {pages}/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
