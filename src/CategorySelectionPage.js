import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CategorySelectionPage.css";

const CategorySelectionPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem("selectedCategories")) || []
  );
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  const handleCategoryClick = (category) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      const index = updatedCategories.indexOf(category);
      updatedCategories.splice(index, 1);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
    setError(""); // Reset error message when a category is selected/unselected
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  const categories = [
    { name: "Action", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-2.png" },
    { name: "Drama", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-3@2x.png" },
    { name: "Romance", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-4@2x.png" },
    { name: "Thriller", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-6@2x.png" },
    { name: "Western", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-7@2x.png" },
    { name: "Horror", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-8@2x.png" },
    { name: "Comedy", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-10@2x.png" },
    { name: "Sci-Fi", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-11@2x.png" },
    { name: "Fantasy", imageSrc: "https://c.animaapp.com/NCDgkgl1/img/image-9@2x.png" }
  ];

  const handleNextClick = () => {
    if (selectedCategories.length < 3) {
      setError("Select at least 3 categories.");
    } else {
      console.log("Next button clicked. Selected Categories:", selectedCategories);
      history.push("/Home"); // Navigate to the next page
    }
  };

  return (
    <div className="page">
      <div className="content">
        <div className="category-heading">
          <div className="text-wrapper-2">Super app</div>
          <div className="text-wrapper-3">Choose your entertainment category</div>
          <div className="selected-categories">
            <h3>Selected Categories:</h3>
            <ul>
              {selectedCategories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <div className="error-message">{error}</div>
        </div>
        <div className="category-group">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${isCategorySelected(category.name) ? "selected" : ""}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-name">{category.name}</div>
              {isCategorySelected(category.name) && <div className="category-selected">X</div>}
              <img className="category-image" alt={category.name} src={category.imageSrc} />
            </div>
          ))}
        </div>
        <div className="next-button">
          <button onClick={handleNextClick}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionPage;