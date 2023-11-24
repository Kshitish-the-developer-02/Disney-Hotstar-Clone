import axios from 'axios';

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='094b5f0ec137ac535f4343e485ffaf12'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=094b5f0ec137ac535f4343e485ffaf12';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMoviesByGenerId=(id)=>
     axios.get(movieByGenreBaseURL+"&with_geners="+id)


export default{
    getTrendingVideos,
    getMoviesByGenerId
}