import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
import './ShelfCard.css';
import BookStack from "../Books/BookStack";
import { useNavigate } from "react-router-dom";
import { LuTrash2 } from "react-icons/lu";

function ShelfCard ({ title, shelfId, canDelete, books, onDelete }) {
    const navigate = useNavigate();

    return (
        <Card 
            className="shelf-card"
            onClick={() => navigate(`/shelf/${shelfId}`)}
        >
            <h3 className="shelf-title">{title}</h3>
            <BookStack books={books} />
            <p>{books.length} books</p>
            
            {canDelete && (
                <button 
                    type="button"
                    className="delete-shelf-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(shelfId);
                    }}
                ><LuTrash2 /> Delete
                </button>
            )}
            
        </Card>
    )
}

export default ShelfCard