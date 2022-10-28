import React from 'react'
import profilePic from "../asset/profile__img.png"
import threeDots from "../asset/3dot_pressed.png"
import share from "../asset/share.png"
import '../App.css';

export default function Header() {
  return (
    <div className='header'>
        <img src={profilePic} alt="" id='profile_img'/>
        <h2 id='twitter'>Patrick Akuagwu</h2>
        <h2 id='slack'>Patrick</h2>
        <img src={threeDots} alt="" className='threeDots'/>
        <img src={share} alt="" className='share'/>

    </div>
  )
}
