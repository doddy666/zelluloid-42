import React from 'react';
import './notFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 – Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist or was moved.</p>
      <a href="#/">Back to Home</a> {/* HashRouter braucht #/ */}
    </div>
  );
};

export default NotFound;
