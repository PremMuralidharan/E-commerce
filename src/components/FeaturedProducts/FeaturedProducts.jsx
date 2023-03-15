import React from 'react'
import Card from '../Card/Card'

export default function FeaturedProducts() {
  
  const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ]
  return (
    <div className='featuredproducts'>
        <div className="top">
            <h1>Trending Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi repellat cum officiis eos quia. Quidem itaque voluptatem voluptate autem obcaecati rem sed laudantium ullam dolorum. Aperiam eveniet assumenda magni! Ea?</p>
        </div>
        <div className="bot">
            {data.map((item)=> (<Card item={item}></Card>))}
        </div>
    </div>
  )
}
