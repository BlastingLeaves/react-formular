import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
