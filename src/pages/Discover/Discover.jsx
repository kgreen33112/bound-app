import { discoverRows } from '../../assets/data/discoverRows';
import { books } from '../../assets/data/books';
import BookRow from '../../components/Books/BookRow';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Discover.css';
import FeaturedListCard from '../../components/Card/FeaturedListCard';
import featuredLists from '../../assets/data/featuredLists';

function Discover ({ books }) {
    
    return (
        <main className="main-content">
            <SectionTitle>Discover</SectionTitle>
            
            <div className="book-row-container">
                {discoverRows.map((row) => {
                    const rowBooks = row.bookIds.map((id) => books[id]);
                    return (
                        <BookRow
                            key={row.id}
                            title={row.title}
                            books={row.bookIds.map((id) => books[id])}
                       />
                    );
                })}
            </div>
            {featuredLists.map((list) => {
                const listBooks = list.bookIds.map(
                    (id) => books[id]
                );

                return (
                    <FeaturedListCard
                        key={list.id}
                        listId={list.id}
                        title={list.title}
                        books={listBooks}
                    />
                )
            })}
        </main>
    )
}

export default Discover