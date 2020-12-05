// url


const apiKey = 'c5030163187e4eeeaedee411fe43f0e6';
const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = new Date();
const valueOfNews ='30'

const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&pageSize=${valueOfNews}&sortBy=publishedAt&language
=en&apiKey=${apiKey}`


export default fullUrl;