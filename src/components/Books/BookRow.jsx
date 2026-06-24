import './BookRow.css';
import { Link } from "react-router-dom";

function BookRow({ title, books }) {
    return (
        <section className="book-row">
            <h3 className="recommendation-text">{title}</h3>

            <div className="book-row-list">
                {books.map(book => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <img
                            key={book.id}
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default BookRow