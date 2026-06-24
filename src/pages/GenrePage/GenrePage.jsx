import './GenrePage.css';
import { useParams, Link } from "react-router-dom";
import Card from '../../components/Card/Card';

function GenrePage ({ books }) {
    const { genreId } = useParams();

    const genreBooks = Object.values(books).filter((book) => 
    book.genres?.some(
        (genre) => genre.toLowerCase() === genreId.toLowerCase()
    )
);

    return (
        <main className="main-content">
            <h1 className="genre-page-title">{genreId}</h1>
                {genreBooks.map((book) => (
                    <Card className="genre-page-card">
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <img
                                className="genre-book-cover"
                                src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                                alt={book.title}
                            />
                        </Link>
                        <div className="genre-page-info">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    </Card>
                ))}
        </main>
    )
}

export default GenrePage