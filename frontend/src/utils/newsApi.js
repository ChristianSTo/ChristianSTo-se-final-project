// access newsApi

const checkRes = (res) => {
  if (!res.ok) {
    const error = new Error(`Error ${res.status}`);
    error.status = res.status;
    return Promise.reject(error);
  }
  return res.json();
};

export const getNews = (API_Key) => {
  return fetch(`https://newsapi.org/v2/everything?q=chicago&apiKey=${API_Key}`)
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
