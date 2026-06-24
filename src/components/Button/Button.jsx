import './Button.css';

function Button ({ children, className="", onClick }) {
    return (
        <button
            className={`primary-btn ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button