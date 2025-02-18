import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css"; 
import { FaHome, FaUser, FaClipboardList, FaCar, FaStore, FaBell, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="navbar">
                <Link to={"/home"}><img src={"/logo.jpeg"} alt="Logo" className="logo" /></Link>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
                <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/home" onClick={() => setMenuOpen(false)}><FaHome />Accueil</Link></li>
                    <li><Link to="/agent" onClick={() => setMenuOpen(false)}><FaUser /> Agent</Link></li>
                    <li><Link to="/mission" onClick={() => setMenuOpen(false)}><FaClipboardList /> Mission</Link></li>
                    <li><Link to="/véhicule" onClick={() => setMenuOpen(false)}><FaCar /> Véhicule</Link></li>
                    <li><Link to="/fournisseur" onClick={() => setMenuOpen(false)}><FaStore /> Fournisseur</Link></li>
                    <li><Link to="/notifications" onClick={() => setMenuOpen(false)}><FaBell /> Notifications</Link></li>
                    <li><button className="logout" onClick={() => setMenuOpen(false)}><FaSignOutAlt /> Déconnecter</button></li>
                </ul>
            </nav>
        </header>
    );
}
