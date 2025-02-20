// access newsApi

export const getNews = (API_Key) => {
  return fetch(`https://newsapi.org/v2/everything?q=chicago&apiKey=${API_Key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
