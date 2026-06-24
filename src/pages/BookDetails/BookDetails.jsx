import { useParams } from "react-router-dom";
import { books } from '../../assets/data/books';
import Card from '../../components/Card/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './BookDetails.css';
import StarRating from "../../components/StarRating/StarRating";

function BookDetails({ books, updateBookStatus }) {
    const { bookId } = useParams();
    const book = books[bookId];

    if (!book) {
        return <p>Book not found.</p>
    }
    
    return (
        <main className="main-content">
            <Card className="main-book-card">
                <img 
                    className="lg-book-cover" 
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`}
                    alt={book.title}
                />
                <div className="book-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
                <StarRating size={24} rating={book.rating} />
                
                <label className="status-selector-label" htmlFor="book-status"></label>

                <select
                    className="status-selector"
                    id="book-status"
                    value={book.status}
                    onChange={(e) => updateBookStatus(book.id, e.target.value)}
                >
                    <option value="none">Not in your library</option>
                    <option value="currently-reading">Currently Reading</option>
                    <option value="want-to-read">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="comfort-reads">Comfort Reads</option>
                    <option value="5-star-vault">5-Star Vault</option>
                    <option value="collections">Collections</option>
                </select>
            </Card>
            <div className="book-genres">
                {book.genres.map((genre) => (
                    <span key={genre} className="genre-pill">
                        {genre}
                    </span>
                ))}
            </div>
            <Card className="summary-card">
                <h3>Summary</h3>
                <p>{book.summary}</p>
            </Card>
            <Card className="review-card">
                <h3>Reviews</h3>
                {Object.values(book.reviews || {}).map((review) => (
                    <div className="single-review" key={review.id || review.name}>
                        <span className="review-avatar">
                            {review.avatar}
                        </span>

                        <div className="review-content">
                            <h4>{review.name}</h4>
                            <StarRating rating={review.review_rating} />
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </Card>
        </main>
    )
}

export default BookDetails