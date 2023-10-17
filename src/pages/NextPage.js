import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NextPage.css';
import image2 from '../assets/movies_page.png';


const NextPage = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

  useEffect(() => {
    const apiKey = 'b39fae28754f0a221a142410e8071a31';

    const fetchMovies = async (category) => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: apiKey,
            query: category,
          },
        });

        console.log(`Movies for ${category}:`, response.data.results);
        return response.data.results;
      } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
      }
    };

    const fetchAllMovies = async () => {
      const moviesData = await Promise.all(selectedCategories.map(category => fetchMovies(category)));
      const moviesByCategory = selectedCategories.reduce((acc, category, index) => {
        acc[category] = moviesData[index];
        return acc;
      }, {});
      setMoviesByCategory(moviesByCategory);
    };

    fetchAllMovies();
  }, [selectedCategories]);

  return (
    <div className="category-container">
      <div className='heading'>
      <h1>Super app</h1>
      <img src={image2} alt="movie" />
      </div>
      <h2>Entertainment according to your choice</h2>
      
      {selectedCategories.map(category => (
        <div key={category} className="category">
          <h2 className="category-name">{category}</h2>
          <div className="movies-posters">
            {moviesByCategory[category] && moviesByCategory[category].map(movie => (
              <div key={movie.id} className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NextPage;
