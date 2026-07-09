import { LuBookmarkX } from 'react-icons/lu';
import './NotFound.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function NotFound () {
    return (
        <main className="main-content">
            <h1 className="sr-only">Page Not Found</h1>
            <Card className="not-found-card">
                <LuBookmarkX className="not-found-icon"/>
                <h2 className="not-found-text">We couldn't find what you were looking for.</h2>
                <Link to="/">
                    <Button className="primary-btn">Return Home</Button>
                </Link>
                <Link to="/library">
                    <Button className="primary-btn">Browse Library</Button>
                </Link>
            </Card>
        </main>
    )
}

export default NotFound;