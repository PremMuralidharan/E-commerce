import React , { useState } from 'react'
import Cart from '../Cart/Cart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

export default function Navbar () {

  const  [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className="item">
                    <img src="/img/en.png" alt="" />
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon> 
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Children</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/4">Accessories</Link>
                </div>
            </div>
            <div className='center'>
                <Link className='link' to="/">LAMASTORE</Link>
            </div>
            <div className='right'>
                <div className="item">
                    <Link className='link' to="/products/3">Homepage</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon></SearchIcon>
                    <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    <div className="carticon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}
