import './Search.css';
import { genreRows } from '../../assets/data/genreRows';
import { books } from '../../assets/data/books';
import GenreCard from '../../components/Card/GenreCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import BookRow from '../../components/Books/BookRow';
import PageTitle from '../../components/PageTitle';
import { LuSparkles } from 'react-icons/lu';

function Search() {
    
    return (
        <main className="main-content">
            <PageTitle>Search</PageTitle>
            <section className="genre-section">
                <SectionTitle>Explore Popular Genres</SectionTitle>
                <div className="genre-feature">
                    <GenreCard />
                    <div className="explore-btn-container">
                        <Button className="explore-btn">
                            <LuSparkles />
                            Explore All Genres
                        </Button>
                    </div>
                </div>
            </section>
            <div className="book-row-container">
                {genreRows.map((row) => (
                    <BookRow
                        key={row.id}
                        title={row.title}
                        books={row.bookIds.map((id) => books[id])}
                    />
                ))}
            </div>
        </main>
    )
}

export default Search