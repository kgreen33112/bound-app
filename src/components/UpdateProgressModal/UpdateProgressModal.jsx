import "./UpdateProgressModal.css";
import { useState } from "react";

function UpdateProgressModal({ currentPage, totalPages, onClose, onSave }) {
    const [pageInput, setPageInput] = useState(currentPage);

    function handleSubmit(e) {
        e.preventDefault();

        const pageNumber = Number(pageInput);

        if (pageNumber < 0 || pageNumber > totalPages) {
            return;
        }

        onSave(pageNumber);
        onClose();
    }

    return (
        <div 
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="update-progress"
        >
            <form className="progress-modal" onSubmit={handleSubmit}>
                <h2 id="update-progress">Update Progress</h2>
                <label htmlFor="current-page">Current Page</label>

                <input
                    id="current-page"
                    type="number"
                    value={pageInput}
                    onChange={(e) => setPageInput(e.target.value)}
                    min="0"
                    max={totalPages}
                />

                <span>of {totalPages}</span>

                <div className="modal-actions">
                    <button className="cancel-btn" type="button" onClick={onClose}>Cancel</button>
                    <button className="submit-btn" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProgressModal