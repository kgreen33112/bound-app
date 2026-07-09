import './Discover.css';
import { discoverRows } from '../../assets/data/discoverRows';
import { books } from '../../assets/data/books';
import featuredLists from '../../assets/data/featuredLists';
import BookRow from '../../components/Books/BookRow';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FeaturedListCard from '../../components/Card/FeaturedListCard';
import PageTitle from '../../components/PageTitle';

function Discover ({ books }) {
    
    return (
        <main className="main-content">
            <PageTitle>Discover</PageTitle>
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
            <div className="featured-list-container">
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
            </div>
        </main>
    )
}

export default Discover