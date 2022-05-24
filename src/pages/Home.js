import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import SliderImg from '../components/SliderImg'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SliderImg />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home

