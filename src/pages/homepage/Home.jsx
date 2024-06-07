import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { HeroSection } from '../HeroSection/HeroSection'
import { ProductRatings } from '../ProductRatings/ProductRatings'
import { AboutUs } from '../AboutUs/AboutUs'
import { Services } from '../Services/Services'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ProductRatings/>
        <AboutUs/>
        <Services/>
    </div>
  )
}
