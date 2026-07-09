import './ShelfCard.css';
import Card from "../Card/Card";
import BookStack from "../Books/BookStack";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from 'react';

function ShelfCard ({ title, shelfId, canDelete, books, onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);

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

                {canDelete && !showConfirm && (
                    <button 
                        type="button"
                        className="delete-shelf-btn"
                        onClick={() => setShowConfirm(true)}
                    >
                        <LuTrash2 aria-hidden="true" /> Delete
                    </button>
                )}

                {showConfirm && (
                    <div className="delete-confirm">
                        <p className="delete-true">Delete "{title}"?</p>

                        <button 
                            type="button" 
                            className="shelf-cancel-btn"
                            onClick={() => setShowConfirm(false)}
                        >
                            Cancel
                        </button>

                        <button 
                            type="button"
                            className="shelf-delete-btn"
                            onClick={() => onDelete(shelfId)}
                        >
                            Delete Shelf
                        </button> 
                    </div>
                )}
            </Card>
    )
}

export default ShelfCard