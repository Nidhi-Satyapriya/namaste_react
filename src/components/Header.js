import React, { useState } from 'react';

// Title component for displaying the logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" // Ensure this URL is correct and the image is accessible
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);

// Header component for the header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming the default state is "logged out"

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          {/* Conditional rendering based on isLoggedIn state */}
          {isLoggedIn ? (
            <li>
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                className="login-btn"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            </li>
          )}
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
