import React from 'react';
import styles from './UserProfileCard.module.css'; // Import the CSS module

const UserProfileCard = ({ userDetails, selectedCategories }) => {
  return (
    <div className={styles.card}> {/* Use the className from the CSS module */}
      <div>
      <img src="/Images/CardImage.png" alt="card" />
      </div>
      <div className={styles['user-profile-card']}> {/* Use the className from the CSS module */}
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.username}</p>
        <ul>
          {selectedCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfileCard;
