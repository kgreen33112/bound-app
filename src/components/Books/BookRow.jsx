import './BookRow.css';
import { Link } from "react-router-dom";
import fallbackCover1 from '../../assets/images/fallbackCover1.png';

function BookRow({ title, books }) {
    return (
        <section className="book-row">
            <h3 className="recommendation-text">{title}</h3>

            <div className="book-row-scroll">
                {books.map(book => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <img
                            className="book-row-cover"
                            key={book.id}
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                            onError={(e) => {
                                e.currentTarget.src = fallbackCover1;
                            }}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default BookRow