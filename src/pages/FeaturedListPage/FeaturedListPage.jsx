import './FeaturedListPage.css';
import featuredLists from "../../assets/data/featuredLists";
import StarRating from "../../components/StarRating/StarRating";
import NotFound from "../../pages/NotFound/NotFound";
import { useParams, Link } from "react-router-dom";


function FeaturedListPage({ books }) {
    const { listId } = useParams();

    const list = featuredLists.find((list) => list.id === listId);

    if (!list) {
        return <NotFound />
    }

    const listBooks = list.bookIds.map((id) => books[id]);


    return (
        <main className="main-content">
            <h1>{list.title}</h1>

            {listBooks.map((book) => (
                <Link key={book.id} to={`/books/${book.id}`}>
                    <div key={book.id} className="list-cover-card">
                        <img
                            className="list-book-cover"
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={book.title}
                        />
                        <div className="list-book-info">
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <StarRating size={16} rating={book.rating} />
                        </div>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default FeaturedListPage