import './AddShelfModal.css';
import { useState } from "react";

function AddShelfModal({ onClose, onSave }) {
    const [shelfName, setShelfName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!shelfName.trim()) return;

        onSave(shelfName.trim());
        onClose();
    }

    return (
        <div 
            className="modal-overlay" 
            role="dialog" 
            aria-model="true"
            aria-labelledby="add-shelf-title"
        >
            <form className="add-shelf-modal" onSubmit={handleSubmit}>
                <h2 id="add-shelf-title">Add a Shelf</h2>

                <label htmlFor="shelf-name">Shelf Name:</label>
                <input
                    id="shelf-name"
                    type="text"
                    value={shelfName}
                    onChange={(e) => setShelfName(e.target.value)}
                    placeholder="Favorites, Mysteries, Summer Reads..."
                />

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