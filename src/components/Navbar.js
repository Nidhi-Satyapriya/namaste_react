import React from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Navbar = (props) => {
    return <div>
       <nav>
      <ul>
        <li>{props.title}</li>
        <li><a href="./home.jsx">Home</a></li>
        <li><a href="./about">About</a></li>
        
      </ul>
    </nav>
    </div>;
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.propTypes={
    title: PropTypes.string
}

// #endregion

export default Navbar;