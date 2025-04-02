import './css/Navigation.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="header-nav">
            <div id="toggle-nav" className="toggle-nav" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="nav-items" className={`nav-items ${menuOpen ? "show" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/Yugidex">Yu-Gi-Dex</Link>
                <Link to="/Forums">Forums</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    );
}

export default Navigation;
