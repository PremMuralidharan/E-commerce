import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List';

export default function Products() {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  console.log({catId})
  return (
    <div className='products'>
      <div className="left">
        <div className="filteritem">
          <h2>Product categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="hat" />
            <label forHTML="hat">hat</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="tshirt" />
            <label forHTML="tshirt">tshirt</label>
          </div>
        </div>
        <div className="filteritem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteritem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="low" onChange={(e)=>setSort("asc")}/>
            <label forHTML="low">Price(low to high)</label>
          </div>
          <div className="inputItem"> 
            <input type="radio" id="high" onChange={(e)=>setSort("desc")}/>
            <label forHTML="high">Price(high to low)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}
 