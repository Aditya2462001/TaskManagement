import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ buttonName }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Task Management</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarSupportedContent">
                    <Link to="/" className='btn btn-success flex-end'>{buttonName}</Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar