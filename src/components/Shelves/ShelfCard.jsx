import './ShelfCard.css';
import Card from "../Card/Card";
import BookStack from "../Books/BookStack";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function ShelfCard ({ title, shelfId, canDelete, books, onDelete }) {

    return (
        <Card className="shelf-card">
            <Link
                to={`/shelf/${shelfId}`}
                className="shelf-card-link"
            >
                <h3 className="shelf-title">{title}</h3>
                <BookStack books={books} />
                <p>{books.length} books</p>
            </Link>

                {canDelete && (
                    <button 
                        type="button"
                        className="delete-shelf-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(shelfId);
                        }}
                    >
                        <LuTrash2 aria-hidden="true" /> Delete
                    </button>
                )}
            </Card>
    )
}

export default ShelfCard