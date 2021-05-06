import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        
        <nav className="navbar shadow fixed-top navbar-expand-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact Book
                </Link>
                <div>
                    <Link className="btn btn-light ml-auto" to="/AddContact">Create Contact</Link>
                </div>
            </div>
        </nav>  
        
    )
}

export default Navbar
