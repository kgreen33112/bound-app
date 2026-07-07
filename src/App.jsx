import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import Library from './pages/Library/Library.jsx';
import Discover from './pages/Discover/Discover.jsx';
import Search from './pages/Search/Search.jsx';
import BookDetails from './pages/BookDetails/BookDetails.jsx';
import { useState, useEffect } from "react";
import { books as initialBooks } from "./assets/data/books.js";
import ScrollToTop from './components/Helpers/ScrollToTop.jsx';
import ShelfPage from './pages/ShelfPage/ShelfPage.jsx'
import SearchResults from './pages/Search/SearchResults.jsx';
import GenrePage from './pages/GenrePage/GenrePage.jsx';
import FeaturedListPage from './pages/FeaturedListPage/FeaturedListPage.jsx';

function App() {
  const [booksData, setBooksData] = useState(() => {
    const savedBooks = localStorage.getItem("booksData");

    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  });

  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(booksData));
  }, [booksData]);
  
  
  function updateBookProgress(bookId, newCurrentPage) {
    setBooksData((prevBooks) => ({
      ...prevBooks,
      [bookId]: {
        ...prevBooks[bookId],
        currentPage: newCurrentPage,
      },
    }));
  }

  function updateBookStatus(bookId, newStatus) {
    setBooksData((prevBooks) => ({
      ...prevBooks,
      [bookId]: {
        ...prevBooks[bookId],
        status: newStatus,
      },
    }));
  }

  const initialShelves = [
    { 
      id: "want-to-read", 
      title: "Want to Read",
      canDelete: false, 
    },
    { 
      id: "read", 
      title: "Read",
      canDelete: false, 
    },
    { 
      id: "comfort-reads", 
      title: "Comfort Reads", 
      canDelete: false,
    },
    { 
      id: "5-star-vault", 
      title: "5-Star Vault",
      canDelete: false, },
  ];

  const [shelves, setShelves] = useState(initialShelves);

  function addShelf(title) {
    const newShelf = {
        id: title.toLowerCase().replaceAll(" ", "-"),
        title,
        canDelete: true,
    };

    setShelves((prevShelves) => [...prevShelves, newShelf]);
  }

  function deleteShelf(shelfId) {
    setShelves((prevShelves) =>
    prevShelves.filter((shelf) => shelf.id !== shelfId)
    );

    setBooksData((prevBooks) => {
      const updatedBooks = { ...prevBooks };

      Object.keys(updatedBooks).forEach((bookId) => {
        if (updatedBooks[bookId].status === shelfId) {
          updatedBooks[bookId] = {
            ...updatedBooks[bookId],
            status: "none",
          };
        }
      });

      return updatedBooks;
    });
  }
  
  return (
    <div className="app">
      <Header />
        <ScrollToTop />
        
        <Routes>
          <Route 
            path='/' 
            element={
              <Home
                books={booksData}
                updateBookProgress={updateBookProgress} 
              />} />
          <Route 
            path='/library' 
            element={
              <Library 
                books={booksData}
                updateBookProgress={updateBookProgress}
                shelves={shelves}
                addShelf={addShelf}
                deleteShelf={deleteShelf}
            />} />
          <Route 
            path='/discover' 
            element={<Discover books={booksData} />} 
          />
          <Route 
            path='/search' 
            element={<Search />} 
          />
          <Route
            path='/searchResults'
            element={<SearchResults books={booksData} />} />
          <Route 
            path='/books/:bookId' 
            element={
              <BookDetails 
                books={booksData}
                shelves={shelves}
                updateBookStatus={updateBookStatus}
              />
            } 
          />
          <Route
            path='/genres/:genreId'
            element={<GenrePage books={booksData} />}
          />
          <Route
            path="/shelf/:shelfId"
            element={<ShelfPage books={booksData} />}
          />
          <Route
            path="/featured/:listId"
            element={<FeaturedListPage books={booksData} />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App
