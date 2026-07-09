
import './Home.css';
import TheoOfGolden from '../../assets/images/TheoOfGolden.png'
import  { books } from '../../assets/data/books';
import { recommendationRows } from '../../assets/data/recommendationRows';
import DonutChart from '../../components/Progress/DonutChart';
import Button from '../../components/Button/Button';
import ProgressBar from '../../components/Progress/ProgressBar';
import Card from '../../components/Card/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BookRow from '../../components/Books/BookRow';
import UpdateProgressModal from '../../components/UpdateProgressModal/UpdateProgressModal';
import PageTitle from '../../components/PageTitle';
import { LuSparkles } from 'react-icons/lu';
import { Link } from "react-router-dom";
import { useState } from 'react';


function Home({ books, updateBookProgress }) {
    
    const currentRead = books["theo-of-golden"];
    const currentPage = currentRead.currentPage || 0;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const progressPercent = Math.round((currentPage / currentRead.totalPages) * 100);

    const readBooks = Object.values(books).filter(
        (book) => book.status === "read"
    );

    const challengeGoal = 52;

    const challengePercent = Math.round(
        (readBooks.length / challengeGoal) * 100
    );

    //modal save
    function handleSaveProgress(newPage) {
        updateBookProgress(currentRead.id, newPage);
    }

    return (
        <main className="main-content">
            <PageTitle>Home</PageTitle>
            <SectionTitle>Currently Reading</SectionTitle>
            <Card>
                <div className="currently-reading-content">
                    <Link to={`/books/${currentRead.id}`}>
                        <img 
                            className="lg-book-cover"
                            src={`https://covers.openlibrary.org/b/id/${currentRead.coverId}-L.jpg`}
                            alt={currentRead.title}
                            onError={(e) => {
                                e.currentTarget.src = TheoOfGolden;
                            }}
                        />
                    </Link>
                    
                    <div className="home-book-info">
                        <h3>{currentRead.title}</h3>
                        <p>{currentRead.author}</p>
                    <Link to={`/books/${currentRead.id}`}>
                        <Button>
                               Continue Reading
                        </Button>
                    </Link>
                    </div>
                </div>
                
            </Card>
            <div className="home-main-container">
                <div className="progress-home-container">
                    <SectionTitle className="section-subtitle">Progress</SectionTitle>
                    <Card className="progress-card">
                        <div className="donut-chart-container">
                            <DonutChart percent={progressPercent} size={140} />
                        </div>
                        <div className="progress-info">
                            <span className="donut-chart-stat">{progressPercent}% read</span>
                            <div className="progress-btn-container">
                                <Button
                                    className="progress-btn"
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
                </div>
                <div className="challenge-home-container">
                    <SectionTitle className="section-subtitle">Reading Challenge</SectionTitle>
                    <Card className="challenge-card">
                        <div className="challenge-title">2026 Reading Challenge: 52 Books</div>
                            <ProgressBar percent={challengePercent} />
                            <p className="challenge-stat">{readBooks.length} of {challengeGoal} books read</p>
                    </Card>
                </div>
            </div>
            
            <SectionTitle className="section-subtitle">Recommendations</SectionTitle>
            <div className="book-row-container">
                {recommendationRows.map((row) => (
                    <BookRow
                        key={row.id}
                        title={row.title}
                        books={row.bookIds.map((id) => books[id])}
                    />
                ))}
            </div>
            <div className="see-more-btn-container">
                <Link to="/discover">
                    <Button className="see-more-btn">
                        <LuSparkles className="btn-icon"/>
                        See More
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default Home;