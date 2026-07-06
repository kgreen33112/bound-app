import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Library.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import ProgressBar from '../../components/Progress/ProgressBar';
import ShelfCard from '../../components/Shelves/ShelfCard';
import { LuCirclePlus } from 'react-icons/lu';
import { useState } from "react";
import UpdateProgressModal from '../../components/UpdateProgressModal/UpdateProgressModal';
import { Link } from 'react-router-dom';


function Library ({ books, updateBookProgress }) {
        const currentRead = books["theo-of-golden"];
        const currentPage = currentRead.currentPage || 0;
        const progressPercent = Math.round((currentPage / currentRead.totalPages) * 100);
        const [isModalOpen, setIsModalOpen] = useState(false);

        const allBooks = Object.values(books);

        const currentlyReadingBooks = allBooks.filter(
            (book) => book.status === "currently-reading"
        );

        const wantToReadBooks = allBooks.filter(
            (book) => book.status === "want-to-read"
        );

        const readBooks = allBooks.filter(
            (book) => book.status === "read"
        );

        const comfortReadBooks = allBooks.filter(
            (book) => book.status === "comfort-reads"
        );

        const fiveStarVaultBooks = allBooks.filter(
            (book) => book.status === "5-star-vault"
        );

        
        //modal save
        function handleSaveProgress(newPage) {
            updateBookProgress(currentRead.id, newPage);
        }

        return (
            <main className="main-content">
                <SectionTitle>Currently Reading:</SectionTitle>
                <Card className="current-reading-card">
                    <Link key={currentRead.id} to={`/books/${currentRead.id}`}>
                        <img 
                            className="md-book-cover"
                            src={`https://covers.openlibrary.org/b/id/${currentRead.coverId}-M.jpg`}
                            alt={currentRead.title}
                        />
                    </Link>
                    <div className="info-container">
                        <div className="current-book-info">
                            <h3>{currentRead.title}</h3>
                            <p>{currentRead.author}</p>
                        </div>
                        <div className="progress-container">                                <p>Progress:</p>
                            <ProgressBar 
                                className="library-progress"
                                percent={progressPercent} />
                            <Button
                                onClick={() => setIsModalOpen(true)}>
                                Update Progress
                            </Button>
                            {isModalOpen && (
                                <UpdateProgressModal
                                    currentPage={currentPage}
                                    totalPages={currentRead.totalPages}
                                    onClose={() => setIsModalOpen(false)}
                                    onSave={handleSaveProgress}
                                />
                            )}
                        </div>
                    </div>
                </Card>
                <div className="shelf-container">
                    <ShelfCard
                        title="Want to Read"
                        shelfId="want-to-read"
                        books={wantToReadBooks}
                    />
                    <ShelfCard
                        title="Read"
                        shelfId="read"
                        books={readBooks}
                    />
                    <ShelfCard
                        title="Comfort Reads"
                        shelfId="comfort-reads"
                        books={comfortReadBooks}
                    />
                    <ShelfCard
                        title="5-Star Vault"
                        shelfId="5-star-vault"
                        books={fiveStarVaultBooks}
                    />
                </div>
                <Button className="add-shelf-btn">
                    <LuCirclePlus />
                    Add a Shelf
                </Button>
            </main>
        )
}

export default Library