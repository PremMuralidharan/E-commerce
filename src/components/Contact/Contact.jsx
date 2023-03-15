import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Contact() {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>Be in touch with us</span>
        <div>
            <input type="text" placeholder='Enter your email' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon></FacebookIcon>
          <InstagramIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <PinterestIcon/>
        </div>
      </div>
    </div>
  )
}
