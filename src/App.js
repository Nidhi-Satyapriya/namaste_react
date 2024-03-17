import React from 'react';
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body' ;
import './App.css';
// import ReactDOM from "react-dom/client";
// import {createRouter} from "react-router-dom "
// import { BrowserRouter } from "react-router-dom";
// import Navbar from './components/Navbar';
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant Container
 *     -Restaurant Card
 * Footer
 * -Copyright
 * -Links
 * -Address
 * 
 */

const App = () => {
   return (
     <React.Fragment>
       <Header />
       <Body />
       
     </React.Fragment>
   );
 };


export default App;
