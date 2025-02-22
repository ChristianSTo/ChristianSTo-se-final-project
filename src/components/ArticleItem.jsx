import { useEffect, useState, useRef } from "react";
import "../blocks/ArticleItem.css";
import bookMarkPlusImg from "../assets/bookMarkPlus.svg";
import bookMarkRemoveImg from "../assets/bookMarked.svg";

function ArticleItem({
  article,
  articleStyle,
  articleTime,
  index,
  setIsHover,
  bookMarkedArticles,
  bookMarkItem,
  isSignedIn,
}) {
  const timeoutRef = useRef(null);
  const [isWarnVisible, setIsWarnVisible] = useState(false);
  const isBookMarked = bookMarkedArticles.some(
    (item) => item.url === article.url
  );

  const bookMarkStyle = {
    backgroundImage: `url("${
      isBookMarked ? bookMarkRemoveImg : bookMarkPlusImg
    }")`,
    opacity: isBookMarked ? "1" : "",
  };

  const handleUnauthorizedBookmark = () => {
    if (!isSignedIn) {
      setIsWarnVisible(true);
    }
    timeoutRef.current = setTimeout(() => setIsWarnVisible(false), 2750);
  };
  const warnStyle = {
    display: isSignedIn ? "none" : isWarnVisible ? "block" : "none",
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <li
      key={index}
      className="article-item"
      style={articleStyle}
      onMouseEnter={() => setIsHover(index)}
      onMouseLeave={() => setIsHover(null)}
      onClick={() => {
        window.open(article.url, "_blank");
      }}
    >
      <button
        type="button"
        className="article-item__bookmark"
        style={bookMarkStyle}
        onClick={(evt) => {
          handleUnauthorizedBookmark();
          bookMarkItem(evt, article);
        }}
      >
        <span className="article-item__warn" style={warnStyle}>
          sign in to access bookmark
        </span>
      </button>
      <img
        className="article-item__image"
        src={article.urlToImage}
        alt={article.title}
      ></img>
      <p className="article-item__title">{article.title}</p>
      <p className="article-item__description">{article.description}</p>
      <div className="article-item__subcontainer">
        <p className="article-item__subtext">Date: {articleTime}</p>
        <p className="article-item__subtext">Source: {article.source.name}</p>
      </div>
    </li>
  );
}

export default ArticleItem;
