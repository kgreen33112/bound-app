import './Card.css';

function Card ({ className="", children, onClick }) {
    return (
            <div className={`content-card ${className}`} onClick={onClick}>
                {children}
            </div>
    )
}

export default Card