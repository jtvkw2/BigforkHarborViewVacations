import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme'
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/Navbar';
import Home from './pages/home';
import Cabin from './pages/cabin';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import ErrorPage from './pages/error_page'

const cabin1 = {
  title: "Marina Cay Condo",
  subtitle : "Entire condo in Bigfork, Montana",
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
    {src : "/cabin1/6.webp"},
    {src : "/cabin1/7.webp"},
    {src : "/cabin1/8.webp"},
    {src : "/cabin1/9.webp"},
    {src : "/cabin1/10.webp"},
    {src : "/cabin1/11.webp"},
    {src : "/cabin1/12.webp"},
    {src : "/cabin1/13.webp"},
    {src : "/cabin1/14.webp"}
  ],
  sleepingArrangements: [
    {
      name: 'Bedroom 1',
      beds: [
        { type: 'Queen bed', count: 1 },
      ]
    },
    {
      name: 'Bedroom 2',
      beds: [
        { type: 'Single bed', count: 2 },
      ]
    },
  ],
  amenities : [
    "Free Parking",
    "Wi-Fi",
    "Kitchen",
    "Waterfront",
    "Dedicated Workspace",
    "Washer",
    "Pool",
    "Hot Tub"
  ],
  num_guests : 6,
  num_bedrooms : 2,
  num_beds : 4,
  num_baths : 2,
  amount_per_night : 300,
};

const cabin2 = {
  title: "Luxury Condo on Flathead Lake",
  subtitle : "Entire home in Bigfork, Montana",
  rating: 4.93,
  reviews: 28,
  description: "Beautiful 2 story 3 bedroom luxury condo on Flathead lake in Bigfork Harbor. Bring your boat or choose from a wide variety of watercraft rentals from the resort right next to your private dock. Dock is a short walk from the front door through the Marina Cay property. Spacious and beautifully furnished with lake views from two private balconies. Walk to charming downtown Bigfork with it's many shops, galleries, boutiques, fine restaurants, breweries and distilleries. Pool/hot tub open in summer.",
  hostImage: "/host.webp",
  hostName: "Faren",
  images: [
    {src : "/cabin2/1.webp"},
    {src : "/cabin2/2.webp"},
    {src : "/cabin2/3.webp"},
    {src : "/cabin2/4.webp"},
    {src : "/cabin2/5.webp"},
    {src : "/cabin2/6.webp"},
    {src : "/cabin2/7.webp"},
    {src : "/cabin2/8.webp"},
    {src : "/cabin2/9.webp"},
    {src : "/cabin2/10.webp"},
    {src : "/cabin2/11.webp"},
    {src : "/cabin2/12.webp"}
  ],
  amenities : [
    "Waterfront",
    "Free Parking",
    "Wi-Fi",
    "Kitchen",
    "Dedicated Workspace",
    "Washer",
    "Lake Access"
  ],
   sleepingArrangements: [
    {
      name: 'Bedroom 1',
      beds: [
        { type: 'King bed', count: 1 },
      ]
    },
    {
      name: 'Bedroom 2',
      beds: [
        { type: 'King bed', count: 1 },
      ]
    },
    {
      name: 'Bedroom 3',
      beds: [
        { type: 'Queen bed', count: 1 },
      ]
    },
  ],
  num_guests : 7,
  num_bedrooms : 3,
  num_beds : 4,
  num_baths : 2.5,
  amount_per_night : 400,
};


const pages = [
  {
    name : "Home",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    name : "Marina Cay Condo",
    path: "/marina-cay",
    element: <Cabin cabin={cabin1} />
  },
  {
    name : "Flathead Lake Condo",
    path : "/flathead-lake",
    element : <Cabin cabin={cabin2} />
  },
  {
    name : "Contact",
    path : "/contact",
    element : <Contact />
  },
  // {
  //   name : "FAQ",
  //   path : "/faq",
  //   element : <FAQ />
  // }
]



const router = createBrowserRouter(pages);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar pages = {pages}/>
      <Box sx={{mb: 15}}/>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
