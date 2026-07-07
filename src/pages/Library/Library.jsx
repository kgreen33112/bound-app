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
import AddShelfModal from '../../components/AddShelfModal/AddShelfModal';


function Library ({ books, updateBookProgress, shelves, addShelf, deleteShelf, canDelete }) {
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

        const [isAddShelfOpen, setIsAddShelfOpen] = useState(false);

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
                    {shelves.map((shelf) => {
                        const shelfBooks = Object.values(books).filter(
                            (book) => book.status === shelf.id
                        );

                        return (
                            <ShelfCard
                                key={shelf.id}
                                title={shelf.title}
                                shelfId={shelf.id}
                                canDelete={shelf.canDelete}
                                books={shelfBooks}
                                onDelete={deleteShelf}
                            />
                        );
                    })}
                </div>
                <Button 
                    className="add-shelf-btn"
                    onClick={() => setIsAddShelfOpen(true)}>
                    <LuCirclePlus />
                    Add a Shelf
                </Button>
                {isAddShelfOpen && (
                    <AddShelfModal
                        onClose={() => setIsAddShelfOpen(false)}
                        onSave={addShelf}
                    />
                )}
            </main>
        )
}

export default Library