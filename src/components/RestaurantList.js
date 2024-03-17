import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import {swiggy_api_URL} from '../utils/constants';

// This component fetches data from an API and displays a list of restaurants
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(swiggy_api_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurants(data); // Assuming the API returns an array of restaurants
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="restaurant-list">
      {restaurants.map(({ id, name, image, description }) => (
        <RestaurantCard key={id} name={name} image={image} description={description} />
      ))}
    </div>
  );
};
export default RestaurantList;