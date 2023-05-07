import axios from 'axios';

const apiKey = '19cc15b927787e494a1e481334dbada8';

export const FetchRandom = async (updateStateCallback) => {
    
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.results;
        updateStateCallback(data);

    } catch (error) {
        console.error(error);
    }
}

export const fetchCategories = async (updateStateCallback) => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        updateStateCallback(data);

    } catch (error) {
        console.error(error);
    }
}

export const fetchCategoryImage = async (id) => {
    const apiUrl = `https://api.themoviedb.org/3/genre/${id}/movies?api_key=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const { results } = response.data;
      const randomIndex = Math.floor(Math.random() * results.length);
      const movieId = results[randomIndex].id;
      const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=images`);
      const { images } = movieResponse.data;
      const imageUrl = `https://image.tmdb.org/t/p/w1280${images.backdrops[0].file_path}`;
      return imageUrl;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchContent = async (id, type) => {
    let apiUrl = "";
    if(type === 'movie') {
        apiUrl = `https://api.themoviedb.org/3/movie/${id}`
    } else {
        apiUrl = `https://api.themoviedb.org/3/tv/${id}`
    }
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data;

    } catch (error) {
        console.error(error);
    }
}

export const fetchTopRatedTv = async () => {
    const apiUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.results;
        return data;

    } catch (error) {
        console.error(error);
    }
}

export const fetchPopularTv = async () => {
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.results;
        return data;

    } catch (error) {
        console.error(error);
    }
}