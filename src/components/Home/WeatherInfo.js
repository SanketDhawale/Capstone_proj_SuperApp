import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTemperatureLow, faCloudShowersHeavy, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherInfo.module.css'; // Import the CSS module

const WeatherInfo = ({ weather }) => {
  return (
    <div className={`${styles['weather-info-card']} card`}>
      <div className={styles['upper-part']}>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>

      <div className={styles['lower-part']}>
        <div className={styles['weather-info']}>
          <div><p>
               <FontAwesomeIcon icon={faTachometerAlt} /> {weather.description}
             </p>
             
          </div><h1>|</h1>
          <div>
          <p>
               <FontAwesomeIcon icon={faTemperatureLow} /> {weather.temperature}
             </p>
            {weather.heavyRain && (
              <p>
                <FontAwesomeIcon icon={faCloudShowersHeavy} /> {weather.heavyRain}
              </p>
            )
            }
            <p>
              <FontAwesomeIcon icon={faTachometerAlt} /> {weather.pressure}
          
            </p>
          </div><h1>|</h1>
          <div>
            <p>
              <FontAwesomeIcon icon={faTint} /> {weather.humidity}
            </p>
            <p>
              <FontAwesomeIcon icon={faWind} /> {weather.wind}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
