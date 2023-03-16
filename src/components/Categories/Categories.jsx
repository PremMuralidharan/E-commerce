import React from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {



  return (
    <div className='categories'>
        <div className='item1'>
          <img  src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className='item2'>
          <img  src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
        <div className='item3'>
          <img  src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
        <div className='item4'>
          <img  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Men
            </Link>
          </button>
        </div>
        <div className='item5'>
          <img  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
        <div className='item6'>
          <img  src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
    </div>
  )
}
