import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {

    const navbar = [
        {
            path:"/",
            element:"Home"
        },
        {
            path:"/products",
            element:"products"
        },
        {
            path:"/login",
            element:"Login"
        },
        {
            path:"/register",
            element:"Register"
        },
        {
            path:"/post",
            element:"PostData"
        }
    ]


  return (
    <div className='navbar'>
        {
            navbar?.map((item)=>(
               <Link to={item.path}> <div className='navbar-links'>
                    <div>{item.element}</div>
                </div></Link>
            ))
        }
    </div>
  )
}

export default Navbar