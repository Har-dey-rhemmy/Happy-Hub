// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../chat-Styles/settings.css"
import logo from '../login-assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import Log from "../chat-assets/bx_log-out.svg"
import profile from "../chat-assets/iconamoon_profile-fill.svg"
import Security from "../chat-assets/Security.svg"
import Avatar from "../chat-assets/avatar.png"
import '../chat-Styles/ai.css'
function Settings() {
  return (
    <div className='Settings'>
        <div className='settings-container'>
            <div className='nav-container'>
                <nav>
                    <div className='logo-container'>
                    <img src={logo} alt="logo" style={{
                        height:80,
                        width:80,
                    }}></img>
                    < h1>Settings</h1>
                    </div>
                    <div className='links'>
                        <NavLink className='link-decor'><Link className="decor"><img src={profile}></img>Profile</Link></NavLink>
                        <NavLink className='link-decor'><Link className="decor"><img src={Security}></img>Security</Link></NavLink>
                        <NavLink className='link-decor'><Link className="decor"><img src={Log}></img>Log Out</Link></NavLink>
                    </div>
                </nav>
            </div>
            <div className='profile-container'>
                    <img src={Avatar}></img>
                <div className='profile-inner'>
                    <h1>Contact Details</h1>
                    <form className='profile-input'>
                        <div className='left'>
                            <label className='fname'>First Name</label>
                            <input className='finput'></input>
                            <label className='mail'>Email</label>
                            <input className='mail-input'></input>
                            <label className='mail-1'>Emergency email 1</label>
                            <input className='mail-1-input'></input>
                            <label className='mail-2'>Emergency email 2</label>
                            <input className='mail-2-input'></input>
                            <button>Save Changes</button>
                        </div>
                        <div className='right'>
                            <label className='lname'>Last Name</label>
                            <input className="linput"></input>
                            <label className='Date'>Date of Birth</label>
                            <input className='DOB' type='date'></input>
                            <label className='num-1'>Emergency Number 1</label>
                            <input className='num-1-input'></input>
                            <label className='num-2'>Emergency Number 2</label>
                            <input className='num-2-input'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings