// url


const apiKey = "c5030163187e4eeeaedee411fe43f0e6";
const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = '2020-10-27';//new Date(year, month, day);


const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&sortBy=publishedAt&language
=en&apiKey=${apiKey}`


export default fullUrl;