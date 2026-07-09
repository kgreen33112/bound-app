import './Header.css';
import BookA from '../../assets/images/BookA.png';
import { LuCirclePlus, LuFilter, LuLibrary, LuScanSearch } from 'react-icons/lu';
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
                    <NavLink 
                        to="/library"
                        aria-label="Library"
                    >
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
                <Link 
                    to="/search"
                    aria-label="Search"
                >
                    <LuCirclePlus className="header-icon" />
                </Link>
                <nav className="desktop-nav">
                    <NavLink 
                        to="/" 
                        className="nav-item"
                        aria-label="Home"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/library" 
                        className="nav-item"
                        aria-label="Library"
                    >
                        Library
                    </NavLink>
                    <NavLink 
                        to="/discover" 
                        className="nav-item"
                        aria-label="Discover"
                    >
                        Discover
                    </NavLink>
                    <NavLink 
                        to="/search" 
                        className="nav-item"
                        aria-label="Search"
                    >
                        Search
                    </NavLink>
                </nav>
            </div>
            <div className="header-search">
                <Link to="/search" aria-label="Search books">
                    <LuScanSearch className="search-icon" />  
                </Link>                   
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="search" className="sr-only"></label>
                        <input 
                            className="search-bar" 
                            id="search-bar"                    
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search books, authors, genres..."
                            aria-label="Search books"
                        />
                    </form>
                <LuFilter className="filter-icon" aria-label="Filter"/>
            </div>
        </header>
    )
}

export default Header