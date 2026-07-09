import './BookDetails.css';
import { books } from '../../assets/data/books';
import fallbackCover2 from '../../assets/images/fallbackCover2.png';
import Card from '../../components/Card/Card';
import StarRating from "../../components/StarRating/StarRating";
import NotFound from "../../pages/NotFound/NotFound";
import { useParams } from "react-router-dom";

function BookDetails({ books, shelves, updateBookStatus, updateBookRating }) {
    const { bookId } = useParams();
    const book = books[bookId];

    if (!book) {
        return <NotFound />;
    }
    
    return (
        <main className="main-content">
            <Card className="main-book-card">
                <img 
                    className="lg-book-cover" 
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`}
                    alt={book.title}
                    onError={(e) => {
                        e.currentTarget.src = fallbackCover2;
                    }}
                />
                <div className="main-book-details">
                    <div className="book-info">
                        <h1>{book.title}</h1>
                        <p>{book.author}</p>
                    </div>
                    <StarRating 
                        size={24} 
                        rating={book.rating} 
                        onRate={(newRating) => updateBookRating(book.id, newRating)}
                    />
                
                    <label 
                        className="sr-only" 
                        htmlFor="book-status">Shelf Status</label>

                    <select
                        className="status-selector"
                        id="book-status"
                        value={book.status}
                        onChange={(e) => updateBookStatus(book.id, e.target.value)}
                    >
                        <option value="none">Not in your library</option>
                        
                        {shelves.map((shelf) => (
                            <option key={shelf.id} value={shelf.id}>
                                {shelf.title}
                            </option>
                        ))}
                    </select>
                </div>
            </Card>
            <div className="book-genres">
                {book.genres.map((genre) => (
                    <span key={genre} className="genre-pill">
                        {genre}
                    </span>
                ))}
            </div>
            <div className="book-extra-info">
                <Card className="summary-card">
                    <h2>Summary</h2>
                    <p>{book.summary}</p>
                </Card>

                <Card className="metadata-card">
                    <h2>More Information:</h2>
                    <div className="metadata-row">
                        <span className="meta-label">Number of Pages:</span>
                        <span className="meta-value">{book.totalPages}</span>
                    </div>
                    <div className="metadata-row">
                        <span className="meta-label">Published in</span>
                        <span className="meta-value">{book.year_published}</span>
                    </div>
                    <div className="metadata-row">
                        <span className="meta-label">Literary Awards:</span>
                        <div className="meta-value awards-value">
                            {book.literary_awards.map((award) => (
                            <span className="award-item" key={award}>
                                {award}</span>
                            ))}
                        </div>
                    </div>
                    <div className="metadata-row">
                        <span className="meta-label">Series:</span>
                        <span className="meta-value">{book.series || "Standalone"}</span>  
                    </div>
                </Card>
            </div>
            <Card className="review-card">
                <h2>Reviews</h2>
                {Object.values(book.reviews || {}).map((review) => (
                    <div className="single-review" key={review.id || review.name}>
                        <span className="review-avatar">
                            {review.avatar}
                        </span>

                        <div className="review-content">
                            <h4>{review.name}</h4>
                            <StarRating 
                                rating={review.review_rating} 
                                size="16" 
                                aria-label={`${review.review_rating} out of 5 stars`}
                            />
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </Card>
        </main>
    )
}

export default BookDetails