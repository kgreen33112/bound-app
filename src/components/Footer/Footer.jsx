import { NavLink } from 'react-router-dom';
import './Footer.css';
import { LuCompass, LuHouse, LuSearch } from "react-icons/lu";

function Footer() {
    return (
        <div className="footer">
            <NavLink 
                to="/"
                className={({ isActive }) => 
                    isActive ? "footer-link active" : "footer-link"
                }
            >
                <LuHouse />
            </NavLink>
            
            <NavLink 
                to="/discover"
                className={({ isActive }) =>
                    isActive ? "footer-link active" : "footer-link"
                }
            >
                <LuCompass />
            </NavLink>
            <NavLink 
                to="/search"
                className={({ isActive }) => 
                    isActive ? "footer-link active" : "footer-link" 
                }
            >
                <LuSearch />
            </NavLink>
        </div>
    )
}

export default Footer