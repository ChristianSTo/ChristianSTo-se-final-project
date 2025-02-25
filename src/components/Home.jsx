import { useState } from "react";
import "../blocks/Home.css";
import Article from "./Article";
import chicagoSkyline from "../assets/chiSkyline.svg";
function Home({
  bookMarkedArticles,
  addBookMarkArticle,
  isBookMarked,
  bookMarkItem,
  isSignedIn,
}) {
  const [searchValue, setSearchValue] = useState("");
  const changeInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <main className="home">
      <section className="home__section">
        <div className="home__container">
          <img
            className="home__image"
            src={chicagoSkyline}
            alt="chicagoSkyline"
          ></img>
          <form className="home__form">
            <input
              className="home__search-bar"
              placeholder="Search Chicago News"
              onChange={changeInput}
            ></input>
          </form>
        </div>
        <div className="home__background-band"></div>
      </section>
      <Article
        searchValue={searchValue}
        bookMarkedArticles={bookMarkedArticles}
        addBookMarkArticle={addBookMarkArticle}
        isBookMarked={isBookMarked}
        bookMarkItem={bookMarkItem}
        isSignedIn={isSignedIn}
      />
    </main>
  );
}

export default Home;
