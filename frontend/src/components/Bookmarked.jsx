import { useState } from "react";
import "../blocks/Bookmarked.css";
import ArticleItem from "./ArticleItem";

function Bookmarked({
  bookMarkedArticles,
  isBookMarked,
  bookMarkItem,
  isSignedIn,
}) {
  const [isHover, setIsHover] = useState(null);

  return (
    <main className="bookmarked">
      <h2 className="bookmarked__title">Welcome.</h2>
      <>
        {bookMarkedArticles.length === 0 ? (
          <p className="bookmarked__results">
            You have no bookmarked articles.
          </p>
        ) : (
          <ul className="bookmarked__grid">
            {bookMarkedArticles.map((article, index) => {
              const randDeg = Math.random() * 4 - 2;
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
                  isBookMarked={isBookMarked}
                  bookMarkItem={bookMarkItem}
                  bookMarkedArticles={bookMarkedArticles}
                  isSignedIn={isSignedIn}
                />
              );
            })}
          </ul>
        )}
      </>
    </main>
  );
}

export default Bookmarked;
