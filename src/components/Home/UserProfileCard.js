import React from 'react';
import styles from './UserProfileCard.module.css'; // Import the CSS module

const UserProfileCard = ({ userDetails, selectedCategories }) => {
  // Group the categories into sets of three
  const groupedCategories = [];
  for (let i = 0; i < selectedCategories.length; i += 3) {
    groupedCategories.push(selectedCategories.slice(i, i + 3));
  }

  return (
    <div className={styles.card}>
      <div>
        <img src="/Images/CardImage.png" alt="card" />
      </div>
      <div className={styles['user-profile-card']}>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.username}</p>
        <div className={styles['choose-category']}>
          {groupedCategories.map((group, index) => (
            <div key={index}>
              <ul>
                {group.map((category, catIndex) => (
                  <li key={catIndex}>{category}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
