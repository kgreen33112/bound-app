import './AddShelfModal.css';
import { useState } from "react";

function AddShelfModal({ onClose, onSave }) {
    const [shelfName, setShelfName] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedName = shelfName.trim();
        
        if (!trimmedName) {
            setError("Please enter a shelf name.");
            return;
        }

        const success = onSave(trimmedName);

        if (success) {
            onClose();
        } else {
            setError("A shelf with that name already exists.");
        }
    }

    const MAX_SHELF_NAME_LENGTH = 30;

    

    return (
        <div 
            className="modal-overlay" 
            role="dialog" 
            aria-modal="true"
            aria-labelledby="add-shelf-title"
        >
            <form className="add-shelf-modal" onSubmit={handleSubmit}>
                <h2 id="add-shelf-title">Add a Shelf</h2>

                <label htmlFor="shelf-name">Shelf Name:</label>
                <input
                    id="shelf-name"
                    type="text"
                    value={shelfName}
                    maxLength={MAX_SHELF_NAME_LENGTH}
                    onChange={(e) => {
                        setShelfName(e.target.value);
                        setError("");
                    }}
                    placeholder="Favorites, Mysteries, Summer Reads..."
                />
                {error && (
                    <p className="form-error" role="alert">{error}</p>
                )}

                <p className="character-count">
                    {MAX_SHELF_NAME_LENGTH - shelfName.length} characters remaining
                </p>

                <div className="modal-actions">
                    <button 
                        type="button" 
                        onClick={onClose}
                        className="cancel-btn">
                            Cancel
                    </button>
                    <button 
                        type="submit"
                        className="save-btn">
                            Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddShelfModal;