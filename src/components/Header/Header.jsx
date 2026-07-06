import './Header.css';
import { LuCirclePlus, LuCompass, LuFilter, LuHouse, LuLibrary, LuScanSearch, LuSearch } from 'react-icons/lu';
import BookA from '../../assets/images/BookA.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Header () {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate(`/searchResults?q=${encodeURIComponent(searchTerm)}`);
    }

    return (
        <header className="header">
            <div className="header-top">
                    <NavLink to="/library">
                        <LuLibrary className="header-icon" />
                    </NavLink>
                <div className="header-center">
                    <h2 className="logo-text">Bound</h2>
                    <img
                        className="logo-img" 
                        src={BookA}
                        alt="Bound Logo"
                    />
                </div>
                <Link to="/search">
                    <LuCirclePlus className="header-icon" />
                </Link>
                <nav className="desktop-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/library">Library</NavLink>
                    <NavLink to="/discover">Discover</NavLink>
                    <NavLink to="/search">Search</NavLink>
                </nav>
            </div>
            <div className="header-search">
                <LuScanSearch className="search-icon" />                     
                <form onSubmit={handleSubmit}>
                    <input 
                        className="search-bar" 
                        id="search-bar"                    
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search books, authors, genres..."
                    />
                </form>
                <LuFilter className="filter-icon" />
            </div>
        </header>
    )
}

export default Header