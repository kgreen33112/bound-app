import { LuStar } from "react-icons/lu";
import './StarRating.css';

function StarRating({ rating, onRate, size=16 }) {
    const isInteractive = Boolean(onRate);

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className="star-btn"
                    disabled={!isInteractive}
                    onClick={() => onRate?.(star)}
                >
                    <LuStar
                        size={size}
                        className={star <= rating ? "star-filled" : "star"}
                        fill={star <= rating ? "currentColor" : "none"}
                    />
                </button>
            ))}
            
        </div>
    )
}

export default StarRating