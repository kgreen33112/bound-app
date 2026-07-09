import './App.css'
import { books as initialBooks } from "./assets/data/books.js";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/Helpers/ScrollToTop.jsx';
import Home from './pages/Home/Home.jsx';
import Library from './pages/Library/Library.jsx';
import Discover from './pages/Discover/Discover.jsx';
import Search from './pages/Search/Search.jsx';
import BookDetails from './pages/BookDetails/BookDetails.jsx';
import ShelfPage from './pages/ShelfPage/ShelfPage.jsx'
import SearchResults from './pages/Search/SearchResults.jsx';
import GenrePage from './pages/GenrePage/GenrePage.jsx';
import FeaturedListPage from './pages/FeaturedListPage/FeaturedListPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  const [booksData, setBooksData] = useState(() => {
    try {
      const savedBooks = JSON.parse(localStorage.getItem("booksData"));
      return savedBooks ?? booksData;
    } catch {
      return booksData;
    }

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
      id: "currently-reading",
      title: "Currently Reading",
      canDelete: false,
    },
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

  const [shelves, setShelves] = useState(() => {
    const savedShelves = localStorage.getItem("shelves");

    return savedShelves ? JSON.parse(savedShelves) : initialShelves;
  });

  useEffect(() => {
    localStorage.setItem("shelves", JSON.stringify(shelves));
  }, [shelves]);

  function createShelfId(title) {
    return title
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-");
  }

  function addShelf(title) {
    const trimmedTitle = title.trim();
    const newShelfId = createShelfId(trimmedTitle);

    const duplicate = shelves.some(
      (shelf) => 
        shelf.id === newShelfId
    );

    if (duplicate) {
      return false;
    }

    const newShelf = {
        id: newShelfId,
        title: trimmedTitle,
        canDelete: true,
    };

    setShelves((prevShelves) => [...prevShelves, newShelf]);

    return true;
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

  function updateBookRating(bookId, newRating) {
    setBooksData((prevBooks) => ({
      ...prevBooks,
      [bookId]: {
        ...prevBooks[bookId],
        rating: newRating,
      },
    }));
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
                updateBookRating={updateBookRating}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App
