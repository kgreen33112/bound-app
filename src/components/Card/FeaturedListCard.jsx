import { useNavigate } from 'react-router-dom'
import './FeaturedListCard.css'
import Card from './Card';
import BookStack from '../Books/BookStack';

function FeaturedListCard({ listId, title, books }) {
    const navigate = useNavigate();

    return (
        <Card
            className="featured-list-card"
            onClick={() => navigate(`/featured/${listId}`)}>
                <h3 className="featured-list-title">{title}</h3>
                <p className="featured-list-text">{books.length}</p>
                <BookStack books={books} />
            </Card>
    )
}

export default FeaturedListCard