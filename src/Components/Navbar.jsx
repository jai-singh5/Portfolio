import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
            <div className="left">
            <a href="/">Jai's Portfolio</a>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
    </nav>
    </div>
  )
}

export default Navbar
