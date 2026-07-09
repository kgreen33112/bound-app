import "./ShelfPage.css";
import StarRating from "../../components/StarRating/StarRating";
import { LuHexagon } from "react-icons/lu";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import NotFound from "../NotFound/NotFound";

function ShelfPage({ books }) {
    const { shelfId } = useParams();

    const shelfTitles = {
        "want-to-read": "Want to Read",
        "currently-reading": "Currently Reading",
        "read": "Read",
        "comfort-reads": "Comfort Reads",
        "5-star-vault": "5-Star Vault",
    };

    const shelfTitle = shelfTitles[shelfId];

    if (!shelfTitle) {
        return <NotFound />
    }

    const shelfBooks = Object.values(books).filter(
        (book) => book.status === shelfId
    );

    const [sortBy, setSortBy] = useState("recently-added");

    const sortedBooks = [...shelfBooks].sort((a, b) => {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }

        if (sortBy === "author") {
            return a.author.localeCompare(b.author);
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <main className="main-content">
            <div className="shelf-top-info">
                <h1>{shelfTitle}</h1>
                <p className="shelf-title-count">{shelfBooks.length} books</p>
                <div className="shelf-filter-tabs">
                    <button 
                        className={sortBy === "recently-added" ? "sort-btn active" : "sort-btn"}
                        onClick={() => setSortBy("recently-added")}>
                            Recently Added
                    </button>
                    <LuHexagon className="spacing-icon" fill="#456481" />
                    <button 
                        className={sortBy === "title" ? "sort-btn active" : "sort-btn"}
                        onClick={() => setSortBy("title")}>
                            Title A-Z
                    </button>
                    <LuHexagon className="spacing-icon" fill="#456481" />
                    <button 
                        className={sortBy === "author" ? "sort-btn active" : "sort-btn"}
                        onClick={() => setSortBy("author")}>
                            Author
                    </button>
                    <LuHexagon className="spacing-icon" fill="#456481" />
                    <button 
                        className={sortBy === "rating" ? "sort-btn active" : "sort-btn"}
                        onClick={() => setSortBy("rating")}>
                            Rating
                    </button>
                </div>
            </div>

            {sortedBooks.map((book) => (
                <Link key={book.id} to={`/books/${book.id}`}>
                    <div key ={book.id} className="shelf-cover-card">
                        <img 
                            className="shelf-book-cover" 
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                        />
                        <div className="shelf-book-info">
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <StarRating size={20} rating={book.rating} />  
                        </div>
                        <div className="extra-book-genres">
                            {book.genres.map((genre) => (
                                <span key={genre} className="extra-genre-pill">
                                {genre}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default ShelfPage