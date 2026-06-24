import GenreCard from '../../components/Card/GenreCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import BookRow from '../../components/Books/BookRow';
import './Search.css';
import { LuSparkles } from 'react-icons/lu';
import { genreRows } from '../../assets/data/genreRows';
import { books } from '../../assets/data/books';
import { Link, useSearchParams } from "react-router-dom";

function Search() {
    
    return (
        <main className="main-content">
            <SectionTitle>Explore Popular Genres</SectionTitle>
            <GenreCard />
            <div className="explore-btn-container">
                <Button className="explore-btn">
                    <LuSparkles />
                    Explore All Genres
                    </Button>
            </div>
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