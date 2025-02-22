import { useEffect, useState } from "react";
import "../blocks/Article.css";
import ArticleItem from "./ArticleItem";
import { getNews } from "../utils/newsApi";
import { API_Key } from "../utils/constants";

function Article({
  searchValue,
  addBookMarkArticle,
  bookMarkedArticles,
  isBookMarked,
  bookMarkItem,
  isSignedIn,
}) {
  const [articles, setArticles] = useState([]);
  // show articles based on current search bar
  const showedArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [showMoreButtonStyle, setShowMoreButtonStyle] = useState({
    display: "flex",
  });
  const [showLessButtonStyle, setShowLessButtonStyle] = useState({
    display: "none",
  });
  const [articleArraySize, setArticleArraySize] = useState(3);

  const showMore = () => {
    setArticleArraySize(articleArraySize + 6);
    setShowLessButtonStyle({ display: "flex" });
  };
  const showLess = () => {
    setArticleArraySize(articleArraySize - articleArraySize + 3);
    setShowLessButtonStyle({ display: "none" });
  };
  // limits the amount of articles to prevent overcrowded website
  const articleAmount = showedArticles.slice(0, articleArraySize);

  const [isHover, setIsHover] = useState(null);

  useEffect(() => {
    getNews(API_Key)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => console.error("error fetching news:", error));
  }, []);

  useEffect(() => {
    if (articleAmount.length >= showedArticles.length) {
      if (showMoreButtonStyle.display !== "none") {
        setShowMoreButtonStyle({ display: "none" });
      }
    } else if (showMoreButtonStyle.display !== "flex") {
      setShowMoreButtonStyle({ display: "flex" });
    }
  }, [articleAmount, showedArticles]);

  return (
    <>
      {showedArticles.length === 0 ? (
        <p className="article__results">Nothing found...</p>
      ) : (
        <>
          <>
            {searchValue ? (
              <p className="article__results">Search results:</p>
            ) : (
              <p className="article__results">Recommended news:</p>
            )}
          </>

          <ul className="article__news-grid">
            {articleAmount.map((article, index) => {
              const randDeg = Math.random() * 4 - 2;

              // for each article, if isHover, then do this, or else hovering changes all at once
              const articleStyle =
                isHover === index
                  ? {
                      transform: `rotate(${randDeg}deg) scale(1.05)`,
                      zIndex: "1",
                    }
                  : { transform: `rotate(0deg)` };
              const articleTime = article.publishedAt
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-");

              return (
                <ArticleItem
                  key={index}
                  index={index}
                  article={article}
                  articleStyle={articleStyle}
                  articleTime={articleTime}
                  isHover={isHover}
                  setIsHover={setIsHover}
                  bookMarkedArticles={bookMarkedArticles}
                  addBookMarkArticle={addBookMarkArticle}
                  isBookMarked={isBookMarked}
                  bookMarkItem={bookMarkItem}
                  isSignedIn={isSignedIn}
                />
              );
            })}
          </ul>
          <div className="article__news-buttons">
            <button
              type="button"
              className="article__news-button"
              onClick={showMore}
              style={showMoreButtonStyle}
            >
              Show More
            </button>
            <button
              type="button"
              className="article__news-button"
              onClick={showLess}
              style={showLessButtonStyle}
            >
              Show Less
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Article;
