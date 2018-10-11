import PropTypes from 'prop-types';
import React from 'react';
import Header from '../header/Header';

export default function App({ children }) {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <main className="app-main">
        <div className="app-main_container">
          {children}
        </div>
      </main>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
