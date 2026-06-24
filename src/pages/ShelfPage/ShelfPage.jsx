import { useParams, Link } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import "./ShelfPage.css";

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

    const shelfBooks = Object.values(books).filter(
        (book) => book.status === shelfId
    );

    return (
        <main className="main-content">
            <h1>{shelfTitle}</h1>

            {shelfBooks.map((book) => (
                <Link key={book.id} to={`/books/${book.id}`}>
                    <div key ={book.id} className="shelf-cover-card">
                        <img 
                            className="shelf-book-cover" 
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                        />
                        <div className="shelf-book-info">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <StarRating size={14} rating={book.rating} />  
                        </div>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default ShelfPage