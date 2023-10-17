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

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const RandomNews = ({ randomNews }) => {
  let truncatedDescription = '';

  if (randomNews) {
    truncatedDescription = truncateDescription(randomNews.description);
  }

  const formattedDate = randomNews ? formatDate(randomNews.publishedAt) : '';

  return (
    <div className={styles.card}>
      {randomNews && (
        <div className={styles['news-item']}>
          <div className={styles['date-time']}>{formattedDate}</div>
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
