
import './Home.css';
import TheoOfGolden from '../../assets/images/TheoOfGolden.png'
import DonutChart from '../../components/Progress/DonutChart';
import Button from '../../components/Button/Button';
import ProgressBar from '../../components/Progress/ProgressBar';
import Card from '../../components/Card/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { LuSparkles } from 'react-icons/lu';
import BookRow from '../../components/Books/BookRow';
import  { books } from '../../assets/data/books';
import { recommendationRows } from '../../assets/data/recommendationRows';
import { Link } from "react-router-dom";
import { useState } from 'react';
import UpdateProgressModal from '../../components/UpdateProgressModal/UpdateProgressModal';

function Home({ books, updateBookProgress }) {
    
    const currentRead = books["theo-of-golden"];
    const currentPage = currentRead.currentPage || 0;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const progressPercent = Math.round((currentPage / currentRead.totalPages) * 100);

    //modal save
    function handleSaveProgress(newPage) {
        updateBookProgress(currentRead.id, newPage);
    }

    return (
        <main className="main-content">
            <SectionTitle>Currently Reading</SectionTitle>
            <Card>
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
                    
                <div className="book-info">
                    <h3>{currentRead.title}</h3>
                    <p>{currentRead.author}</p>
                </div>
                <Link to={`/books/${currentRead.id}`}>
                    <Button>
                           Continue Reading
                    </Button>
                </Link>
                
            </Card>
            <SectionTitle className="section-subtitle">Progress</SectionTitle>
            <Card>
                <div className="donut-chart-container">
                    <DonutChart percent={progressPercent} />
                </div>
                <span className="donut-chart-stat">{progressPercent}% read</span>
                <div className="progress-btn-container">
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
            </Card>
            <SectionTitle className="section-subtitle">Reading Challenge</SectionTitle>
            <Card>
                <div className="challenge-title">2026 Reading Challenge: 52 Books</div>
                <ProgressBar percent={17} />
                <p>8 out of 52 books read</p>
            </Card>
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