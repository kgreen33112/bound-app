import { LuStar } from "react-icons/lu";
import './StarRating.css';

function StarRating({ rating, size=16 }) {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <LuStar
                    key={star}
                    className={
                        star <= rating
                        ? "star-filled"
                        : "star"
                    }
                    size={size}
                />
            ))}
        </div>
    )
}

export default StarRating