import './Footer.css';
import { LuCompass, LuHouse, LuSearch } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <NavLink 
                to="/"
                className={({ isActive }) => 
                    isActive ? "footer-link active" : "footer-link"
                }
                aria-label="Home"
            >
                <LuHouse />
            </NavLink>
            
            <NavLink 
                to="/discover"
                className={({ isActive }) =>
                    isActive ? "footer-link active" : "footer-link"
                }
                aria-label="Discover"
            >
                <LuCompass />
            </NavLink>
            <NavLink 
                to="/search"
                className={({ isActive }) => 
                    isActive ? "footer-link active" : "footer-link" 
                }
                aria-label="Search"
            >
                <LuSearch />
            </NavLink>
        </footer>
    )
}

export default Footer