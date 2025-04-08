import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - not found</h1>
      <p>Oops! The page you are looking for is not existing.</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default NotFound;
