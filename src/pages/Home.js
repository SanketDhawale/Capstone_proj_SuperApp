import React, { useState, useEffect } from 'react';
import UserProfileCard from '../components/Home/UserProfileCard';
import WeatherInfo from '../components/Home/WeatherInfo';
import RandomNews from '../components/Home/RandomNews';
import './Home.css'; // Update with your CSS file name
import { useHistory } from 'react-router-dom';
import Notes from '../components/Home/Notes';
import Timer from '../components/Home/Timer';

const Home = () => {
  const [userDetails] = useState(JSON.parse(localStorage.getItem('formData')) || {});
  const [selectedCategories] = useState(JSON.parse(localStorage.getItem('selectedCategories')) || {});
  const [weather, setWeather] = useState({
    description: '',
    temperature: '',
    heavyRain: '',
    pressure: '',
    humidity: '',
    wind: '',
  });
  const [randomNews, setRandomNews] = useState(null);

  const getWeather = () => {
    const apiKey = 'e48027483ee1a35d36d72d3d748b493c';
    const city = 'pune';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const { weather, main, wind } = data;
        setWeather({
          description: weather[0]?.description,
          temperature: `${Math.round(main.temp - 273.15)}°C`,
          heavyRain: weather[0]?.main === 'Rain' ? 'Heavy Rain' : '',
          pressure: `${main.pressure} hPa`,
          humidity: `${main.humidity} %`,
          wind: `${wind.speed} m/s`,
        });
      })
      .catch((error) => console.error('Error fetching weather:', error));
  };

  const getNews = () => {
    const apiKey = '1bc404d57c7846218ffcdf0ce15adc8a';
    const country = 'in';

    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const articlesWithImages = data.articles.filter(article => article.description && article.urlToImage);
        
        if (articlesWithImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * articlesWithImages.length);
          setRandomNews(articlesWithImages[randomIndex]);
        } else {
          setRandomNews(null);
        }
      })
      .catch((error) => console.error('Error fetching news:', error));
  };

  useEffect(() => {
    getWeather();
    getNews();
  }, []);
  const history = useHistory();

  const handleBrowseButtonClick = () => {
    history.push('/next-page'); // Update with the actual path for the next page
  };

  return (
    <div className="next-page">
      <div className="left-section">
        <div className="upper-part">
          <UserProfileCard userDetails={userDetails} selectedCategories={selectedCategories} />
          <Notes/>
        </div>
        <div className="lower-part">
          <WeatherInfo weather={weather} />
          <Timer/>
        </div>
       
        <div>
      
    </div>
      </div>

      <div className="right-section">
        <RandomNews randomNews={randomNews} />
      </div>
      <div className="browse-button" onClick={handleBrowseButtonClick}>
        Browse
      </div>
    </div>
  );
};

export default Home;





