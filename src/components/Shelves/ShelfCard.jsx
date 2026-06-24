import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
import './ShelfCard.css';
import BookStack from "../Books/BookStack";
import { useNavigate } from "react-router-dom";

function ShelfCard ({ title, shelfId, books }) {

    const navigate = useNavigate();

    return (
        <Card 
            className="shelf-card"
            onClick={() => navigate(`/shelf/${shelfId}`)}
        >
            <h3 className="shelf-title">{title}</h3>
            <BookStack books={books} />
            <p>{books.length} books</p>
        </Card>
    )
}

export default ShelfCard