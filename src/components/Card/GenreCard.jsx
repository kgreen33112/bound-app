import Card from './Card';
import './GenreCard.css';
import { Link } from "react-router-dom";

function GenreCard() {
    return (
        <div className="genre-card">
            <Link to="/genres/classics">
                <Card className="genre-btn">Classics</Card>
            </Link>
            <Link to="/genres/fantasy">
                <Card className="genre-btn">Fantasy</Card>
            </Link>
            <Link to="/genres/romance">
                <Card className="genre-btn">Romance</Card>
            </Link>
            <Link to="/genres/fiction">
                <Card className="genre-btn">Fiction</Card>
            </Link>
            <Link to="/genres/nonfiction">
                <Card className="genre-btn">Non-Fiction</Card>
            </Link>
            <Link to="/genres/young adult">
                <Card className="genre-btn">Young Adult</Card>
            </Link>
        </div>
    )
}

export default GenreCard