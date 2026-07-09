import './BookStack.css';
import fallbackCover1 from '../../assets/images/fallbackCover1.png';

function BookStack({ books }) {
    return (
        <div className="book-stack">
            {books.slice(0, 3).map((book, index) => (
                <img
                    key={book.id}
                    className={`book-stack-cover book-stack-cover-${index}`}
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                    alt={book.title}
                    onError={(e) => {
                        e.currentTarget.src = fallbackCover1;
                    }}
                />
            ))}
        </div>
    )
}

export default BookStack