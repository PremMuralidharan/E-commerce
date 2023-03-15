import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <div className='home'>
      <Slider></Slider>
      <FeaturedProducts></FeaturedProducts>
      <Categories></Categories>
    </div>
  )
}
