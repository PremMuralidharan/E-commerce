import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({item}) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
        <div className="card" key={item.key}>
            <div className='image'>
                <span>Item</span>
                <img src={item.img} alt="" className='mainImg'/>
                <img src={item.img2} alt="" className="secondImg"/>
            </div>
            <h2>item</h2>
            <div className="price">
                <h3 className='oldprice'>19</h3>
                <h3 className='newprice'>12</h3>
            </div>
        </div>
    </Link>
  )
}
