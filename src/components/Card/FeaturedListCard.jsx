import './FeaturedListCard.css'
import Card from './Card';
import BookStack from '../Books/BookStack';
import { Link } from 'react-router-dom';

function FeaturedListCard({ listId, title, books }) {

    return (
        <Card className="featured-list-card">
            <Link 
                to={`/featured/${listId}`}
                className="featured-list-link"
            >
                <h3 className="featured-list-title">{title}</h3>
                <p className="featured-list-text">{books.length}</p>
                <BookStack books={books} />
            </Link>
        </Card>
    )
}

export default FeaturedListCard