import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Bookmarked from "./components/Bookmarked.jsx";
import Initiation from "./components/Initiation.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);
  const bookMarkItem = (evt, article) => {
    evt.stopPropagation();
    setIsBookMarked((prev) => !prev);
    addBookMarkArticle(article);
  };

  // lift up states to top parent with function method
  const [bookMarkedArticles, setBookMarkedArticles] = useState([]);
  const addBookMarkArticle = (article) => {
    // similar to addItem in wtwr
    setBookMarkedArticles((prevBookMarks) => {
      if (prevBookMarks.some((item) => article.title === item.title)) {
        return prevBookMarks.filter((item) => item.title !== article.title);
      }
      return [...prevBookMarks, article];
    });
  };

  return (
    <div className="app">
      <Nav signedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              bookMarkedArticles={bookMarkedArticles}
              addBookMarkArticle={addBookMarkArticle}
              bookMarkItem={bookMarkItem}
              isBookMarked={isBookMarked}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/bookmarked"
          element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <Bookmarked
                bookMarkedArticles={bookMarkedArticles}
                bookMarkItem={bookMarkItem}
                isBookMarked={isBookMarked}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/initiation"
          element={
            isSignedIn ? <Navigate to="/bookmarked" replace /> : <Initiation />
          }
        />
        <Route
          path="*"
          element={
            isSignedIn ? (
              <Navigate to="/bookmarked" replace />
            ) : (
              <Navigate to="/initiation" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
