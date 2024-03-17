import React, { useState, useEffect } from 'react';
import { swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(swiggy_api_URL);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setRestaurants(data);
        setFilteredRestaurants(data); // Initially display all restaurants
        setError(""); // Reset error message upon successful fetch
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError("Failed to load restaurants. Please try again later.");
      }
    };

    fetchRestaurants();
  }, []);

  const handleSearch = () => {
    const filteredData = filterData(searchText, restaurants);
    setFilteredRestaurants(filteredData);
    if (filteredData.length === 0) {
      setError("No restaurants found matching your search.");
    } else {
      setError(""); // Reset error message if search finds results
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))
        ) : (
          !error && <div>Loading restaurants...</div> // Show loading message only if there's no error
        )}
      </div>
    </>
  );
};

export default Body;
