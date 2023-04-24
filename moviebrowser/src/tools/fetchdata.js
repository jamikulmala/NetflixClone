import axios from 'axios';

export const FetchRandom = async (updateStateCallback) => {
    
    const apiKey = '19cc15b927787e494a1e481334dbada8';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.results;
        updateStateCallback(data);
    } catch (error) {
        console.error(error);
    }
}