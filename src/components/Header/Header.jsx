import './Header.css';
import { LuCirclePlus, LuLibrary, LuScanSearch } from 'react-icons/lu';
import BookA from '../../assets/images/BookA.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Header () {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate(`/searchResults?q=${encodeURIComponent(searchTerm)}`);
    }

    return (
        <>
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
                <LuCirclePlus className="header-icon" />
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
            </div>
        </>
    )
}

export default Header