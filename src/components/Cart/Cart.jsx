import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Cart() {
  
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: 199
        },
        {
            id: 2,
            price: 89,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map((item)=>(
        <div className="item">
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis alias iure in doloremque odio </p>
                <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart </span>
    </div>
  )
}
