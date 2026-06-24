import './Search.css';
import { Link, useSearchParams } from "react-router-dom";


function SearchResults({ books }) {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const searchResults = Object.values(books).filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="main-content">
            {query && <p>Results for "{query}"</p>}

            <div className="search-results">
                {searchResults.map((book) => (
                    <Link
                        key={book.id}
                        to={`/books/${book.id}`}
                        className="search-result"
                    >
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                        />
                           <div>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default SearchResults