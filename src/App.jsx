import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ResponsiveAppBar from './components/Navbar';
import Home from './pages/home';
import Cabin from './pages/cabin';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import ErrorPage from './pages/error_page'

const cabin1 = {
  title: "Marina Cay Condo",
  rating: 4.96,
  reviews: 26,
  description: "Beautiful 2 bedroom condo in the Marina Cay Resort in Bigfork Montana. Enjoy unobstructed views of the harbor from the living room balcony and Master Bedroom. Boat rentals available onsite for you to explore Flathead Lake. Walk to the charming town of Bigfork and enjoy the many shops, galleries and restaurants located downtown. One of the best locations in the complex available for rent.",
  hostImage: "/host.webp",
  hostName: "Faren",
  images: [
    {src : "/cabin1/1.webp"},
    {src : "/cabin1/2.webp"},
    {src : "/cabin1/3.webp"},
    {src : "/cabin1/4.webp"},
    {src : "/cabin1/5.webp"},
    {src : "/cabin1/6.webp"}
  ],
  amenities : [
    "Free Parking",
    "Wi-Fi",
    "Kitchen",
    "Washer",
    "Heating",
    "Air Conditioning"
  ]
};

const cabin2 = {
  title: "Cozy Cabin in the Woods",
  rating: 4.5,
  reviews: 120,
  description: "Relax in this serene cabin, surrounded by lush greenery and the sounds of nature. Equipped with modern amenities and situated near local attractions.",
  hostImage: "/path-to-host-image.jpg",
  hostName: "John Doe",
  image: "/path-to-cabin-image.jpg"
};


const pages = [
  {
    name : "Home",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    name : "Rental 1",
    path: "/marina-cay",
    element: <Cabin cabin={cabin1} />
  },
  {
    name : "Rental 2",
    path : "/flathead-lake",
    element : <Cabin cabin={cabin2} />
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
