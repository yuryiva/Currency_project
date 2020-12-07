// url



const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = new Date();
const valueOfNews ='30'

const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&pageSize=${valueOfNews}&sortBy=publishedAt&language
=en&apiKey=${process.env.REACT_APP_API_NEWS_KEY}`


export default fullUrl;