import './BookStack.css';

function BookStack({ books }) {
    return (
        <div className="book-stack">
            {books.slice(0, 3).map((book, index) => (
                <img
                    key={book.id}
                    className={`book-stack-cover book-stack-cover-${index}`}
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                    alt={book.title}
                />
            ))}
        </div>
    )
}

export default BookStack