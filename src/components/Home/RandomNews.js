// RandomNews.js

import React from 'react';
import styles from './RandomNews.module.css';

const MAX_DESCRIPTION_LINES = 6;

const truncateDescription = (description) => {
  const lines = description.split('\n');
  if (lines.length > MAX_DESCRIPTION_LINES) {
    return lines.slice(0, MAX_DESCRIPTION_LINES).join('\n') + '...';
  }
  return description;
};

const RandomNews = ({ randomNews }) => {
  let truncatedDescription = '';

  if (randomNews) {
    truncatedDescription = truncateDescription(randomNews.description);
  }

  return (
    <div className={styles.card}>
      {randomNews && (
        <div className={styles['news-item']}>
          <img className={styles['image-size']} src={randomNews.urlToImage} alt="News" />
          <h3>{randomNews.title}</h3>
          <div className={styles['news-details']}>
            <p>{truncatedDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomNews;
