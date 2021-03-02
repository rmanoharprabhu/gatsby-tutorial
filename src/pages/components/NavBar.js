import { Link } from 'gatsby'
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <h2>Web Warrior</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    )
}
