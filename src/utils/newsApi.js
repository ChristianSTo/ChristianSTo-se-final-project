const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const fetchUrl = `${newsApiBaseUrl}?q=chicago&pageSize=100&apiKey=`;

const checkRes = (res) => {
  if (!res.ok) {
    const error = new Error(`Error ${res.status}`);
    error.status = res.status;
    return Promise.reject(error);
  }
  return res.json();
};

export const getNews = (API_Key) => {
  return fetch(`${fetchUrl}${API_Key}`)
    .then(checkRes)
    .then((data) => {
      if (data.status === "error") {
        return Promise.reject(new Error(`NewsApi Error: ${data.message}`));
      }
      if (!data.articles) {
        return Promise.reject(new Error(`No articles found`));
      }
      return data;
    });
};
